import Image from 'next/image';
import { hypersonixData } from './content';

export const metadata = {
  title: 'Hypersonix Experience - Tony Sebastian',
  description: 'My experience as Lead Product Designer at Hypersonix, working on AI-powered analytics for e-commerce',
};

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.images.map((image, imgIndex) => (
            <div key={imgIndex} className="relative rounded-xl overflow-hidden">
              {image.endsWith('.mp4') ? (
                <video
                  src={image}
                  className="w-full h-auto rounded-xl"
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
                  className="w-full h-auto rounded-xl"
                  unoptimized
                />
              ) : (
                <Image
                  src={image}
                  alt={`${section.name} - Image ${imgIndex + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, projectIndex }) {
  return (
    <div className="mb-16">
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
        <div className="mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0">
              <Image
                src="/icons/hypersonix.png"
                alt="Hypersonix"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-3xl font-medium text-slate-900 mb-4">
                {heading}
              </h1>
              
              {/* Details */}
              {details && (
                <div className="text-base font-medium text-slate-900">
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