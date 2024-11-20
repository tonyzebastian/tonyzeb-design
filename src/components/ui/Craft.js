"use client";
import { Masonry } from "react-plock";

export default function Crafts() {
  
  const items = [
    { src: '../images/Craft/1.gif', alt: 'Burn out' },
    { src: '../images/Craft/2.gif', alt: 'Decision Making' },
    { src: '../images/Craft/4.gif', alt: 'Graph' },
    { src: '../images/Craft/5.gif', alt: 'Postman 1' },
    { src: '../images/Craft/6.gif', alt: 'Postman 2' },
    { src: '../images/Craft/3.gif', alt: 'Profile' },
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

