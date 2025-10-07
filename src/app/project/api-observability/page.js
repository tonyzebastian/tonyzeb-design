import { postobvdata } from './content';
import { CaseStudyPage } from '@/components/CaseStudyTemplate';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export const metadata = {
  title: 'Live Collections',
  description: 'First observability feature in Postman. Turning static API documentation into living entities that stayed in sync with real API traffic.',
  keywords: 'observability, API documentation, live collections, Postman, product design',
  author: 'Tony Sebastian',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://tonyzeb.design/project/api-observability',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tonyzebastian',
    creator: '@tonyzebastian',
    title: 'Live Collections',
    description: 'First observability feature in Postman. Turning static API documentation into living entities.',
    image: 'https://tonyzeb.design/preview.png',
    imageAlt: 'Live Collections Case Study',
  },
  openGraph: {
    title: 'Live Collections',
    description: 'First observability feature in Postman. Turning static API documentation into living entities.',
    url: 'https://tonyzeb.design/project/api-observability',
    siteName: 'Tony Sebastian',
    images: [{
      url: 'https://tonyzeb.design/preview.png',
      alt: 'Live Collections Case Study',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ApiObservabilityPage() {
  const { page, projects } = postobvdata;

  return <CaseStudyPage pageData={page} projects={projects} />;
}