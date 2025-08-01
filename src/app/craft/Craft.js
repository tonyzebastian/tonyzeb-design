import MasonryGrid from "@/components/ui/MasonryGrid";

export default function Crafts() {
  const items = [
    { 
      src: '../images/Craft/slate_config.mp4', 
      alt: 'A car configuration',
      description: 'A sophisticated search and command interface design showcasing seamless user interaction and real-time feedback.',
      projectLink: null
    },
    { 
      src: '../images/Craft/omni_bar.gif', 
      alt: 'Omni Bar',
      description: 'A sophisticated search and command interface design showcasing seamless user interaction and real-time feedback.',
      projectLink: null
    },
    { 
      src: '../images/Craft/powerpass.mp4', 
      alt: 'Power Pass',
      description: 'Innovative animation for a power user feature, demonstrating smooth transitions and intuitive user feedback.',
      projectLink: null
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
      projectLink: null
    },
    { 
      src: '../images/Craft/comet.mp4', 
      alt: 'Comet Browser Dowload Animation',
      description: 'Custom loading animation designed for Postman, balancing functionality with brand identity.',
      projectLink: null
    },
    { 
      src: '../images/Craft/fish.gif', 
      alt: 'A School of fish',
      description: 'An interactive school of fish with realistic movements.',
      projectLink: 'https://www.uiglow.click/experiences/fish'
    },
    { 
      src: '../images/Craft/Runner.mp4', 
      alt: 'Runner Onboarding',
      description: 'Engaging onboarding experience animation that guides users through features while maintaining visual interest.',
      projectLink: null,
      specialStyling: true
    }
  ];

  return <MasonryGrid items={items} />;
}