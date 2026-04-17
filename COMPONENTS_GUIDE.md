# 🧩 Component Quick Reference

## ProfileImage Component

**Location**: `components/ProfileImage.tsx`

### Import
```typescript
import ProfileImage from '@/components/ProfileImage'
```

### Basic Usage
```typescript
<ProfileImage />
```

### With Options
```typescript
<ProfileImage 
  size="large"
  showBorder={true}
  showAnimation={true}
/>
```

### All Props
```typescript
interface ProfileImageProps {
  size?: 'small' | 'medium' | 'large'    // h-32 | h-64 | h-80
  showBorder?: boolean                    // Default: true
  showAnimation?: boolean                 // Floating effect
  className?: string                      // Override container classes
  containerClassName?: string             // Wrapper div classes
  overlay?: ReactNode                     // Add content inside image
}
```

### Examples

#### Hero Section (Large, Animated)
```typescript
<ProfileImage 
  size="large" 
  showAnimation={true}
  showBorder={true}
/>
```

#### About Section (Large, No Animation)
```typescript
<ProfileImage 
  size="large" 
  showAnimation={false}
/>
```

#### Sidebar (Small, No Animation)
```typescript
<ProfileImage 
  size="small" 
  showAnimation={false}
/>
```

#### Custom Styling
```typescript
<ProfileImage 
  size="medium"
  className="rounded-full"
  containerClassName="mx-auto"
/>
```

#### With Overlay
```typescript
<ProfileImage 
  size="large"
  overlay={<Badge>Available</Badge>}
/>
```

---

## ResumeButtons Component

**Location**: `components/ResumeButtons.tsx`

### Import
```typescript
import ResumeButtons from '@/components/ResumeButtons'
```

### Basic Usage
```typescript
<ResumeButtons />
```

### With Options
```typescript
<ResumeButtons 
  layout="row"
  variant="both"
  showLabels={true}
/>
```

### All Props
```typescript
interface ResumeButtonsProps {
  layout?: 'row' | 'column'               // Default: 'row'
  variant?: 'primary' | 'secondary' | 'both'  // Default: 'both'
  className?: string                      // Container classes
  showLabels?: boolean                    // Default: true
}
```

### Variants Explained

#### Both (Default)
```typescript
<ResumeButtons variant="both" />
// Shows: [View Resume] [Download]
```

#### Primary Only (View)
```typescript
<ResumeButtons variant="primary" />
// Shows: [View Resume]
```

#### Secondary Only (Download)
```typescript
<ResumeButtons variant="secondary" />
// Shows: [Download]
```

### Layout Options

#### Row (Horizontal)
```typescript
<ResumeButtons layout="row" />
// Desktop: [View] [Download]
// Mobile: Wraps to next line if needed
```

#### Column (Vertical)
```typescript
<ResumeButtons layout="column" />
// Stacked vertically
```

### Examples

#### Hero Section
```typescript
<ResumeButtons 
  layout="row"
  variant="both"
  showLabels={true}
/>
```

#### Contact Page
```typescript
<ResumeButtons 
  layout="row"
  variant="both"
  showLabels={true}
/>
```

#### Footer (Compact)
```typescript
<ResumeButtons 
  variant="primary"
  showLabels={false}
/>
```

#### Mobile Optimized
```typescript
<ResumeButtons 
  layout="column"
  variant="both"
/>
```

#### No Labels (Icons Only)
```typescript
<ResumeButtons 
  showLabels={false}
/>
```

---

## When to Use Each Component

### ProfileImage
Use when you need to display the profile photo:
- ✅ Hero section introduction
- ✅ About page sidebar
- ✅ Team page member cards
- ✅ Footer profile section
- ✅ Contact page author info

### ResumeButtons
Use when you want resume download/view options:
- ✅ Hero section CTAs
- ✅ Contact page follow-up
- ✅ Projects page call-to-action
- ✅ Footer quick links
- ✅ Header navigation (icons only)

---

## Combining Components

### Profile + Resume in Hero
```typescript
<div className="space-y-8">
  <ProfileImage size="large" />
  <ResumeButtons layout="row" />
</div>
```

### Profile + Resume in Card
```typescript
<div className="p-6 rounded-lg border">
  <ProfileImage size="medium" />
  <h2>Busi Sangeetha</h2>
  <ResumeButtons variant="primary" />
</div>
```

### Profile in Sidebar, Resume in Content
```typescript
<div className="grid grid-cols-3 gap-8">
  <aside>
    <ProfileImage size="large" />
  </aside>
  <main className="col-span-2">
    <h1>About Me</h1>
    <p>...</p>
    <ResumeButtons />
  </main>
</div>
```

---

## Styling & Customization

### ProfileImage Sizes
```typescript
// Small: h-32 w-32
size="small"

// Medium: h-64 w-64
size="medium"

// Large: h-80 w-80 md:h-96 md:w-96
size="large"
```

### Button Styles

#### View Resume (Primary)
- Border: 2px primary color
- Hover: Background fills with primary
- Icon: FileText (rotates on hover)

#### Download (Secondary)
- Background: Gray (light mode), Dark gray (dark mode)
- Hover: Darker shade
- Icon: Download

---

## Common Patterns

### Hero Pattern
```typescript
import ProfileImage from '@/components/ProfileImage'
import ResumeButtons from '@/components/ResumeButtons'

export default function Hero() {
  return (
    <section>
      <ProfileImage size="large" />
      <h1>Welcome</h1>
      <p>Description...</p>
      <ResumeButtons layout="row" variant="both" />
    </section>
  )
}
```

### About Pattern
```typescript
import ProfileImage from '@/components/ProfileImage'

export default function About() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <ProfileImage size="large" showAnimation={false} />
        <div className="md:col-span-2">
          {/* About content */}
        </div>
      </div>
    </section>
  )
}
```

### Contact Pattern
```typescript
import ResumeButtons from '@/components/ResumeButtons'

export default function Contact() {
  return (
    <section>
      {/* Contact form */}
      <div className="mt-12 text-center">
        <h3>Want to see my work first?</h3>
        <ResumeButtons layout="row" />
      </div>
    </section>
  )
}
```

---

## Troubleshooting

### Image Not Showing
- Verify `/public/profile.jpg` exists
- Check file permissions
- Try rebuilding: `npm run dev`

### Buttons Not Working
- Check `/public/resume.pdf` exists
- Verify correct file path
- Test in incognito mode (cache issues)

### Animation Not Working
- Verify Framer Motion is installed
- Check `showAnimation={true}`
- Ensure page uses 'use client'

### Styling Issues
- Check Tailwind CSS is configured
- Verify dark mode classes
- Check parent container classes

---

## Performance Tips

1. **Use `showAnimation={false}` for off-screen images**
   - Reduces unnecessary animations

2. **Lazy load with `showAnimation={false}`**
   - Improves initial paint

3. **Reuse components instead of duplicating code**
   - Better performance and maintainability

4. **Use `size="small"` for thumbnails**
   - Smaller bundle size

---

## Last Updated
April 17, 2024
