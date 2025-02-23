import Logo from '@/components/ui/logo/Logo';
import { Twitter, Linkedin } from 'react-feather';


export const metadata = {
  title: 'Tony Sebastian ✦ designer',
  description: 'A visual product designer | Love to code | always tinkering with a side project',
  keywords: 'design, art, cinematography, photography, travel',

  twitter: {
    card: 'summary_large_image',
    site: '@tonyzebastian',
    creator: '@tonyzebastian',
    title: 'Tony Sebastian ✦ designer',
    description: 'A visual product designer | Love to code | always tinkering with a side project',
    image: 'https://tonyzeb.design/preview.png',
  },
  og: {
    title: 'Tony Sebastian ✦ designer',
    description: 'A visual product designer | Love to code | always tinkering with a side project',
    url: 'https://tonyzeb.design/',
    image: 'https://tonyzeb.design/preview.png',
    locale: 'en_EN',
  },
}

export default function HomePage() {

  const musings = [
    { name: 'Figma Recap', date: 'Every edit, every design— At a glance', link: 'https://www.figmarecap.in/' },
    { name: 'UI Glow', date: 'Interaction design explorations', link: 'https://www.uiglow.click/' },
    { name: 'UX Nudges', date: 'A collection of nudges from apps', link: 'https://ux-nudge.web.app/' },
    { name: 'Abstract Illustration Library', date: 'A library of free to use illustrations', link: 'https://abstract-library.framer.website/' },
  ];

  const createListItem = (itemName, itemDate, itemLink) => {
      return (
          <li key={itemLink}>
          <Link href={itemLink} className="flex flex-col items-start py-4 px-4 hover:bg-tony_BG-200 rounded" target="_blank"> 
              <span className="text-tony_text-200 font-Raleway font-medium text-sm tracking-wide overflow-hidden overflow-ellipsis whitespace-nowrap sm:block sm:truncate mb-1">{itemName}</span>
              <span className="text-tony_text-300 font-Raleway font-light text-sm">{itemDate}</span>
          </Link>
          </li>
      );
  };
  
  return (
    <div className='h-[calc(100vh-80px)] flex items-center justify-center '>

      <div className="flex flex-col items-start justify-center mx-auto max-w-[500px]">
        <div className="mb-4 mx-8">
          <Logo/>
        </div>
        <h1 className="text-tony_accent-100 mx-8">Tony Sebastian</h1>
        <h3 className="mx-8">Product Designer</h3>
        <p className="mt-4 mx-8">
          I like to build things. I&apos;m into design, art, and cinematography. 
          Believes in consistency, side projects, picking up new hobbies, 
          and letting life shape my craft. Love chatting about photos, 
          memes, camera gear, travel tips, or just drop a Hi!
        </p>
        <p className="mt-6 mx-8" >
        Currently crafting experiences at <a href="https://www.postman.com/" target="_blank" className="underline underline-offset-2">Postman</a>.
        </p>

        <div className="flex space-x-4 mt-6 mx-8">
          <a href="https://www.linkedin.com/in/tonyzebastian/" target="_blank" rel="noopener noreferrer" className='opacity-75 transition-transform transform hover:scale-105 hover:opacity-100'>
          <Linkedin size={20} strokeWidth={1} color="#DEE2E6"/> 
          </a>
          <a href="https://x.com/tonyzebastian" target="_blank" rel="noopener noreferrer" className='opacity-75 transition-transform transform hover:scale-105 hover:opacity-100'>
          <Twitter size={20} strokeWidth={1} color="#DEE2E6" />
          </a>
        </div>
      </div>

    </div>
  );
}