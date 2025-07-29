import Crafts from "./AI"; 
 
export const metadata = {
  title: 'AI Explorations ✦ Tony Sebastian',
  description: 'Generative AI explorations with images and videos - experimenting with artificial intelligence in creative design',
  keywords: 'generative AI, AI art, machine learning design, artificial intelligence, AI images, AI videos, creative AI',
  author: 'Tony Sebastian',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://tonyzeb.design/AI',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tonyzebastian',
    creator: '@tonyzebastian',
    title: 'AI Explorations ✦ Tony Sebastian',
    description: 'Generative AI explorations with images and videos - experimenting with artificial intelligence in creative design',
    image: 'https://tonyzeb.design/preview.png',
    imageAlt: 'Tony Sebastian - AI Explorations and Generative Design',
  },
  openGraph: {
    title: 'AI Explorations ✦ Tony Sebastian',
    description: 'Generative AI explorations with images and videos - experimenting with artificial intelligence in creative design',
    url: 'https://tonyzeb.design/AI',
    siteName: 'Tony Sebastian',
    images: [{
      url: 'https://tonyzeb.design/preview.png',
      alt: 'Tony Sebastian - AI Explorations and Generative Design',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },
};
 
export default function WithAI() {
  return <Crafts />;
}

