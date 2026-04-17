# Busi Sangeetha - Personal Portfolio

A modern, professional full-stack portfolio website built with **Next.js 14**, **React**, **Tailwind CSS**, and **Framer Motion**.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Pages and Features](#pages-and-features)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [Performance Optimizations](#performance-optimizations)
- [Contributing](#contributing)

---

## ✨ Features

### Core Features
- ✅ **Responsive Design** - Mobile-first approach, works perfectly on all devices
- ✅ **Dark/Light Mode Toggle** - User preference persistence with localStorage
- ✅ **Smooth Animations** - Framer Motion animations throughout the site
- ✅ **Contact Form** - Fully functional contact form with validation
- ✅ **SEO Optimized** - Meta tags, Open Graph support
- ✅ **Professional UI** - Clean, modern, glassmorphism design
- ✅ **Fast Performance** - Optimized images and lazy loading

### Pages
- 🏠 **Home** - Hero section with introduction and CTA buttons
- 👤 **About** - Personal story and professional journey
- 💻 **Skills** - Technical and soft skills with progress indicators
- 🚀 **Projects** - Featured projects with descriptions and tech stack
- 🏆 **Certifications** - Achievements and certifications
- 📧 **Contact** - Contact form with validation and success feedback

### Interactive Elements
- Sticky navbar with smooth navigation
- Mobile-responsive hamburger menu
- Animated skill progress bars
- Hover effects on project cards
- Floating hero section image
- Animated scroll indicators

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Icons**: Lucide React, React Icons
- **Language**: TypeScript

### Backend
- **API Routes**: Next.js API Routes
- **Storage**: JSON file storage (can be upgraded to MongoDB)
- **Validation**: Custom validation functions

### DevTools
- **Linter**: ESLint
- **Package Manager**: npm or yarn
- **Version Control**: Git

---

## 📁 Project Structure

```
Portfolio.Geetha/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── about/
│   │   └── page.tsx           # About page
│   ├── skills/
│   │   └── page.tsx           # Skills page
│   ├── projects/
│   │   └── page.tsx           # Projects page
│   ├── certifications/
│   │   └── page.tsx           # Certifications page
│   ├── contact/
│   │   └── page.tsx           # Contact page
│   └── api/
│       └── contact/
│           └── route.ts        # Contact form API
├── components/
│   ├── Navbar.tsx             # Navigation bar
│   ├── Footer.tsx             # Footer
│   ├── Hero.tsx               # Hero section
│   ├── SkillCard.tsx          # Skill card component
│   ├── ProjectCard.tsx        # Project card component
│   └── CertificationCard.tsx  # Certification card component
├── lib/
│   └── utils.ts               # Utility functions
├── public/
│   └── profile.jpg            # Profile image (placeholder)
├── data/
│   └── messages.json          # Contact form messages storage
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── tailwind.config.ts         # Tailwind CSS config
├── postcss.config.js          # PostCSS config
├── next.config.js             # Next.js config
├── .env.local                 # Environment variables
├── .gitignore                 # Git ignore rules
├── .eslintrc.json             # ESLint config
└── README.md                  # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Git
- VS Code (optional but recommended)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Portfolio.Geetha
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Create environment variables** (optional)
```bash
# Copy .env.local and update if needed
cp .env.local.example .env.local
```

4. **Start development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
- Hot reload enabled
- Development tools available
- Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```
- Optimized build
- Production-ready deployment

### Linting
```bash
npm run lint
```
- Check code quality
- Fix ESLint issues

---

## 📄 Pages and Features

### 1. Home Page (`/`)
- Hero section with name and tagline
- Profile image placeholder with animation
- Call-to-action buttons (View Work, Download Resume)
- Social media links (GitHub, LinkedIn, Email)
- Scroll indicator

**Components Used**: Hero

### 2. About Page (`/about`)
- Professional introduction
- Educational background
- Key strengths section
- Contact information cards
- Smooth animations

**Features**: Responsive layout, glass-morphism cards

### 3. Skills Page (`/skills`)
- Skills organized by category:
  - Programming (Python)
  - Web Development (HTML, CSS)
  - Tools & Technologies (Git, VS Code, MySQL, Linux)
  - Soft Skills
- Progress bars for technical skills
- Interactive hover effects

**Components Used**: SkillCard

### 4. Projects Page (`/projects`)
- Featured projects showcase
- Project cards with:
  - Title and description
  - Technology stack
  - Project statistics
- Call-to-action to contact

**Components Used**: ProjectCard

### 5. Certifications Page (`/certifications`)
- Certification cards with:
  - Title and issuer
  - Issue date
  - Description
- Other achievements section
- Timeline-style layout

**Components Used**: CertificationCard

### 6. Contact Page (`/contact`)
- Contact form with validation:
  - Name field
  - Email field
  - Message field
- Contact information cards:
  - Email
  - Phone
  - Location
- Loading states
- Success/error notifications

**Features**: Form validation, API integration, error handling

---

## 🔌 API Routes

### POST /api/contact
**Description**: Submit a contact form message

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response** (Success):
```json
{
  "success": true,
  "message": "Message received successfully",
  "data": {
    "id": "1234567890",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Your message here",
    "timestamp": "2024-04-17T10:30:00.000Z"
  }
}
```

**Response** (Error):
```json
{
  "errors": ["Error message 1", "Error message 2"]
}
```

**Validation Rules**:
- Name: Required, non-empty
- Email: Required, valid email format
- Message: Required, minimum 10 characters

### GET /api/contact
**Description**: Retrieve all contact messages (admin purposes)

**Response**:
```json
{
  "success": true,
  "count": 5,
  "messages": [...]
}
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

Vercel is the optimal platform for Next.js applications.

**Steps**:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Select project root directory
6. Add environment variables if needed
7. Click "Deploy"

**Vercel Configuration** (Optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "env": {
    "NEXT_PUBLIC_SITE_URL": "@site-url"
  }
}
```

### Deploy to Other Platforms

#### Netlify
```bash
# Build command: npm run build
# Publish directory: .next
# Functions directory: app/api
```

#### GitHub Pages
```bash
npm run build
# Commit and push
```

#### Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

---

## ⚡ Performance Optimizations

### Implemented Optimizations
- ✅ Next.js Image optimization
- ✅ Code splitting and lazy loading
- ✅ CSS minification via Tailwind
- ✅ Component-level code splitting
- ✅ Smooth animations without jank
- ✅ Optimized font loading (Google Fonts)
- ✅ SEO metadata for all pages

### Best Practices
- Uses Next.js App Router for better code organization
- TypeScript for type safety
- Responsive design (mobile-first)
- Accessible markup (semantic HTML)
- Fast page transitions

---

## 🔐 Security Considerations

- Input validation on both client and server
- CORS-friendly API routes
- Environment variables for sensitive data
- No sensitive data in frontend code
- Safe error handling

---

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🛠️ Customization Guide

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'primary': '#6366f1',      // Change primary color
  'secondary': '#8b5cf6',    // Change secondary color
}
```

### Update Content
- Update resume data in respective pages
- Edit component content directly
- Modify navigation links in `Navbar.tsx`

### Add New Pages
1. Create new folder in `app/` directory
2. Add `page.tsx` file
3. Update navbar navigation
4. Follow existing page structure

### Customize Animations
Modify animation settings in:
- `tailwind.config.ts` - CSS animations
- Component files - Framer Motion settings

---

## 📞 Support & Contact

For questions or support, contact:
- **Email**: bsangeetha685@gmail.com
- **Phone**: +91 8341809236
- **LinkedIn**: [Busi Sangeetha](https://linkedin.com/in/busi-sangeetha-09701b2a3)
- **GitHub**: [BusiSangeetha](https://github.com/BusiSangeetha)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **Next.js** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations library
- **Lucide Icons** - Beautiful icon set

---

## 📝 Changelog

### Version 1.0.0 (Initial Release)
- ✅ Complete portfolio website
- ✅ Dark/light mode support
- ✅ Contact form with validation
- ✅ Responsive design
- ✅ Smooth animations
- ✅ SEO optimized
- ✅ Production ready

---

**Built with ❤️ by Busi Sangeetha**

Last Updated: April 17, 2024
