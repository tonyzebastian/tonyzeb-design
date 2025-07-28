import ImageReveal from '@/components/ui/ImageReveal';
import HighlightLink from '@/components/ui/HighlightLink';
import { aboutBio, aboutFunThings, aboutPrinciples, aboutConversation, animation, photography, junymade } from '@/lib/content';
import ImageGridWithLightbox from '@/components/ui/ImageGridWithLightbox';
import { galleryImages } from './config';

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
        <div className="flex flex-col items-center justify-center mx-auto max-w-2xl px-8">
            <div className='-ml-12'>  {/* Removed -ml-12 */}
                <ImageReveal 
                    leftImage="/images/about/left.jpg"
                    middleImage="/images/about/middle.jpg"
                    rightImage="/images/about/right.jpg"
                />
            </div>
    
            <div className="w-full gap-3 flex flex-col">
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
                    <ImageGridWithLightbox 
                        gridImages={galleryImages.animation.grid}
                        lightboxImages={galleryImages.animation.lightbox}
                        title="Animation"
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
                    <ImageGridWithLightbox 
                        gridImages={galleryImages.junyMade.grid}
                        lightboxImages={galleryImages.junyMade.lightbox}
                        title="Juny Made"
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
                    <ImageGridWithLightbox 
                        gridImages={galleryImages.photography.grid}
                        lightboxImages={galleryImages.photography.lightbox}
                        title="Photography"
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
                    <p className='text-slate-500'>Website built with React and Motion. Typefaces used are Geist and Inter.</p>
                    <p className="mt-1 text-slate-500">© Tony Sebastian, 2025</p>
                </section>
            </div>
        </div>
    );
}