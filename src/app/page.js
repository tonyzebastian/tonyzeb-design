import ListItem from '@/components/list/ListItem';
import Title from '@/components/list/Title';
import { metadata, projects, experience, musings, bio, designAreas } from '@/lib/content';

export { metadata };

export default function HomePage() {
  return (
    <div className='py-12'>
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
            <div className="flex flex-row items-center pt-2 gap-6 transition-all">
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
              <span className="font-sans text-slate-500 text-sm -ml-2">and more.</span>
            </div>
          </div>
        </div>

          {/* New flex row with titles */}


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
      </div>
    </div>
  );
}