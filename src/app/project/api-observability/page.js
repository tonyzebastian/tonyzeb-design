'use client'

import Image from 'next/image';
import { postobvdata } from './content';
import { useState } from 'react';
import { X } from 'lucide-react';


// Unified Section Layout Component
function SectionLayout({ section }) {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const isVideo = (src) => {
    return /\.(mp4|mov|webm|ogg|avi)$/i.test(src);
  };

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'up':
        return { symbol: '↗', color: 'text-green-600' };
      case 'down':
        return { symbol: '↙', color: 'text-green-600' };
      case 'star':
        return { symbol: '★', color: 'text-yellow-500' };
      default:
        return { symbol: '↗', color: 'text-green-600' };
    }
  };

  // Simple data mapping with standardized field names
  const getSectionData = () => {
    return {
      tag: section.name,
      mainHeading: section.heading,
      description: section.description,
      bulletPoints: section.bulletPoints,
      images: section.images,
      cards: section.cards,
      subsections: section.subsections,
      impactData: section.impactData
    };
  };

  const data = getSectionData();

  return (
    <div className="mb-20">
      {/* Tag */}
      {data.tag && (
        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">
          {data.tag}
        </h3>
      )}
      
      {/* Main Heading */}
      {data.mainHeading && (
        <h4 className="text-lg font-medium text-slate-900 mb-2">
          {data.mainHeading}
        </h4>
      )}
      
      {/* Description */}
      {data.description && (
        <p className="text-slate-900 leading-relaxed mb-8">
          {data.description}
        </p>
      )}
      
      {/* Bullet Points */}
      {data.bulletPoints && data.bulletPoints.length > 0 && (
        <ul className="text-slate-900 mb-8 text-sm leading-relaxed space-y-2">
          {data.bulletPoints.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="w-1 h-1 bg-slate-500 rounded-full mt-3 mr-2 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      
      {/* Images */}
      {data.images && data.images.length > 0 && (
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.images.map((image, index) => (
              <div 
                key={index}
                className="relative rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedItem({ src: image, alt: `${data.tag} illustration ${index + 1}` })}
              >
                {image.endsWith('.mp4') ? (
                  <video
                    src={image}
                    className="w-full h-auto rounded-xl border border-slate-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : image.endsWith('.gif') ? (
                  <Image
                    src={image}
                    alt={`${data.tag} illustration ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-xl border border-slate-100"
                    unoptimized
                  />
                ) : (
                  <Image
                    src={image}
                    alt={`${data.tag} illustration ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-xl border border-slate-100"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* 2x2 Grid Cards */}
      {data.cards && data.cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.cards.map((card, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-medium text-slate-900 mb-3">{card.title}</h4>
              <p className="text-slate-700 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {/* Subsections with heading, description and images */}
      {data.subsections && data.subsections.length > 0 && (
        <div className="space-y-12">
          {data.subsections.map((subsection, index) => (
            <div key={index} className="mb-12">
              <h4 className="font-medium text-slate-900 text-base">{subsection.title}</h4>
              <p className="text-slate-700 leading-relaxed mb-4">{subsection.description}</p>
              
              {/* Single media */}
              {subsection.media && (
                <div 
                  className="relative rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedItem({ src: subsection.media, alt: `${subsection.title} - Media` })}
                >
                  {subsection.media.endsWith('.mp4') ? (
                    <video
                      src={subsection.media}
                      className="w-full h-auto rounded-xl border border-slate-100"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : subsection.media.endsWith('.gif') ? (
                    <Image
                      src={subsection.media}
                      alt={`${subsection.title} - Media`}
                      width={800}
                      height={500}
                      className="w-full h-auto rounded-xl border border-slate-100"
                      unoptimized
                    />
                  ) : (
                    <Image
                      src={subsection.media}
                      alt={`${subsection.title} - Media`}
                      width={800}
                      height={500}
                      className="w-full h-auto rounded-xl border border-slate-100"
                    />
                  )}
                </div>
              )}
              
              {/* Multiple images in 2-column grid */}
              {subsection.images && subsection.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subsection.images.map((image, imageIndex) => (
                    <div 
                      key={imageIndex}
                      className="relative rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedItem({ src: image, alt: `${subsection.title} - Image ${imageIndex + 1}` })}
                    >
                      {image.endsWith('.mp4') ? (
                        <video
                          src={image}
                          className="w-full h-auto rounded-xl border border-slate-100"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : image.endsWith('.gif') ? (
                        <Image
                          src={image}
                          alt={`${subsection.title} - Image ${imageIndex + 1}`}
                          width={400}
                          height={300}
                          className="w-full h-auto rounded-xl border border-slate-100"
                          unoptimized
                        />
                      ) : (
                        <Image
                          src={image}
                          alt={`${subsection.title} - Image ${imageIndex + 1}`}
                          width={400}
                          height={300}
                          className="w-full h-auto rounded-xl border border-slate-100"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* Impact Section */}
      {data.impactData && data.impactData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.impactData.map((impact, index) => {
            const icon = getIcon(impact.icon);
            return (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="flex items-center justify-center mb-4">
                  <span className={`text-3xl font-bold ${icon.color}`}>
                    {icon.symbol}
                  </span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{impact.text}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* Spotlight Overlay */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/25 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative bg-white rounded-xl p-4 max-w-fit max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 p-2 hover:bg-slate-400 bg-slate-300 rounded-full transition-colors z-10"
              onClick={() => setSelectedItem(null)}
            >
              <X size={20} className="text-slate-900" />
            </button>

            <div className="flex justify-center items-center">
              {isVideo(selectedItem.src) ? (
                <video
                  src={selectedItem.src}
                  className="rounded-xl max-w-[80vw] max-h-[70vh] w-auto h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.alt}
                  className="rounded-xl max-w-[80vw] max-h-[80vh] w-auto h-auto object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default function MiniCasesPage() {
  const { projects } = postobvdata;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-8 py-16">

        {/* Projects Section */}
        <div>
          {projects.map((project, index) => (
            <div key={index} className="mb-24 border-b border-slate-100 pb-16 last:border-b-0">
              {/* Project Header */}
              <div className="mb-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-serif font-medium text-slate-900 mb-2">{project.title}</h2>
                  
                  {/* Project Details */}
                  <div className="text-sm text-slate-800 font-medium tracking-wider">
                    <span>{project.role}</span>
                    <span className="mx-3">|</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
              
              {/* Case Study Sections */}
              <div className="space-y-20">
                {project.sections.map((section, sectionIndex) => (
                  <SectionLayout 
                    key={sectionIndex} 
                    section={section}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}