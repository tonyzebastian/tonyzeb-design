'use client'

import { postmanData } from './content';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const isVideo = (src) => /\.(mp4|mov|webm|ogg|avi)$/i.test(src);
const isGif = (src) => src.endsWith('.gif');

const MediaItem = ({ src, alt, width, height }) => {
  const baseClasses = "w-full h-auto rounded-xl border border-slate-100";

  if (isVideo(src)) {
    return (
      <video
        src={src}
        className={baseClasses}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={baseClasses}
      unoptimized={isGif(src)}
    />
  );
};

export default function PostmanPage() {
  const { projects } = postmanData;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-8 py-16">
        {/* Main Heading */}
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-medium text-slate-900">
            Postman Projects
          </h1>
        </header>

        {/* Projects */}
        <main className="space-y-16">
          {projects.map((project, index) => (
            <article
              key={project.title || index}
              className={index !== projects.length - 1 ? 'border-b border-slate-300 border-dashed pb-16' : ''}
            >
              {/* Project Title with Link */}
              <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-sans font-bold text-slate-900">
                  {project.title}
                </h2>
                {project.link && (
                  <a
                    href={`${project.link}?dialog=true`}
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap"
                  >
                    View Details
                    <ArrowRight size={14} />
                  </a>
                )}
              </div>

              {/* Project Sections (excluding Impact) */}
              <div className="space-y-8">
                {project.sections
                  .filter(section => section.heading !== 'Impact')
                  .map((section, sectionIndex) => (
                    <section key={sectionIndex}>
                      {/* Description */}
                      {section.description && (
                        <p className="text-slate-900 leading-relaxed mb-4">
                          {section.description}
                        </p>
                      )}

                      {/* Bullet Points */}
                      {section.bulletPoints?.length > 0 && (
                        <ul className="text-slate-900 mb-6 text-sm leading-relaxed space-y-2">
                          {section.bulletPoints.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-1 h-1 bg-slate-500 rounded-full mt-3 mr-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Images */}
                      {section.images?.length > 0 && (
                        <div className="mb-6">
                          <div className={`grid ${section.images.length > 1 ? 'grid-cols-1 md:grid-cols-2 gap-4' : 'grid-cols-1'}`}>
                            {section.images.map((image, imgIdx) => (
                              <div key={imgIdx} className="relative rounded-xl overflow-hidden">
                                <MediaItem
                                  src={image}
                                  alt={`${project.title} illustration ${imgIdx + 1}`}
                                  width={section.images.length > 1 ? 400 : 800}
                                  height={section.images.length > 1 ? 300 : 400}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </section>
                  ))}
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}
