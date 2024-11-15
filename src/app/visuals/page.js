"use client";
import { Masonry } from "react-plock";

export default function Visuals() {
  const items = [
    { src: '../images/visuals/1.jpg', alt: 'Visual 1' },
    { src: '../images/visuals/2.jpg', alt: 'Visual 2' },
    { src: '../images/visuals/3.jpg', alt: 'Visual 3' },
    { src: '../images/visuals/4.jpg', alt: 'Visual 4' },
    { src: '../images/visuals/5.jpg', alt: 'Visual 5' },
    { src: '../images/visuals/6.jpg', alt: 'Visual 6' },
    { src: '../images/visuals/7.jpg', alt: 'Visual 7' },
    { src: '../images/visuals/8.jpg', alt: 'Visual 8' },
    { src: '../images/visuals/9.jpg', alt: 'Visual 9' },
    { src: '../images/visuals/10.jpg', alt: 'Visual 10' },
    { src: '../images/visuals/11.jpg', alt: 'Visual 11' },
    { src: '../images/visuals/12.jpg', alt: 'Visual 12' },
    { src: '../images/visuals/13.jpg', alt: 'Visual 13' },
    { src: '../images/visuals/14.jpg', alt: 'Visual 14' },
    { src: '../images/visuals/15.jpg', alt: 'Visual 15' },
    { src: '../images/visuals/16.jpg', alt: 'Visual 16' },
    { src: '../images/visuals/17.jpg', alt: 'Visual 17' },
    { src: '../images/visuals/18.jpg', alt: 'Visual 18' },
    { src: '../images/visuals/19.jpg', alt: 'Visual 19' },
    { src: '../images/visuals/20.jpg', alt: 'Visual 20' },
    { src: '../images/visuals/21.jpg', alt: 'Visual 21' },
    { src: '../images/visuals/22.jpg', alt: 'Visual 22' },
    { src: '../images/visuals/23.jpg', alt: 'Visual 23' },
    { src: '../images/visuals/24.jpg', alt: 'Visual 24' },
    { src: '../images/visuals/25.jpg', alt: 'Visual 25' },
    { src: '../images/visuals/26.jpg', alt: 'Visual 26' },
    { src: '../images/visuals/27.jpg', alt: 'Visual 27' },
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

