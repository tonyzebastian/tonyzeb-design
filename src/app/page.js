import ListItem from '@/components/list/ListItem';
import Title from '@/components/list/Title';
import {projects, experience, musings, bio, designAreas, now } from '@/lib/content';
import HighlightLink from '@/components/ui/HighlightLink';
import CopyEmailLink from '@/components/ui/CopyEmailLink';
import { Badge } from "@/components/ui/badge";
import PulsingDot from '@/components/ui/PulsingDot';

export const metadata = {
  title: 'Tony Sebastian ✦ designer',
  description: 'A visual product designer | Love to code | always tinkering with a side project',
  keywords: 'design, art, cinematography, photography, travel',
  author: 'Tony Sebastian',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  robots: 'index,follow',
  'mobile-web-app-capable': 'yes',
  'apple-mobile-web-app-title': 'Tony Sebastian',
  'apple-mobile-web-app-status-bar-style': 'black-translucent',
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://tonyzeb.design',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tonyzebastian',
    creator: '@tonyzebastian',
    title: 'Tony Sebastian ✦ designer',
    description: 'A visual product designer | Love to code | always tinkering with a side project',
    image: 'https://tonyzeb.design/preview.png',
    imageAlt: 'Tony Sebastian - Visual Product Designer',
  },
  openGraph: {
    title: 'Tony Sebastian ✦ designer',
    description: 'A visual product designer | Love to code | always tinkering with a side project',
    url: 'https://tonyzeb.design/',
    siteName: 'Tony Sebastian',
    images: [{
      url: 'https://tonyzeb.design/preview.png',
      alt: 'Tony Sebastian - Visual Product Designer',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },

};

export default function HomePage() {
  return (
    <div className='pt-12'>
      <div className="mx-auto max-w-2xl px-8">
        
        {/* Header Section */}
        <div className="mb-6 flex flex-col items-center justify-center">
          <div className="mb-4">
            <img 
              src="/hero.gif" 
              alt="Hero animation" 
              className="max-w-lg mt-4"
            />
          </div>
          <h1 className="font-serif text-center">Hello! I am Tony, a software designer.</h1> 
          <div className='flex flex-col items-center gap-3'>
            <h3 className="mt-3 text-center max-w-xl ">{bio.intro}</h3>
            <Badge variant="outline" className="flex items-center">
              <PulsingDot />
              Available for work
            </Badge>
          </div>
        </div>

        {/* Body */}
        <div className='flex flex-col gap-6'>

          {/* Projects Section */}
          <div className="my-6">
            <h2 className="mb-2">Projects</h2>
            <div className="space-y-1">
              {projects.map(project => (
                <ListItem 
                  key={project.link}
                  image={project.image}
                  title={project.name}
                  isExternal={true}
                  primaryText={project.date}
                  secondaryText={project.secondaryText}
                  href={project.link}
                />
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="my-6">
            <h2 className="mb-2">Experience</h2>
            <div className="space-y-1">
              {experience.map(experience => (
                <ListItem 
                  key={experience.link}
                  image={experience.image}
                  title={experience.name}
                  isExternal={true}
                  primaryText={experience.date}
                  secondaryText={experience.secondaryText}
                  href={experience.link}
                />
              ))}
              <div className="flex flex-col md:flex-row items-start md:items-center pt-2 gap-6 transition-all">
                {designAreas.map((area, index) => (
                  <a 
                    key={index} 
                    href={area.link}
                    target={area.isExternal ? "_blank" : "_self"}
                    rel={area.isExternal ? "noopener noreferrer" : ""}
                    className="no-underline"
                  >
                    <Title 
                      title={area.title}
                      image={area.image}
                      isExternal={area.isExternal}
                    />
                  </a>
                ))}
                <span className="font-sans text-slate-500 text-sm md:-ml-2">and more.</span>
              </div>
            </div>
          </div>


          {/* Musings Section */}
          <div className="my-6">
            <h2 className="mb-2">Musings</h2>
            <div className="space-y-1">
              {musings.map(musing => (
                <ListItem 
                  key={musing.link}
                  title={musing.name}
                  isExternal={false}
                  primaryText={musing.date}
                  secondaryText={musing.secondaryText}
                  href={musing.link}
                />
              ))}
            </div>
          </div>

          {/* Now Section */}
          <div className="my-6">
            <h2 className="mb-2">Now</h2>
            <div className="space-y-4">
              {now.map((item, index) => (
                <p key={index} className="text-slate-700">
                  {Array.isArray(item.description) ? (
                    item.description.map((part, i) => (
                      typeof part === 'string' ? part : (
                        <HighlightLink key={i} href={part.href}>
                          {part.text}
                        </HighlightLink>
                      )
                    ))
                  ) : (
                    item.description
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-6 mb-8">
            <h2 className="mb-2">Contact</h2>
            <div className="text-slate-700 font-sans text-sm">
            Reach me at <HighlightLink href='https://www.linkedin.com/in/tonyzebastian/'> @tonyzebastian </HighlightLink> or{' '}
            <CopyEmailLink />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}