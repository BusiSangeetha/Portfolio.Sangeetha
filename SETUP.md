# Quick Start & Setup Guide

Complete step-by-step guide to get the portfolio up and running locally and deploy it.

---

## 🚀 Quick Start (5 minutes)

### 1. Clone the Repository
```bash
cd Portfolio.Geetha
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📋 Requirements

### System Requirements
- **Node.js**: 18.17.0 or later
- **npm**: 9.0.0 or later (or yarn/pnpm)
- **Operating System**: Windows, macOS, or Linux
- **RAM**: 2GB minimum
- **Disk Space**: 500MB

### Browser Requirements
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers

---

## 💻 Local Development Setup

### Step 1: Prerequisites Installation

#### Windows
```powershell
# Install Node.js using Chocolatey
choco install nodejs

# Or download from https://nodejs.org/
# Download LTS version and run installer
```

#### macOS
```bash
# Using Homebrew
brew install node

# Or download from https://nodejs.org/
```

#### Linux (Ubuntu/Debian)
```bash
# Using NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Verify Installation
```bash
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher
```

### Step 3: Clone Repository
```bash
# HTTPS
git clone https://github.com/BusiSangeetha/Portfolio.Geetha.git

# Or SSH
git clone git@github.com:BusiSangeetha/Portfolio.Geetha.git

# Navigate to project
cd Portfolio.Geetha
```

### Step 4: Install Dependencies
```bash
npm install
```

This installs all packages from `package.json`:
- Next.js
- React
- Tailwind CSS
- Framer Motion
- TypeScript
- ESLint

### Step 5: Create Environment File
```bash
# Copy example env file (optional)
cp .env.local.example .env.local

# Or create manually
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" > .env.local
```

### Step 6: Start Development Server
```bash
npm run dev
```

Output:
```
> Portfolio@1.0.0 dev
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

### Step 7: Open Application
1. Open browser
2. Navigate to `http://localhost:3000`
3. Application should load successfully

---

## 🎨 Customization Guide

### Update Personal Information

#### Contact Information
File: `components/Footer.tsx` and `app/contact/page.tsx`
```typescript
// Update these values:
- Phone: +91 8341809236 → Your phone
- Email: bsangeetha685@gmail.com → Your email
- LinkedIn: www.linkedin.com/in/busi-sangeetha-09701b2a3 → Your profile
- GitHub: https://github.com/BusiSangeetha → Your profile
```

#### Hero Section
File: `components/Hero.tsx`
```typescript
// Update the introduction text
<h1 className="text-5xl md:text-6xl font-bold">
  Hi, I'm <span>Sangeetha</span>
</h1>
```

#### About Page
File: `app/about/page.tsx`
```typescript
// Update personal details:
- Name: Busi Sangeetha
- University: Malla Reddy University
- CGPA: 8.79
- Location: Telangana, India
```

### Add Your Projects

File: `app/projects/page.tsx`
```typescript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Your project description',
    technologies: ['Tech1', 'Tech2'],
    icon: '🚀',
  },
  // Add more projects...
]
```

### Update Skills

File: `app/skills/page.tsx`
```typescript
const skillCategories = [
  {
    category: 'Your Category',
    skills: [
      {
        title: 'Skill Name',
        icon: '🎨',
        level: 85,
      },
    ],
  },
]
```

### Customize Colors

File: `tailwind.config.ts`
```typescript
colors: {
  'primary': '#6366f1',      // Primary blue
  'secondary': '#8b5cf6',    // Purple accent
  // Add your custom colors
}
```

### Update Resume

File: `public/resume.txt`
- Edit the resume file with your updated information
- Download link in Hero section will work automatically

---

## 🔨 Available Commands

### Development
```bash
npm run dev
# Start development server with hot reload
# Access at http://localhost:3000
```

### Production Build
```bash
npm run build
# Create optimized production build
# Output: .next directory
```

### Start Production Server
```bash
npm start
# Run production-built application
# Requires build first
```

### Linting
```bash
npm run lint
# Check code quality
# Fix issues: npm run lint --fix
```

---

## 📁 Project Structure Explained

```
Portfolio.Geetha/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (/)
│   ├── about/page.tsx     # About page (/about)
│   ├── skills/page.tsx    # Skills page (/skills)
│   ├── projects/page.tsx  # Projects page (/projects)
│   ├── certifications/page.tsx  # Certifications page
│   ├── contact/page.tsx   # Contact page
│   ├── api/contact/route.ts  # Contact form API
│   ├── layout.tsx         # Root layout wrapper
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── Hero.tsx          # Hero section
│   ├── SkillCard.tsx     # Skill display card
│   ├── ProjectCard.tsx   # Project showcase card
│   └── CertificationCard.tsx  # Certification card
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static files
│   ├── resume.txt        # Your resume
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # Site map for SEO
├── data/                 # Data storage (auto-created)
│   └── messages.json     # Contact form messages
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies list
├── README.md             # Project documentation
├── ARCHITECTURE.md       # Architecture guide
├── DEPLOYMENT.md         # Deployment guide
└── SETUP.md              # This file
```

---

## 🧪 Testing

### Manual Testing Checklist

#### Pages
- [ ] Home page loads with animations
- [ ] About page displays content correctly
- [ ] Skills page shows progress bars
- [ ] Projects page shows project cards
- [ ] Certifications page displays achievements
- [ ] Contact page form works

#### Features
- [ ] Dark/Light mode toggle works
- [ ] Mobile navigation menu works
- [ ] Responsive design on mobile (360px)
- [ ] Responsive design on tablet (768px)
- [ ] Responsive design on desktop (1920px)
- [ ] All links navigate correctly
- [ ] All social links open in new tab

#### Contact Form
- [ ] Name field validation works
- [ ] Email field validation works
- [ ] Message field validation works
- [ ] Form submission successful
- [ ] Success message displays
- [ ] Error handling works

#### Performance
- [ ] Page loads in < 3 seconds
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Images load correctly
- [ ] No layout shift during load

---

## 🐛 Common Issues & Solutions

### Issue: npm install fails
```bash
# Solution: Clear cache and try again
npm cache clean --force
npm install

# Or use different registry
npm install --registry https://registry.npmjs.org/
```

### Issue: Port 3000 already in use
```bash
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On macOS/Linux
lsof -i :3000
kill -9 <PID>

# Or use different port
npm run dev -- -p 3001
```

### Issue: Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Dark mode not persisting
- Check browser localStorage is enabled
- Clear browser cache and cookies
- Verify browser supports localStorage

### Issue: Contact form not working
```bash
# Check data directory exists
mkdir -p data

# Verify API route is accessible
# Navigate to http://localhost:3000/api/contact
```

---

## 🔐 Security Best Practices

### Before Deployment

- [ ] Remove development dependencies: `npm prune --production`
- [ ] Update all dependencies: `npm update`
- [ ] Check for vulnerabilities: `npm audit`
- [ ] Fix vulnerabilities: `npm audit fix`
- [ ] Review environment variables - no secrets in code
- [ ] Test contact form thoroughly
- [ ] Verify all links are working
- [ ] Check sitemap and robots.txt
- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Set up monitoring and analytics

---

## 📊 Performance Optimization

### Current Optimizations
- ✅ Next.js automatic code splitting
- ✅ Tailwind CSS minification
- ✅ Framer Motion GPU acceleration
- ✅ Lazy loading of components
- ✅ Optimized images

### Further Optimizations
```typescript
// Use next/image for image optimization
import Image from 'next/image'

<Image
  src="/profile.jpg"
  alt="Profile"
  width={400}
  height={400}
  priority // Load immediately, not lazy
/>
```

### Monitor Performance
```bash
# Use Lighthouse
# Chrome DevTools → Lighthouse → Generate report
```

---

## 📚 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Next.js Tutorial](https://nextjs.org/learn)

### React
- [React Documentation](https://react.dev)
- [React Hooks](https://react.dev/reference/react)
- [React Best Practices](https://react.dev/learn)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind Components](https://tailwindcss.com/components)
- [Tailwind Play (Sandbox)](https://play.tailwindcss.com)

### Framer Motion
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Animation Examples](https://www.framer.com/motion/animation)
- [Component API](https://www.framer.com/motion/component)

---

## 🚢 Deployment Quick Links

### Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Connect GitHub repository
3. Deploy automatically
4. See [DEPLOYMENT.md](./DEPLOYMENT.md) for details

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Deploy automatically
4. See [DEPLOYMENT.md](./DEPLOYMENT.md) for details

### Docker
```bash
docker build -t portfolio:latest .
docker run -p 3000:3000 portfolio:latest
```

---

## 📞 Support & Help

### Getting Help
1. Check the [README.md](./README.md)
2. Read [ARCHITECTURE.md](./ARCHITECTURE.md)
3. Review [DEPLOYMENT.md](./DEPLOYMENT.md)
4. Check [GitHub Issues](https://github.com/BusiSangeetha/Portfolio.Geetha/issues)

### Contact Information
- **Email**: bsangeetha685@gmail.com
- **Phone**: +91 8341809236
- **LinkedIn**: [Busi Sangeetha](https://linkedin.com/in/busi-sangeetha-09701b2a3)
- **GitHub**: [BusiSangeetha](https://github.com/BusiSangeetha)

---

## ✅ Launch Checklist

Before going live:

- [ ] All content updated with your information
- [ ] Resume file added and link working
- [ ] Contact form tested thoroughly
- [ ] All links working correctly
- [ ] Responsive design tested on all devices
- [ ] Dark/Light mode tested
- [ ] Performance optimized (Lighthouse score 90+)
- [ ] SEO metadata verified
- [ ] Security review completed
- [ ] Environment variables configured
- [ ] Domain configured
- [ ] SSL certificate obtained
- [ ] Analytics set up (optional)
- [ ] Error tracking enabled
- [ ] Backup created
- [ ] Deployment documented

---

## 🎉 Next Steps

1. **Customize Content**: Update all pages with your information
2. **Add Projects**: Add your project details
3. **Test Locally**: Run `npm run dev` and test thoroughly
4. **Deploy**: Follow deployment guide for your chosen platform
5. **Monitor**: Set up monitoring and analytics
6. **Maintain**: Keep content updated and dependencies current

---

**Happy Building! 🚀**

For more information, see the main [README.md](./README.md)

**Last Updated**: April 17, 2024
