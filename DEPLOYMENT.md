# Deployment Guide

Complete guide to deploy the portfolio website to various platforms.

---

## Table of Contents
- [Vercel (Recommended)](#vercel-recommended)
- [Netlify](#netlify)
- [AWS](#aws)
- [Docker & Self-Hosted](#docker--self-hosted)
- [GitHub Pages](#github-pages)
- [Environment Configuration](#environment-configuration)
- [SSL/TLS Certificates](#ssltls-certificates)
- [Custom Domain](#custom-domain)
- [Monitoring & Analytics](#monitoring--analytics)
- [Troubleshooting](#troubleshooting)

---

## Vercel (Recommended)

Vercel is the optimal platform for Next.js applications.

### Prerequisites
- GitHub account with repository
- Vercel account (free tier available)

### Deployment Steps

#### Step 1: Prepare Repository
```bash
# Ensure code is committed and pushed to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Sign In"
3. Choose "GitHub" as provider
4. Authorize Vercel to access your repositories

#### Step 3: Import Project
1. Click "Add New..." → "Project"
2. Select your portfolio repository
3. Vercel auto-detects Next.js configuration
4. Click "Import"

#### Step 4: Configure Environment
1. In "Environment Variables" section:
   - Add `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
2. Select deployment branch (usually `main`)
3. Click "Deploy"

#### Step 5: Monitor Build
- Vercel shows build progress in real-time
- Wait for deployment to complete
- Automatic preview URL is generated

### Vercel Configuration File (Optional)

Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "env": {
    "NEXT_PUBLIC_SITE_URL": "@site-url"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "Referrer-Policy",
          "value": "no-referrer-when-downgrade"
        }
      ]
    }
  ]
}
```

### Enable Auto-Deployment
1. Go to Project Settings
2. Under "Git" → select branch
3. Enable "Automatic deployments on push"
4. Every push triggers automatic build and deployment

### Vercel CLI Deployment (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from command line
vercel

# Production deployment
vercel --prod
```

---

## Netlify

### Prerequisites
- Netlify account
- GitHub repository

### Deployment Steps

#### Step 1: Connect GitHub
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign Up" with GitHub
3. Authorize Netlify access

#### Step 2: Create New Site
1. Click "New site from Git"
2. Select GitHub provider
3. Choose repository
4. Click "Deploy"

#### Step 3: Build Configuration
Netlify auto-detects Next.js, but you can customize:

**Build settings**:
- Build command: `npm run build`
- Publish directory: `.next`
- Functions directory: `netlify/functions`

#### Step 4: Environment Variables
1. Go to Site Settings
2. Build & deploy → Environment
3. Add environment variables:
   ```
   NEXT_PUBLIC_SITE_URL = https://your-domain.com
   ```

#### Step 5: Deploy Functions (API Routes)
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  functions = "netlify/functions"
  publish = ".next"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

---

## AWS

### Option 1: AWS Amplify (Recommended for AWS)

#### Prerequisites
- AWS account
- GitHub repository

#### Steps
1. Go to AWS Amplify Console
2. Click "Create app" → "Host web app"
3. Select GitHub as source
4. Authorize and select repository
5. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       install:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```
6. Deploy

### Option 2: AWS EC2 + PM2

#### Prerequisites
- AWS EC2 instance
- Node.js 18+ installed
- PM2 process manager

#### Steps
```bash
# SSH into EC2 instance
ssh -i your-key.pem ec2-user@your-ec2-ip

# Install dependencies
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Clone repository
git clone https://github.com/your-repo.git
cd Portfolio.Geetha

# Install and build
npm install
npm run build

# Start with PM2
pm2 start npm --name portfolio -- start
pm2 startup
pm2 save

# Configure Nginx reverse proxy
sudo yum install -y nginx
```

---

## Docker & Self-Hosted

### Prerequisites
- Docker installed
- Docker Hub account (optional)

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Runtime stage
FROM node:18-alpine

WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV NODE_ENV production

CMD ["npm", "start"]
```

### Docker Compose

```yaml
version: '3.8'

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://your-domain.com
    restart: unless-stopped

  # Optional: Nginx reverse proxy
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - portfolio
    restart: unless-stopped
```

### Build and Run

```bash
# Build image
docker build -t portfolio:latest .

# Run container
docker run -p 3000:3000 portfolio:latest

# Push to Docker Hub
docker tag portfolio:latest your-username/portfolio:latest
docker push your-username/portfolio:latest

# Using Docker Compose
docker-compose up -d
```

---

## GitHub Pages

### Prerequisites
- GitHub repository
- GitHub Actions enabled

### Deployment Steps

#### Step 1: Update next.config.js
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio.Geetha',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

#### Step 2: Create GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

#### Step 3: Configure GitHub Pages
1. Go to repository Settings
2. Under "Pages" section
3. Select "GitHub Actions" as source
4. Commits to main branch trigger automatic deployment

---

## Environment Configuration

### Production Environment Variables

Create `.env.production`:
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Analytics (Optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X

# Database (if using MongoDB)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Email (if sending contact notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Secure Environment Variables

**For Vercel:**
1. Project Settings → Environment Variables
2. Add each variable for production
3. Vercel encrypts sensitive data

**For Netlify:**
1. Site Settings → Build & deploy → Environment
2. Add variables
3. Netlify secures them automatically

---

## SSL/TLS Certificates

### Automatic (Recommended)

**Vercel**: Automatically provisions SSL certificates
**Netlify**: Free SSL via Let's Encrypt
**AWS Amplify**: Automatic HTTPS

### Manual (Self-Hosted)

Using Let's Encrypt with Certbot:
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate certificate
sudo certbot certonly --nginx -d your-domain.com

# Auto-renewal
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

---

## Custom Domain

### Vercel
1. Go to Project Settings
2. Under "Domains"
3. Add custom domain
4. Follow DNS configuration instructions
5. Vercel provides automatic HTTPS

### Netlify
1. Site Settings → Domain management
2. Add custom domain
3. Update DNS records at registrar
4. Wait for DNS propagation

### AWS Route 53
```bash
# Create hosted zone
# Add A record pointing to CloudFront distribution
# Or ALB in case of EC2
```

---

## Monitoring & Analytics

### Vercel Analytics
- Dashboard shows performance metrics
- Core Web Vitals monitoring
- Real-time error tracking
- Automatic alerts for issues

### Google Analytics (Optional)

Add to `app/layout.tsx`:
```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Sentry Error Tracking
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

---

## Troubleshooting

### Build Fails with "Module not found"
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Environment Variables Not Loading
1. Verify `.env.local` exists
2. Check variables in platform settings
3. Restart build process
4. Clear browser cache

### Slow Build Times
- Check for large dependencies
- Use npm ci instead of npm install
- Enable caching in CI/CD
- Optimize images before deployment

### CORS Issues
Update `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/api/:path*',
      headers: [
        { key: 'Access-Control-Allow-Origin', value: '*' },
        { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE' },
      ],
    },
  ]
}
```

---

## Pre-Deployment Checklist

- ✅ All dependencies updated
- ✅ Code tested locally
- ✅ No console errors or warnings
- ✅ Environment variables configured
- ✅ Resume file added
- ✅ Domain configured
- ✅ SSL certificate obtained
- ✅ Analytics setup (optional)
- ✅ Performance optimized
- ✅ SEO metadata verified
- ✅ Backup of repository
- ✅ Deployment plan documented

---

## Post-Deployment

### Verification Steps
1. Visit deployed URL
2. Test all pages and links
3. Verify contact form works
4. Check dark/light mode toggle
5. Test mobile responsiveness
6. Verify social links
7. Check resume download

### Maintenance
- Monitor error tracking
- Review performance metrics
- Update content regularly
- Keep dependencies updated
- Backup data periodically

---

**Last Updated**: April 17, 2024
