import ImageReveal from '@/components/ui/ImageReveal';
import HighlightLink from '@/components/ui/HighlightLink';
import { aboutBio, aboutFunThings, aboutPrinciples, aboutConversation, animation, photography, junymade } from '@/lib/content';
import { galleryImages } from './config';
import MasonryGridLightbox from '@/components/ui/MasonryGridLigthbox';

export const metadata = {
  title: 'About ✦ Tony Sebastian',
  description: 'Learn more about Tony Sebastian - visual product designer, photographer, animator, and creative storyteller with a passion for craftsmanship',
  keywords: 'about tony sebastian, product designer, photographer, animator, creative process, design philosophy, juny made, visual storytelling',
  author: 'Tony Sebastian',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://tonyzeb.design/about',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tonyzebastian',
    creator: '@tonyzebastian',
    title: 'About ✦ Tony Sebastian',
    description: 'Learn more about Tony Sebastian - visual product designer, photographer, animator, and creative storyteller with a passion for craftsmanship',
    image: 'https://tonyzeb.design/preview.png',
    imageAlt: 'About Tony Sebastian - Designer, Photographer, and Creative Storyteller',
  },
  openGraph: {
    title: 'About ✦ Tony Sebastian',
    description: 'Learn more about Tony Sebastian - visual product designer, photographer, animator, and creative storyteller with a passion for craftsmanship',
    url: 'https://tonyzeb.design/about',
    siteName: 'Tony Sebastian',
    images: [{
      url: 'https://tonyzeb.design/preview.png',
      alt: 'About Tony Sebastian - Designer, Photographer, and Creative Storyteller',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function About() {
    const renderTextWithLinks = (item) => {
        if (!item.links) return item.text;

        let result = item.text;
        item.links.forEach(link => {
            result = result.replace(link.text, `<LINK>${link.text}<LINK>`);
        });

        const parts = result.split('<LINK>');
        return parts.map((part, index) => {
            const link = item.links.find(l => l.text === part);
            return link ? (
                <HighlightLink key={index} href={link.href}>
                    {link.text}
                </HighlightLink>
            ) : part;
        });
    };

    return (
        <div className="flex flex-col items-center justify-center mx-auto max-w-2xl px-8 mb-16">
            <div className='-ml-12'>  {/* Removed -ml-12 */}
                <ImageReveal 
                    leftImage="/images/about/left.jpg"
                    middleImage="/images/about/middle.jpg"
                    rightImage="/images/about/right.jpg"
                />
            </div>
    
            <div className="w-full gap-5 flex flex-col">
                {/* Bio Section */}
                <section className="mb-8">
                    <p className="text-slate-700">
                        {aboutBio.map((item, index) => (
                            <span key={index}>
                                {renderTextWithLinks(item)}
                                <br/>
                            </span>
                        ))}
                    </p>
                </section>
    
                {/* Fun Things Section */}
                <section className="mb-8">
                    <h4 className="mb-2">What I do for fun</h4>
                    <p className="text-slate-700">
                        {aboutFunThings.map((item, index) => (
                            <span key={index}>
                                {renderTextWithLinks(item)}
                                <br/>
                            </span>
                        ))}
                    </p>
                </section>
    
                {/* Principles Section */}
                <section className="mb-8">
                    <h4 className="mb-2">Personal principles</h4>
                    <p>
                        {aboutPrinciples.map((principle, index) => (
                            <span key={index}>
                                - {principle}
                                <br/>
                            </span>
                        ))}
                    </p>
                </section>
    
                {/* Animation Section */}
                <section className="mb-8">
                    <h4 className="mb-2">Animation</h4>
                    <p className="text-slate-700 mb-4">
                        {animation.map((item, index) => (
                            <span key={index}>
                                {renderTextWithLinks(item)}
                                <br/>
                            </span>
                        ))}
                    </p>

                    <MasonryGridLightbox
                        lightboxImages={galleryImages.animation.lightbox}
                    />
                </section>
    
                {/* Juny made Section */}
                <section className="mb-8">
                    <h4 className="mb-2">Juny Made - Art studio</h4>
                    <p className="text-slate-700 mb-4">
                        {junymade.map((item, index) => (
                            <span key={index}>
                                {renderTextWithLinks(item)}
                                <br/>
                            </span>
                        ))}
                    </p>
                    <MasonryGridLightbox
                        lightboxImages={galleryImages.junyMade.lightbox}
                    />
                </section>
    
                {/* Photography Section */}
                <section className="mb-8">
                    <h4 className="mb-2">Photography</h4>
                    <p className="text-slate-700 mb-4">
                        {photography.map((item, index) => (
                            <span key={index}>
                                {renderTextWithLinks(item)}
                                <br/>
                            </span>
                        ))}
                    </p>
                    <MasonryGridLightbox
                        lightboxImages={galleryImages.photography.lightbox}
                        height={580}
                    />
                </section>
    
                {/* Conversation Section */}
                <section className="mb-12">
                    <h4 className="mb-2">Start a conversation</h4>
                    <p>
                        {aboutConversation.intro}
                        <br/>
                        {aboutConversation.topics.map((topic, index) => (
                            <span key={index}>
                                - {typeof topic === 'string' ? (
                                    topic
                                ) : (
                                    <>Just say <HighlightLink href={`mailto:${topic.email}`}>"Hi"!</HighlightLink></>
                                )}
                                <br/>
                            </span>
                        ))}
                    </p>
                </section>

                {/* Footer/Copyright */}
                <section className="mb-8 text-center border-t pt-4 border-slate-200 ">
                    <p className='text-slate-500 font-light tracking-widest'>Built with Next.js and Motion.dev | Typefaces -  Instrument Serif & Geist</p>
                    <p className="mt-1 text-slate-500">© Tony Sebastian, 2025</p>
                </section>
            </div>
        </div>
    );
}