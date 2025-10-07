export const metadata = {
  title: 'Tony Sebastian ✦ designer',
  description: 'A visual product designer | Love to code | always tinkering with a side project',
  keywords: 'design, art, cinematography, photography, travel',
  twitter: {
    card: 'summary_large_image',
    site: '@tonyzebastian',
    creator: '@tonyzebastian',
    title: 'Tony Sebastian ✦ designer',
    description: 'A visual product designer | Love to code | always tinkering with a side project',
    image: 'https://tonyzeb.design/preview.png',
  },
  og: {
    title: 'Tony Sebastian ✦ designer',
    description: 'A visual product designer | Love to code | always tinkering with a side project',
    url: 'https://tonyzeb.design/',
    image: 'https://tonyzeb.design/preview.png',
    locale: 'en_EN',
  },
};

export const projects = [
  { 
    name: 'UI Glow', 
    date: 'Interaction design explorations', 
    link: 'https://www.uiglow.click/',
    image: '/icons/uiglow.png',
  },
  { 
    name: 'Resume Builder', 
    date: 'The simplest resumer builder', 
    link: 'https://resume-builder-dun-rho.vercel.app/',
    image: '/icons/resume.png',
  },
  { 
    name: 'ScriptFlow', 
    date: 'GPT for your words and ElevenLabs for your voice', 
    link: 'https://scriptflow.vercel.app/',
    image: '/icons/scriptflow.png',
  },
  { 
    name: 'Figma Recap', 
    date: 'Every edit, every design— At a glance', 
    link: 'https://www.figmarecap.in/',
    image: '/icons/figmarecap.png',
  },
  { 
    name: 'UX Nudges', 
    date: 'A collection of nudges from apps', 
    link: 'https://ux-nudge.web.app/',
    image: '/icons/nudges.png',
  },
  { 
    name: 'Abstract Illustration Library', 
    date: 'A library of free to use illustrations', 
    link: 'https://abstract-library.framer.website/',
    image: '/icons/abstract.png',
  },
];

export const experience = [
  {
    name: 'Postman',
    date: 'Senior Product Designer',
    link: 'https://www.postman.com/',
    image: '/icons/postman.png',
    secondaryText: "Jun'22 - Jun'25",
    projects: [
      {
        title: "Projects",
        description: "New Trial experiences, API Observability & more.",
        images: ["/images/projects/live_collections_1.png", "/images/projects/trial_02.mp4"],
        link: "/project/postman",
        requiresPassword: true
      }
    ]
  },
  { 
    name: 'Hypersonix', 
    date: 'Lead Product Designer', 
    link: 'https://hypersonix.ai/',
    image: '/icons/hypersonix.png',
    secondaryText: "Oct'20 - May'22",
    projects: [
      {
        title: "A summary of my experience",
        description: "0 to 1 projects, Design system, App studio & more.",
        
        images: ["/images/projects/hx_onboarding.mp4", "/images/projects/hx_hawk.mp4"],
        link: "/project/hypersonix",
        requiresPassword: false
      }
    ]
  },
];

/* More experience Section */
export const designAreas = [
  {
    title: "AVRL",
    image: '/icons/avrl.png',
    isExternal: true,
    link: 'https://www.linkedin.com/company/advanced-voice-research-labs/',
  },
  {
    title: "Infosys",
    image: "/icons/infosys.png",
    isExternal: true,
    link: 'https://www.infosys.com/',
  },
  {
    title: "Chatwoot",
    image: "/icons/chatwoot.png",
    isExternal: true,
    link: 'https://www.chatwoot.com/',
  },
  {
    title: "Scribd",
    image: "/icons/scribd.png",
    isExternal: true,
    link: 'https://www.scribd.com/',
  }
];



export const musings = [
  { name: 'Reduce perceived wait times through visual delight', date: 'May 2024', link: '/musings/perceived_wait'},
  { name: 'Mnemonic Signages', date: 'Jan 2024', link: '/musings/mnemonic_signages' },
  { name: '365 days of drawing - Some learnings', date: 'Jun 2021', link: '/musings/days_drawing'},
  { name: '15 Months of remote work: A Recap', date: 'Nov 2020', link: '/musings/remote_work'},
  { name: 'Reviving a legacy system at Infosys', date: 'Nov 2018', link: '/musings/infosys_legacy'}
];


export const generativeArt = [
  {
    text: "Some of my experiments with generative tools like Midjourney, Veo, Kling and more..",
  }
];

export const aiImages = [
  { src: '/images/AI/bangalore auto.png' },
  { src: '/images/AI/rook.png' },
  { src: '/images/AI/stellar_blends.gif' },
  { src: '/images/AI/Claude.png' },
  { src: '/images/AI/gemini.png' },
  { src: '/images/AI/lovable.png' },
  { src: '/images/AI/cyclist.png' },
  { src: '/images/AI/elephant.png' },
  { src: '/images/AI/lady.png' },
  { src: '/images/AI/zebra crossing.png' },
];

export const bio = {
  intro: "I like to build things. I'm into design, art and cinematography. Believes in consistency, side projects and letting life shape my craft.",
  social: {
    linkedin: "https://www.linkedin.com/in/tonyzebastian/",
    twitter: "https://x.com/tonyzebastian"
  }
};



export const now = [
  {
    description: [
      "I spend a lot of time thinking about motion - how things move, feel, respond and build those interactions through code. Currently learning through ",
      {
        text: "Animation on the web",
        href: "https://animations.dev/"
      },
      " and ",
      {
        text: "Interactive svg animations",
        href: "https://www.svg-animations.how/"
      },
      "."
    ]
  },
  {description: "As a creative, I love experimenting with tools like Midjourney, Veo, Kling and more to explore ideas faster and push them further."},
  {description: "Developing a systems mindset and stronger product sense to better connect insights to design decisions."},
  {description: "Writing more code, and trying to write it better. As AI becomes integral to design, I'm learning how systems work and how to guide them through better prompts."}
];


export const aboutBio = [
  {
    text: "Hey, I'm Tony, a designer who loves bringing ideas to life through thoughtful design, a bit of code, and a touch of motion.",
  },
  {
    text: " My path into design wasn't linear. I started with a master's in marketing, got curious about how products are built, and eventually taught myself design. I went from being a Business Analyst at Infosys to freelancing, then to building digital products at Hypersonix, and now designing at Postman.",
  },
  {
    text: "I've spent the past 7 years exploring the intersection of craft, systems thinking, and technology, creating experiences that not only look good but feel right. I'm currently based in Bangalore, though I still carry a bit of my hometown, Thodupuzha, Kerala, wherever I go.",
  },
];

export const aboutFunThings = [
  {
    text: "I'm an illustrator at heart—completed a 365-day drawing challenge in 2022.",
    links: [
      {
        text: "drawing challenge",
        href: "https://pin.it/3PKGQjN2Y"
      }
    ]
  },
  {
    text: "I dream of becoming a cinematographer someday.",
    links: [
      {
        text: "cinematographer",
        href: "https://www.youtube.com/@tonyzebastian"
      }
    ]
  },
  {
    text: "Running is a hobby I picked up 2025. Planning to do a half marathon in 2026.",
  }
];

export const aboutPrinciples = [
  "Consistency and effort always beat talent.",
  "It's never too late to pick up a new hobby.",
  "Let life's events shape and inspire your creative journey.",
  "Side projects are like oxygen—they keep your passion alive."
];

export const animation = [
  {
    text: "Animation lets me express emotions and ideas uniquely. I'm particularly fond of frame-by-frame animation, playful logo reveals, and creating small moments that connect with with people.",
  },
];

export const junymade = [
  {
    text: "Juny Made is an art studio I run with my partner, specializing in creating personalized, handmade embroidered gifts and unique creative projects. Follow us on Instagram. ",
    links: [
      {
        text: "Instagram.",
        href: "https://pin.it/3PKGQjN2Y"
      }
    ]
  },
];

export const photography = [
  {
    text: "I spend a lot of time behind the lens, chasing beautiful moments in nature, capturing dynamic movement, and exploring abstract forms. Follow me on Pexels.",
    links: [
      {
        text: "Pexels.",
        href: "https://pin.it/3PKGQjN2Y"
      }
    ]
  },
];

export const aboutConversation = {
  intro: "Here's a list of ideas to start a conversation between us:",
  topics: [
    "Send me a photo or video that you took.",
    "Tell me about your camera setup.",
    "Ask me about my art journey.",
    {
      text: "Just say \"Hi\"!",
      email: "tonyzebastian@gmail.com"
    }
  ]
};