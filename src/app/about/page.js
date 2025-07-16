import Image from 'next/image';
import ImageReveal from '@/components/ui/ImageReveal';
import HighlightLink from '@/components/ui/HighlightLink';
import { aboutBio, aboutFunThings, aboutPrinciples, aboutConversation } from '@/lib/content';

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
            <div className='-ml-8'>
                <ImageReveal 
                    leftImage="/images/profile_pic.jpg"
                    middleImage="/images/profile_pic.jpg"
                    rightImage="/images/profile_pic.jpg"
                />
            </div>

            <div>
                {/* Bio Section */}
                <section className="mb-8 mx-6">
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
                <section className="mb-8 mx-6">
                    <h4 className="mb-2">Things I do for fun</h4>
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
                <section className="mb-8 mx-6">
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

                {/* Conversation Section */}
                <section className="mb-8 mx-6">
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
            </div>
        </div>
    );
}