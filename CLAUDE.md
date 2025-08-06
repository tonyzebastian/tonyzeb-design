# CLAUDE.md - Tony Sebastian Portfolio Website

## Project Overview

This is a personal portfolio website for Tony Sebastian, a visual product designer. Built with Next.js 14, it showcases projects, experience, musings, and personal information through a modern, interactive interface.

## Technology Stack

### Core Framework
- **Next.js 14.2.18** - React framework with App Router
- **React 18** - UI library
- **JavaScript** - Primary language (no TypeScript)

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Tailwind CSS Animate** - Animation utilities
- **CSS Variables** - Custom design system colors and spacing
- **Progressive Blur** - Custom blur effects
- **Geist Font** - Sans-serif typography
- **Instrument Serif** - Serif typography for headings

### UI Components & Libraries
- **@headlessui/react** - Unstyled accessible components
- **@radix-ui/react-slot** - Component composition utilities
- **Lucide React** - Icon library
- **React Feather** - Additional icons
- **Class Variance Authority** - Component variant management
- **clsx & tailwind-merge** - Conditional class utilities

### Interactions & Animations
- **Motion (Framer Motion v12)** - Animation library
- **Progressive Blur** - Custom blur effects for navigation
- **React Plock** - Masonry layout for image grids

### Development Tools
- **ESLint** - Code linting (warnings ignored in builds)
- **Autoprefixer** - CSS vendor prefixing
- **PostCSS** - CSS processing

### Performance & Analytics
- **@vercel/speed-insights** - Performance monitoring
- **Next.js Image Optimization** - Built-in image optimization

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout with fonts and navigation
│   ├── page.js            # Homepage with projects, experience, musings
│   ├── globals.css        # Global styles and CSS variables
│   ├── about/             # About page route
│   ├── craft/             # Craft/design work showcase
│   ├── AI/                # AI-related projects
│   └── musings/           # Blog-style content pages
├── components/            # Reusable UI components
│   ├── NavBar.js          # Bottom navigation with blur effect
│   ├── list/              # List components (ListItem, Title, SubText)
│   ├── ui/                # UI primitives and utilities
│   └── fancy/             # Advanced interactive components
├── lib/                   # Utilities and content
│   ├── content.js         # All site content and data
│   └── utils.js           # Utility functions
└── public/                # Static assets
    ├── images/            # Organized by category (AI, Craft, about, etc.)
    ├── icons/             # Company/project icons
    └── hero.gif           # Hero animation
```

## Key Features

### Content Management
- **Centralized Content**: All site content managed in `src/lib/content.js`
- **Structured Data**: Projects, experience, musings, and bio information
- **Dynamic Rendering**: Content rendered dynamically throughout the site

### Navigation & UX
- **Sticky Bottom Navigation**: Modern mobile-first navigation pattern
- **Progressive Blur**: Advanced blur effect behind navigation
- **Active State Management**: Automatic route-based active states
- **Responsive Design**: Mobile-first approach with desktop enhancements

### Performance Optimizations
- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **Client-side Mounting**: Prevents hydration issues with `useState` and `useEffect`
- **ESLint Bypass**: Build optimization (errors ignored during builds)

## Available Scripts

```bash
# Development
npm run dev          # Start development server on localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint (currently configured to ignore errors in builds)
```

## Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development**:
   ```bash
   npm run dev
   ```

3. **Environment**: 
   - Development server runs on `http://localhost:3000`
   - Hot reload enabled for all file changes

## Content Structure

### Main Sections
- **Projects**: Personal projects and side ventures
- **Experience**: Professional work history with company details
- **Musings**: Blog-style articles and thoughts
- **About**: Personal information and philosophy
- **Now**: Current activities and learning

### Data Organization
All content is exported from `src/lib/content.js`:
- `projects` - Project showcase data
- `experience` - Work experience
- `designAreas` - Additional experience areas
- `musings` - Blog posts/articles
- `bio` - Personal information
- `now` - Current status updates

## Design System

### Typography
- **Geist Sans**: Primary sans-serif font
- **Instrument Serif**: Headings and emphasis

### Color Palette
- Uses Tailwind CSS default color system
- Primary colors: Slate for text and borders
- Accent colors: Green for highlights and active states
- Background colors: Default white with slate hover states

### Component Patterns
- **ListItem**: Consistent item display pattern
- **HighlightLink**: Styled external/internal links
- **Badge**: Status indicators
- **ImageGridWithLightbox**: Gallery components

## Image Management

### Organization
- `public/images/AI/` - AI-related project images
- `public/images/Craft/` - Design craft showcase
- `public/images/about/` - Personal/about section images
- `public/images/musings/` - Blog article images
- `public/images/visuals/` - General visual content
- `public/icons/` - Company and project icons

### Optimization
- Next.js automatic image optimization
- WebP conversion where supported
- Responsive image sizing
- Lazy loading by default

## Deployment

### Vercel (Recommended)
- Optimized for Vercel deployment
- Speed Insights integration included
- Automatic deployments from Git

### Build Configuration
- ESLint errors ignored during builds for flexibility
- PostCSS processing for Tailwind CSS
- Next.js optimization features enabled

## SEO & Meta

### Homepage SEO
- Comprehensive meta tags
- Open Graph integration
- Twitter Card support
- Structured data for social sharing

### Performance
- Speed Insights tracking
- Core Web Vitals optimization
- Progressive loading strategies

## Future Considerations

### Potential Improvements
- Add TypeScript for better type safety
- Implement proper error handling
- Add automated testing
- Consider adding a CMS for content management
- Implement proper loading states
- Add more interactive animations

### Content Management
- Currently all content is hardcoded in `content.js`
- Consider migrating to a headless CMS for easier updates
- Implement dynamic content loading for better performance

## Notes for Development

- The project uses JavaScript instead of TypeScript
- ESLint is configured to allow builds with warnings/errors
- All animations use Framer Motion v12 (latest major version)
- Navigation uses client-side routing with Next.js App Router
- Images are manually optimized and organized by content type
- The site follows a mobile-first responsive design approach