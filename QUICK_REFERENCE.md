# 🚀 Quick Reference Guide

Quick command reference and links for the Portfolio project.

---

## 🎯 Quick Commands

### Development
```bash
npm install          # Install dependencies (run first)
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check code quality
npm run lint --fix   # Fix linting issues
```

### Git
```bash
git status           # Check status
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push origin main # Push to GitHub
git pull origin main # Pull latest changes
```

### Node/NPM
```bash
npm update           # Update all packages
npm outdated         # Check outdated packages
npm audit            # Check security vulnerabilities
npm cache clean      # Clear npm cache
node --version       # Check Node.js version
npm --version        # Check npm version
```

---

## 📁 Important Files

| File | Purpose | Edit For |
|------|---------|----------|
| `app/page.tsx` | Home page | Hero section content |
| `app/about/page.tsx` | About page | Personal info |
| `app/skills/page.tsx` | Skills page | Your skills |
| `app/projects/page.tsx` | Projects page | Your projects |
| `app/certifications/page.tsx` | Certifications | Your certs |
| `app/contact/page.tsx` | Contact page | Contact content |
| `components/Navbar.tsx` | Navigation | Nav links |
| `components/Footer.tsx` | Footer | Contact info |
| `tailwind.config.ts` | Styling | Colors, theme |
| `public/resume.txt` | Resume file | Resume content |

---

## 🌐 URLs

### Local Development
```
http://localhost:3000          # Home
http://localhost:3000/about    # About
http://localhost:3000/skills   # Skills
http://localhost:3000/projects # Projects
http://localhost:3000/certifications # Certifications
http://localhost:3000/contact  # Contact
http://localhost:3000/api/contact # Contact API
```

### Deployment
```
https://your-domain.com/          # After deployment
https://your-domain.vercel.app    # Vercel default
https://your-domain.netlify.app   # Netlify default
```

---

## 🛠️ Stack & Tools

| Technology | Version | Link |
|-----------|---------|------|
| Next.js | 14.0 | [nextjs.org](https://nextjs.org) |
| React | 18.2 | [react.dev](https://react.dev) |
| TypeScript | 5.2 | [typescriptlang.org](https://typescriptlang.org) |
| Tailwind CSS | 3.3 | [tailwindcss.com](https://tailwindcss.com) |
| Framer Motion | 10.16 | [framer.com/motion](https://framer.com/motion) |
| Lucide Icons | 0.294 | [lucide.dev](https://lucide.dev) |
| ESLint | Latest | [eslint.org](https://eslint.org) |

---

## 📚 Documentation Quick Links

| Document | Purpose | Read Time |
|----------|---------|-----------|
| [README.md](./README.md) | Overview & features | 15 min |
| [SETUP.md](./SETUP.md) | Local setup | 10 min |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Deploy to production | 20 min |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Code structure | 15 min |
| [FEATURES.md](./FEATURES.md) | All features | 10 min |
| [FILE_MANIFEST.md](./FILE_MANIFEST.md) | File listing | 5 min |
| [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) | Project overview | 5 min |

---

## 🚀 Deployment Quick Links

| Platform | Setup Time | Link |
|----------|-----------|------|
| Vercel | 2 min | [vercel.com](https://vercel.com) |
| Netlify | 3 min | [netlify.com](https://netlify.com) |
| GitHub Pages | 5 min | [pages.github.com](https://pages.github.com) |
| AWS Amplify | 5 min | [aws.amazon.com/amplify](https://aws.amazon.com/amplify) |
| Docker Hub | 10 min | [hub.docker.com](https://hub.docker.com) |

---

## 💡 Customization Checklists

### Update Personal Information
- [ ] Update name in components
- [ ] Change phone number
- [ ] Update email address
- [ ] Update LinkedIn URL
- [ ] Update GitHub URL
- [ ] Update location

### Customize Content
- [ ] Update hero section text
- [ ] Add your projects (2 provided)
- [ ] List your skills
- [ ] Add your certifications
- [ ] Update education info
- [ ] Write your bio

### Style Customization
- [ ] Change primary color
- [ ] Change secondary color
- [ ] Update font (if desired)
- [ ] Adjust spacing
- [ ] Customize animations
- [ ] Update gradients

### Technical Setup
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Set up deployment account
- [ ] Configure environment variables
- [ ] Set up custom domain
- [ ] Enable HTTPS

---

## 🐛 Quick Troubleshooting

| Problem | Solution | Command |
|---------|----------|---------|
| Port 3000 in use | Kill process | `lsof -i :3000; kill -9 <PID>` |
| npm packages won't install | Clear cache | `npm cache clean --force` |
| Module not found | Reinstall deps | `rm -rf node_modules; npm i` |
| TypeScript errors | Check types | `npm run lint` |
| Build fails | Clear .next | `rm -rf .next; npm run build` |
| Dark mode not working | Check localStorage | Browser DevTools > Storage |

---

## 📞 Contact Information

```
Name: Busi Sangeetha
Email: bsangeetha685@gmail.com
Phone: +91 8341809236
Location: Telangana, India

Social:
LinkedIn: www.linkedin.com/in/busi-sangeetha-09701b2a3
GitHub: https://github.com/BusiSangeetha
```

---

## ⚡ Performance Tips

### Build Time Optimization
```bash
# Use npm ci instead of npm install
npm ci

# Clear cache before build
npm cache clean --force

# Use production build
npm run build
npm start
```

### Runtime Optimization
- Enable gzip compression
- Use CDN for static files
- Optimize images
- Minimize JavaScript
- Defer non-critical CSS
- Enable caching

### Monitoring
- Vercel Analytics (automatic)
- Lighthouse audits
- Error tracking
- Performance monitoring

---

## 🔐 Security Checklist

- [ ] No secrets in code
- [ ] Environment variables used
- [ ] HTTPS enabled
- [ ] Headers configured
- [ ] CORS properly set
- [ ] Input validation done
- [ ] Error messages safe
- [ ] Dependencies updated

---

## 📱 Responsive Testing

```bash
# Test different sizes
# Chrome DevTools:
# Ctrl+Shift+M (Windows)
# Cmd+Shift+M (macOS)

# Test breakpoints:
# Mobile: 320px, 375px, 480px
# Tablet: 768px, 1024px
# Desktop: 1280px, 1920px
```

---

## 🔄 Git Workflow

```bash
# Create new branch
git checkout -b feature/name

# Make changes
# ... edit files ...

# Stage changes
git add .

# Commit
git commit -m "feat: add feature description"

# Push to GitHub
git push origin feature/name

# Create pull request
# ... on GitHub ...

# Merge to main
# ... approve PR ...

# Update local
git checkout main
git pull origin main
```

---

## 📊 Project Structure at a Glance

```
Portfolio.Geetha/
├── app/              # Pages & API routes
├── components/       # React components
├── lib/              # Utilities
├── public/           # Static files
├── data/             # Data storage
├── [config files]    # Configuration
├── [docs]            # Documentation
└── package.json      # Dependencies
```

---

## ✅ Pre-Launch Checklist

- [ ] All pages working
- [ ] Mobile responsive
- [ ] Dark mode tested
- [ ] Contact form working
- [ ] No console errors
- [ ] Links all working
- [ ] Resume downloads
- [ ] Social links correct
- [ ] Performance good
- [ ] SEO verified
- [ ] Security checked
- [ ] Documentation complete

---

## 🎯 First-Time Setup (5 Steps)

1. **Install**: `npm install`
2. **Develop**: `npm run dev`
3. **Update**: Edit `app/*.tsx` files
4. **Test**: Open `http://localhost:3000`
5. **Deploy**: Push to GitHub → Vercel

---

## 📖 Common Edits

### Change Page Title
```typescript
// In page.tsx
export const metadata: Metadata = {
  title: 'Your New Title',
}
```

### Update Color
```typescript
// In tailwind.config.ts
'primary': '#your-color-hex'
```

### Add Link
```typescript
// In components/Navbar.tsx
{ name: 'New Page', href: '/new-page' },
```

### Update Text
```typescript
// In any page.tsx
<p>Your new text here</p>
```

---

## 🚀 Deployment (5 Steps)

1. **Push Code**: `git push origin main`
2. **Connect Platform**: Vercel/Netlify dashboard
3. **Authorize**: Connect GitHub account
4. **Deploy**: One-click deployment
5. **Verify**: Test deployed site

---

## 💻 IDE Recommended Extensions

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- TypeScript Vue Plugin
- Thunder Client (API testing)

---

## 🎓 Learning Path

1. Read [README.md](./README.md)
2. Follow [SETUP.md](./SETUP.md)
3. Explore code structure
4. Customize components
5. Test locally
6. Follow [DEPLOYMENT.md](./DEPLOYMENT.md)
7. Deploy to Vercel/Netlify
8. Monitor with analytics

---

## 📞 Need Help?

1. Check **README.md** - Main documentation
2. See **SETUP.md** - Setup issues
3. Review **ARCHITECTURE.md** - Code questions
4. Check **FEATURES.md** - Feature questions
5. Contact: bsangeetha685@gmail.com

---

**Version**: 1.0.0  
**Last Updated**: April 17, 2024  
**Status**: ✅ Production Ready

🚀 **Ready to launch your portfolio!**
