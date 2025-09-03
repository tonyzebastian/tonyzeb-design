'use client'

import Image from 'next/image';
import { useState, useCallback } from 'react';
import { X } from 'lucide-react';


// Utility Functions
const isVideo = (src) => /\.(mp4|mov|webm|ogg|avi)$/i.test(src);
const isGif = (src) => src.endsWith('.gif');
const getIcon = (iconType) => ICON_CONFIG[iconType] || ICON_CONFIG.default;

// Shared Components
const MediaItem = ({ src, alt, width, height, onClick, className = "" }) => {
  const baseClasses = "w-full h-auto rounded-xl border border-slate-100";
  const combinedClasses = `${baseClasses} ${className}`;

  if (isVideo(src)) {
    return (
      <video
        src={src}
        className={combinedClasses}
        autoPlay
        muted
        loop
        playsInline
        onClick={onClick}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={combinedClasses}
      unoptimized={isGif(src)}
      onClick={onClick}
    />
  );
};

const MediaOverlay = ({ selectedItem, onClose }) => {
  if (!selectedItem) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/25 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-xl p-4 max-w-fit max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 p-2 hover:bg-slate-400 bg-slate-300 rounded-full transition-colors z-10"
          onClick={onClose}
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
  );
};

const ProjectDetails = ({ pageData }) => {
  if (!(pageData.role || pageData.duration || pageData.company)) {
    return null;
  }

  return (
    <div className="text-sm text-slate-800 font-medium tracking-wider flex items-center gap-3">
      {pageData.company && (
        <>
          <div className="flex items-center gap-2">
            {pageData.logo && (
              <Image
                src={pageData.logo}
                alt={pageData.company}
                width={18}
                height={18}
                className="object-contain"
              />
            )}
            <span>{pageData.company}</span>
          </div>
          {(pageData.role || pageData.duration) && <span>|</span>}
        </>
      )}
      {pageData.role && (
        <>
          <span>{pageData.role}</span>
          {pageData.duration && <span>|</span>}
        </>
      )}
      {pageData.duration && <span>{pageData.duration}</span>}
    </div>
  );
};

// Main Components
export function CaseStudyPage({ pageData, projects }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-8 py-16">
        {/* Page Header */}
        <header className="mb-8">
          <div className="mb-6">
            <h1 className="text-4xl font-serif font-medium text-slate-900 mb-3">
              {pageData.title}
            </h1>
            <ProjectDetails pageData={pageData} />
          </div>
        </header>

        {/* Page Description */}
        {pageData.description && (
          <section className="mb-12">
            <p className="text-slate-900 text-sm leading-relaxed">
              {pageData.description}
            </p>
          </section>
        )}

        {/* Projects */}
        <main>
          {projects.map((project, index) => (
            <ProjectSection 
              key={project.title || index}
              project={project}
              index={index}
              isLast={index === projects.length - 1}
              showProjectTag={projects.length > 1}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

const ProjectSection = ({ project, index, isLast, showProjectTag }) => (
  <article className={`mb-20 ${!isLast ? 'border-b border-slate-300 border-dashed pb-16' : ''}`}>
    {/* Project Tag */}
    {showProjectTag && (
      <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">
        Project {index + 1}
      </h2>
    )}
    
    {/* Project Title */}
    <div className="mb-4">
      <h3 className="text-xl font-sans font-bold text-slate-900">
        {project.title}
      </h3>
    </div>
    
    {/* Sections */}
    <div className="space-y-12">
      {project.sections.map((section, sectionIndex) => (
        <SectionLayout 
          key={sectionIndex} 
          section={section}
        />
      ))}
    </div>
  </article>
);

export function SectionLayout({ section }) {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const openLightbox = useCallback((src, alt) => {
    setSelectedItem({ src, alt });
  }, []);
  
  const closeLightbox = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const {
    heading,
    description,
    bulletPoints,
    images,
    cards,
    subsections
  } = section;

  return (
    <section>
      {/* Section Heading */}
      {heading && (
        <h4 className="text-lg font-medium text-slate-900 mb-2">
          {heading}
        </h4>
      )}
      
      {/* Description */}
      {description && (
        <p className="text-slate-900 leading-relaxed mb-4">
          {description}
        </p>
      )}
      
      {/* Bullet Points */}
      {bulletPoints?.length > 0 && (
        <BulletPoints items={bulletPoints} />
      )}
      
      {/* Images */}
      {images?.length > 0 && (
        <ImageGrid 
          images={images} 
          onImageClick={openLightbox}
          altPrefix={heading || 'Section'}
        />
      )}
      
      {/* Cards */}
      {cards?.length > 0 && (
        <CardGrid cards={cards} />
      )}
      
      {/* Subsections */}
      {subsections?.length > 0 && (
        <SubsectionsList 
          subsections={subsections}
          onImageClick={openLightbox}
        />
      )}

      {/* Media Overlay */}
      <MediaOverlay 
        selectedItem={selectedItem} 
        onClose={closeLightbox} 
      />
    </section>
  );
}

// Specialized Components
const BulletPoints = ({ items }) => (
  <ul className="text-slate-900 mb-8 text-sm leading-relaxed space-y-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        <span className="w-1 h-1 bg-slate-500 rounded-full mt-3 mr-2 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ImageGrid = ({ images, onImageClick, altPrefix }) => {
  const isMultipleImages = images.length > 1;
  const gridClass = isMultipleImages ? 'grid-cols-1 md:grid-cols-2 gap-4' : 'grid-cols-1';

  return (
    <div className="mb-8">
      <div className={`grid ${gridClass}`}>
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onImageClick(image, `${altPrefix} illustration ${index + 1}`)}
          >
            <MediaItem
              src={image}
              alt={`${altPrefix} illustration ${index + 1}`}
              width={isMultipleImages ? 400 : 800}
              height={isMultipleImages ? 300 : 400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const CardGrid = ({ cards }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {cards.map((card, index) => (
      <div key={index} className="bg-slate-50 p-6 rounded-xl">
        <h4 className="font-medium text-slate-900 mb-3">{card.title}</h4>
        <p className="text-slate-700 text-sm leading-relaxed">{card.description}</p>
      </div>
    ))}
  </div>
);

const SubsectionsList = ({ subsections, onImageClick }) => (
  <div className="space-y-12">
    {subsections.map((subsection, index) => {
      const mediaItems = subsection.images || (subsection.media ? [subsection.media] : []);
      
      return (
        <div key={index} className="mb-12">
          <h4 className="font-medium text-slate-900 text-base">{subsection.title}</h4>
          <p className="text-slate-700 leading-relaxed mb-4">{subsection.description}</p>
          
          {mediaItems.length > 0 && (
            <ImageGrid
              images={mediaItems}
              onImageClick={onImageClick}
              altPrefix={subsection.title}
            />
          )}
        </div>
      );
    })}
  </div>
);
