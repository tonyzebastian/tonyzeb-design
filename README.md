# Tony Sebastian - Portfolio Website

A modern, performant portfolio website built with Next.js 14, showcasing design work, projects, and professional experience.

🔗 **Live Site**: [tonyzeb.design](https://tonyzeb.design)

## ✨ Features

- **Modern Stack**: Built with Next.js 14 App Router, React 18, and Tailwind CSS
- **Performance Optimized**: Extensive use of React memoization, Suspense boundaries, and static generation
- **Interactive UI**: Smooth animations with Framer Motion, progressive blur effects, and responsive design
- **SEO Friendly**: Complete metadata, Open Graph tags, and Twitter Cards
- **Mobile First**: Responsive design with mobile-first approach

## 🚀 Quick Start

### Prerequisites

- Node.js >= 22.0.0
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tonyzebastian/tonyzeb-design.git

# Navigate to project directory
cd tonyzeb-design

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Tech Stack

- **Framework**: Next.js 14.2.18
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion (Motion v12)
- **Typography**: Geist Sans, Instrument Serif
- **Icons**: Lucide React, React Feather
- **Deployment**: Vercel

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable components
│   ├── ui/                # UI primitives
│   ├── list/              # List components
│   └── fancy/             # Advanced interactive components
├── lib/
│   └── content.js         # Centralized content management
└── public/
    ├── images/            # Image assets
    └── icons/             # Icon assets
```

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Key Sections

- **Projects**: Personal projects and side ventures
- **Experience**: Professional work history with case studies
- **Craft**: Design explorations and interactions
- **Musings**: Articles and thoughts on design
- **About**: Personal information and photography

## 🔧 Configuration

All content is managed through `src/lib/content.js` for easy updates without touching component code.

## 📄 Documentation

For detailed documentation, see [CLAUDE.md](./CLAUDE.md)

## 📊 Performance

- React.memo() and useMemo() for optimal re-rendering
- Suspense boundaries for better static generation
- Next.js Image optimization
- Code splitting and lazy loading

## 🚢 Deployment

Optimized for Vercel deployment with automatic builds from the main branch.

## 📧 Contact

Tony Sebastian - [@tonyzebastian](https://www.linkedin.com/in/tonyzebastian/)

---

Built with Next.js and Motion.dev | © Tony Sebastian, 2025
