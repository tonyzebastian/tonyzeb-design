import MasonryGrid from "@/components/ui/MasonryGrid";

export default function AI() {
  const items = [
    { 
      src: '../images/AI/bangalore auto.png', 
      alt: 'Beautiful Bangalore Auto',
      description: 'An AI-generated artwork capturing the essence of Bangalores iconic auto-rickshaw, blending traditional elements with modern artistic style.',
      projectLink: 'wwww.google.com'
    },
    { 
      src: '../images/AI/rook.png', 
      alt: 'The rook Chair',
      description: 'A tall wooden chair designed in the shape of a chess rook, crafted with rich, dark-stained wood. The cylindrical tower form features a single rectangular opening on one side, carved into the body, creating a cozy seating alcove with a smooth black cushion inside. The top of the rook has classic crenellated battlements. The design is minimalist and sculptural, blending furniture and chess iconography, set against a soft beige background. Soft shadows and even lighting, photographed in a clean product style. Square format.',
      projectLink: 'wwww.google.com'
    },
    { 
      src: '../images/AI/stellar_blends.gif', 
      alt: 'Stellar Blends',
      description: 'A mesmerizing AI-generated animation exploring the intersection of cosmic elements and fluid dynamics.',
      projectLink: null
    },
    { 
      src: '../images/AI/Claude.png', 
      alt: 'Stellar Blends',
      description: 'A mesmerizing AI-generated animation exploring the intersection of cosmic elements and fluid dynamics.',
      projectLink: null
    },
    { 
      src: '../images/AI/cyclist.png', 
      alt: 'Gen-Z Cyclist',
      description: 'A contemporary interpretation of urban cycling culture through AI-generated art, featuring modern youth aesthetics.',
      projectLink: null
    },
    { 
      src: '../images/AI/lovable.png', 
      alt: 'Stellar Blends',
      description: 'A mesmerizing AI-generated animation exploring the intersection of cosmic elements and fluid dynamics.',
      projectLink: null
    },
    { 
      src: '../images/AI/elephant.png', 
      alt: 'Cool Elephant',
      description: 'A whimsical AI creation depicting an elephant with a unique personality, showcasing the blend of nature and artistic expression.',
      projectLink: null
    },
    { 
      src: '../images/AI/gemini.png', 
      alt: 'Stellar Blends',
      description: 'A mesmerizing AI-generated animation exploring the intersection of cosmic elements and fluid dynamics.',
      projectLink: null
    },
    { 
      src: '../images/AI/lady.png', 
      alt: 'Power Lady',
      description: 'An empowering AI-generated portrait celebrating feminine strength and contemporary fashion.',
      projectLink: null
    },
    { 
      src: '../images/AI/zebra crossing.png', 
      alt: 'Zebras crossing a zebra crossing',
      description: 'A playful AI interpretation of zebras using their namesake crossing, combining literal and metaphorical elements in urban wildlife.',
      projectLink: null
    },
    { 
      src: '../images/AI/writing_1.png', 
      alt: 'Creative Writing I',
      description: 'AI-generated visualization exploring the art of creative writing and storytelling through visual metaphors.',
      projectLink: null
    },
    { 
      src: '../images/AI/snakes.png', 
      alt: 'Abstract Snakes',
      description: 'A mesmerizing AI artwork featuring serpentine forms in an abstract composition.',
      projectLink: null
    },
    { 
      src: '../images/AI/writing_2.png', 
      alt: 'Creative Writing II',
      description: 'Second in the series of AI-generated artworks examining the creative writing process through visual elements.',
      projectLink: null
    },
    { 
      src: '../images/AI/figma.png', 
      alt: 'Figma Reimagined',
      description: 'An AI-generated piece exploring design tools and creative processes in the digital age.',
      projectLink: null
    }
  ];

  return <MasonryGrid items={items} />;
}