'use client'

import Image from 'next/image';
import { hypersonixData } from './content';
import { useState } from 'react';
import { X } from 'lucide-react';



function StatsSection({ stats }) {
  return (
    <div className="grid grid-cols-2 ">
      {stats.map((stat, index) => (
        <div key={index} className="text-left flex items-center gap-2">
          <div className="text-base font-medium text-slate-900">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}

function ProjectSection({ section, index }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const isVideo = (src) => {
    return /\.(mp4|mov|webm|ogg|avi)$/i.test(src);
  };

  const renderContent = () => {
    // Handle both content and description fields for backward compatibility
    const content = section.content || section.description;
    
    if (Array.isArray(content)) {
      // Render as bullet points
      return (
        <ul className="text-slate-900 mb-6 text-sm leading-relaxed space-y-2">
          {content.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="w-1 h-1 bg-slate-500 rounded-full mt-3 mr-2 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    } else {
      // Render as paragraph
      return <p className="text-slate-900 mb-6 leading-relaxed text-sm">{content}</p>;
    }
  };

  return (
    <div className="mb-10">
      <div className="mb-2">
        <h3 className="text-base font-semibold text-slate-900">{section.name}</h3>
      </div>
      
      {renderContent()}
      
      {section.images && section.images.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.images.map((image, imgIndex) => (
              <div 
                key={imgIndex} 
                className="relative rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedItem({ src: image, alt: `${section.name} - Image ${imgIndex + 1}` })}
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
                    alt={`${section.name} - Image ${imgIndex + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl border border-slate-100"
                    unoptimized
                  />
                ) : (
                  <Image
                    src={image}
                    alt={`${section.name} - Image ${imgIndex + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl border border-slate-100"
                  />
                )}
              </div>
            ))}
          </div>

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
                {/* Close Button */}
                <button
                  className="absolute top-2 right-2 p-2 hover:bg-slate-400 bg-slate-300 rounded-full transition-colors z-10"
                  onClick={() => setSelectedItem(null)}
                >
                  <X size={20} className="text-slate-900" />
                </button>

                {/* Media Container */}
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
        </>
      )}
    </div>
  );
}

function ProjectCard({ project, projectIndex }) {
  return (
    <div className="mb-16">
      {/* Project Tag */}
      <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">
        Project {projectIndex + 1}
      </h3>
      
      <div className="mb-8">
        <h2 className="text-lg font-bold text-slate-900 mb-3">{project.title}</h2>
        <p className="text-slate-900 text-sm leading-relaxed">{project.description}</p>
      </div>
      
      <div className="space-y-8">
        {project.sections.map((section, sectionIndex) => (
          <ProjectSection 
            key={sectionIndex} 
            section={section} 
            index={sectionIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default function HypersonixPage() {
  const { heading, overview, projects, details } = hypersonixData;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-8 py-16">
        {/* Page Heading */}
        <div className="mb-8">
          <div className="mb-6">
            <h2 className="text-3xl font-serif font-medium text-slate-900 mb-1">{heading}</h2>
            
            {/* Project Details */}
            {details && (
              <div className="text-sm text-slate-800 font-medium tracking-wider">
                {details.map((detail, index) => (
                  <span key={index}>
                    {detail.value}
                    {index < details.length - 1 && <span className="mx-3">|</span>}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-12">
          <p className="text-slate-900 text-sm leading-relaxed mb-8">
            {overview.description}
          </p>
          
          {/* Optional Overview Image */}
          {overview.image && (
            <div className="mt-8">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={overview.image}
                  alt="Hypersonix Overview"
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          )}
        </div>

        {/* Projects Section */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              projectIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}