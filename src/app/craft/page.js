import Crafts from "./Craft"; 
 
export const metadata = {
  title: 'Crafts ✦ Tony Sebastian',
  description: 'Visual explorations and design experiments - showcasing creative process and craft work',
  keywords: 'design crafts, visual experiments, creative process, design exploration, product design',
  author: 'Tony Sebastian',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://tonyzeb.design/craft',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tonyzebastian',
    creator: '@tonyzebastian',
    title: 'Crafts ✦ Tony Sebastian',
    description: 'Visual explorations and design experiments - showcasing creative process and craft work',
    image: 'https://tonyzeb.design/preview.png',
    imageAlt: 'Tony Sebastian - Design Crafts and Visual Experiments',
  },
  openGraph: {
    title: 'Crafts ✦ Tony Sebastian',
    description: 'Visual explorations and design experiments - showcasing creative process and craft work',
    url: 'https://tonyzeb.design/craft',
    siteName: 'Tony Sebastian',
    images: [{
      url: 'https://tonyzeb.design/preview.png',
      alt: 'Tony Sebastian - Design Crafts and Visual Experiments',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },
};
 
export default function MyCrafts() {
  return <Crafts />;
}

