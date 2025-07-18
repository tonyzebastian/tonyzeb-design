import MasonryGrid from "@/components/ui/MasonryGrid";

export default function Crafts() {
  const items = [
    { 
      src: '../images/Craft/1.gif', 
      alt: 'Burn out',
      description: 'An engaging animation exploring the concept of professional burnout through dynamic visual metaphors.',
      projectLink: null
    },
    { 
      src: '../images/Craft/2.gif', 
      alt: 'Decision Making',
      description: 'Interactive visualization demonstrating the complexity of decision-making processes in modern interfaces.',
      projectLink: null
    },
    { 
      src: '../images/Craft/omni_bar.gif', 
      alt: 'Omni Bar',
      description: 'A sophisticated search and command interface design showcasing seamless user interaction and real-time feedback.',
      projectLink: 'https://www.figma.com/file/example-omni-bar'
    },
    { 
      src: '../images/Craft/powerpass.gif', 
      alt: 'Power Pass',
      description: 'Innovative animation for a power user feature, demonstrating smooth transitions and intuitive user feedback.',
      projectLink: 'https://www.figma.com/file/example-powerpass'
    },
    { 
      src: '../images/Craft/4.gif', 
      alt: 'Graph Interaction',
      description: 'Dynamic data visualization showing interactive graph manipulation with smooth animations and state transitions.',
      projectLink: null
    },
    { 
      src: '../images/Craft/5.gif', 
      alt: 'Postman Hero Animation',
      description: 'Hero section animation created for Postman, featuring engaging motion design that explains complex concepts simply.',
      projectLink: 'https://www.postman.com'
    },
    { 
      src: '../images/Craft/6.gif', 
      alt: 'Postman Loading',
      description: 'Custom loading animation designed for Postman, balancing functionality with brand identity.',
      projectLink: 'https://www.postman.com'
    },
    { 
      src: '../images/Craft/3.gif', 
      alt: 'Personal Hero Animation',
      description: 'A creative personal project showcasing advanced animation techniques and storytelling through motion.',
      projectLink: null
    },
    { 
      src: '../images/Craft/Runner.gif', 
      alt: 'Runner Onboarding',
      description: 'Engaging onboarding experience animation that guides users through features while maintaining visual interest.',
      projectLink: 'https://www.figma.com/file/example-runner'
    }
  ];

  return <MasonryGrid items={items} />;
}