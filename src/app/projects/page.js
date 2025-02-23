import Link from 'next/link';

export const metadata = {
    title: 'Projects ✦ tonyzebastian',
    description: 'A visual product designer | Love to code | always tinkering with a side project',
    keywords: 'design, art, cinematography, photography, travel',
  
    twitter: {
      card: 'summary_large_image',
      site: '@tonyzebastian',
      creator: '@tonyzebastian',
      title: 'Tony Sebastian ✦ designer',
      description: 'A visual product designer | Love to code | always tinkering with a side project',
      image: 'https://tonyzeb.design/public/preview.png',
    },
    og: {
      title: 'Tony Sebastian ✦ designer',
      description: 'A visual product designer | Love to code | always tinkering with a side project',
      url: 'https://tonyzeb.design/',
      image: 'https://tonyzeb.design/public/preview.png',
      locale: 'en_EN',
    },
  }

export default function Projects() {
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
        <main className=" mx-auto max-w-[500px] pt-8">
            <div className="mx-auto max-w-xl py-4 mb-8 px-4">
                <h1 className="mb-1 px-4 text-tony_accent-100">Projects</h1>
                <h6 className="px-4">
                  Ideas, experiments, and a bit of magic.
                </h6>
                <ul className="mt-8 space-y-2">
                    {musings.map(item => createListItem(item.name, item.date, item.link))}
                </ul>
            </div>
        </main>
    );
}