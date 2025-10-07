import { hypersonixData } from './content';
import { CaseStudyPage } from '@/components/CaseStudyTemplate';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export const metadata = {
  title: 'Hypersonix Experience',
  description: 'Summary of my experience at Hypersonix AI as Lead Product Designer. Led 0 to 1 explorations, scaled design systems, and improved core product experiences.',
  keywords: 'product design, Hypersonix AI, design system, documents, onboarding, UX leadership',
  author: 'Tony Sebastian',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://tonyzeb.design/project/hypersonix',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tonyzebastian',
    creator: '@tonyzebastian',
    title: 'Hypersonix Experience',
    description: 'Led product design at Hypersonix AI, driving 0 to 1 explorations and scaling design systems.',
    image: 'https://tonyzeb.design/preview.png',
    imageAlt: 'Hypersonix Experience Case Study',
  },
  openGraph: {
    title: 'Hypersonix Experience',
    description: 'Led product design at Hypersonix AI, driving 0 to 1 explorations and scaling design systems.',
    url: 'https://tonyzeb.design/project/hypersonix',
    siteName: 'Tony Sebastian',
    images: [{
      url: 'https://tonyzeb.design/preview.png',
      alt: 'Hypersonix Experience Case Study',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function HypersonixPage() {
  const { page, projects } = hypersonixData;

  return <CaseStudyPage pageData={page} projects={projects} />;
}