import { posttrialdata } from './content';
import { CaseStudyPage } from '@/components/CaseStudyTemplate';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export const metadata = {
  title: 'New Trial Experiences',
  description: 'Redesigning trial experiences at Postman to make them more timely, contextual, and value-driven. Led by Tony Sebastian, Lead Product Designer.',
  keywords: 'trial design, user experience, growth design, Postman, product design',
  author: 'Tony Sebastian',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://tonyzeb.design/project/newtrialexp',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tonyzebastian',
    creator: '@tonyzebastian',
    title: 'New Trial Experiences',
    description: 'Redesigning trial experiences at Postman to make them more timely, contextual, and value-driven.',
    image: 'https://tonyzeb.design/preview.png',
    imageAlt: 'New Trial Experiences Case Study',
  },
  openGraph: {
    title: 'New Trial Experiences',
    description: 'Redesigning trial experiences at Postman to make them more timely, contextual, and value-driven.',
    url: 'https://tonyzeb.design/project/newtrialexp',
    siteName: 'Tony Sebastian',
    images: [{
      url: 'https://tonyzeb.design/preview.png',
      alt: 'New Trial Experiences Case Study',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function NewTrialExpPage() {
  const { page, projects } = posttrialdata;

  return <CaseStudyPage pageData={page} projects={projects} />;
}