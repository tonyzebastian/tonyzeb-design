"use client";

import { Masonry } from "react-plock";
import { useState } from "react";

export default function AI() {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const items = [
    { src: '../images/AI/bangalore auto.png', alt: 'beautiful bangalore auto' },
    { src: '../images/AI/cyclist.png', alt: 'genz cyclist' },
    { src: '../images/AI/elephant.png', alt: 'Cool elephant' },
    { src: '../images/AI/lady.png', alt: 'Power Lady' },
    { src: '../images/AI/zebra crossing.png', alt: 'Zebras crossing a zebra crossing' },
    { src: '../images/AI/writing_1.png', alt: 'motivation' },
    { src: '../images/AI/snakes.png', alt: 'motivation' },
    { src: '../images/AI/writing_2.png', alt: 'motivation' },
    { src: '../images/AI/figma.png', alt: 'motivation' }
  ];

  return (
    <>
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
              className="rounded cursor-pointer"
              style={{ width: "100%", height: "auto" }}
              onClick={() => setSelectedItem({ src, alt })}
            />
          )}
        />
      </div>

            {/* Spotlight Overlay */}
            {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div className="max-w-4xl w-full p-4 relative">
            <img 
              src={selectedItem.src} 
              alt={selectedItem.alt}
              className="w-full rounded-lg border-2 bg-white"
              style={{ maxHeight: "90vh", objectFit: "contain" }}
            />
            
            {/* Bottom Container for Alt Text and Close Button */}
            <div className="mt-4 flex justify-between items-center">
              {/* Alt Text */}
              <div className="text-white">
                <h2 className="font-Raleway font-medium text-lg">{selectedItem.alt}</h2>
              </div>
              
              {/* Close Button */}
              <button
                className="px-4 h-8 border font-Raleway border-white text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}