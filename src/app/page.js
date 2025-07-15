import ListItem from '@/components/list/ListItem';
import Title from '@/components/list/Title';
import { metadata, projects, experience, musings, bio, designAreas, now } from '@/lib/content';

export { metadata };

export default function HomePage() {
  return (
    <div className='pt-12 pl-4'>
      <div className="mx-auto max-w-2xl px-8">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center justify-center">
          <div className="mb-4">
            <img 
              src="/hero.gif" 
              alt="Hero animation" 
              className="max-w-xl mt-4"
            />
          </div>
          <h1 className="font-serif text-center">Hello! I am Tony, a software designer.</h1> 
          <h3 className="mt-3 text-center max-w-xl">{bio.intro}</h3>
        </div>

        {/* Body */}
        <div className='flex flex-col gap-6'>

          {/* Projects Section */}
          <div className="mb-12">
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
          <div className="mb-12">
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
          <div className="mb-12">
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
          <div className="mb-12">
            <h2 className="mb-2">Now</h2>
            <div className="space-y-4">
              {now.map((item, index) => (
                <p key={index} className="text-slate-700">
                  {item.description}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-12">
            <h2 className="mb-2">Contact</h2>
            <p className="text-slate-700">
              Reach me at <a href="https://twitter.com/tonyzebastian" className="underline hover:text-slate-900 transition-colors" target="_blank" rel="noopener noreferrer">@tonyzebastian</a> or <a href="mailto:tonyzeb.design@gmail.com" className="underline hover:text-slate-900 transition-colors">tonyzeb.design@gmail.com</a>
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}