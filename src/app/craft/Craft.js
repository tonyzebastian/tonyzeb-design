import MasonryGrid from "@/components/ui/MasonryGrid";

export default function Crafts() {
  const items = [
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
      src: '../images/Craft/6.gif', 
      alt: 'Postman Loading',
      description: 'Custom loading animation designed for Postman, balancing functionality with brand identity.',
      projectLink: 'https://www.postman.com'
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