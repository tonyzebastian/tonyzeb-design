"use client";
import { Masonry } from "react-plock";
import { metadata } from './metadata';

export default function Visuals() {
  document.title = metadata.title;
  document.description = metadata.description;
  
  const items = [
    { src: '../images/visuals/2.jpg', alt: 'Visual 2' },
    { src: '../images/visuals/4.jpg', alt: 'Visual 4' },
    { src: '../images/visuals/5.jpg', alt: 'Visual 5' },
    { src: '../images/visuals/6.jpg', alt: 'Visual 6' },
    { src: '../images/visuals/20.jpg', alt: 'Visual 20' },
    { src: '../images/visuals/8.jpg', alt: 'Visual 8' },
    { src: '../images/visuals/9.jpg', alt: 'Visual 9' },
    { src: '../images/visuals/10.jpg', alt: 'Visual 10' },
    { src: '../images/visuals/14.jpg', alt: 'Visual 14' },
    { src: '../images/visuals/15.jpg', alt: 'Visual 15' },
    { src: '../images/visuals/18.jpg', alt: 'Visual 18' },
    { src: '../images/visuals/26.jpg', alt: 'Visual 26' },
    { src: '../images/visuals/22.jpg', alt: 'Visual 22' },
    { src: '../images/visuals/24.jpg', alt: 'Visual 24' },
    { src: '../images/visuals/16.jpg', alt: 'Visual 16' },
    
  ];

  return (
    <div className="m-2">
    <Masonry
      items={items}
      config={{
        columns: [1, 2, 3],
        gap: [24, 12, 6],
        media: [640, 768, 1024],
      }}
      render={({ src, alt }, idx) => (
        <img 
          key={idx}
          src={src}
          alt={alt} 
          className="rounded"
          style={{ width: "100%", height: "auto" }} />
      )}
    />
    </div>
  )
}

