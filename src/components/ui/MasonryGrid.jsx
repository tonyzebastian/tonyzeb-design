"use client";

import { Masonry } from "react-plock";
import { useState } from "react";

export default function MasonryGrid({ items, renderSpotlight = true, className = "m-2" }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const isVideo = (src) => {
    return /\.(mp4|mov|webm|ogg|avi)$/i.test(src);
  };

  const renderMediaItem = (item, idx) => {
    const baseClassName = "rounded cursor-pointer hover:scale-[99%] hover:rounded-3xl transition-all ease-in-out";
    const specialClassName = item.specialStyling ? "p-2 shadow" : "";
    
    const commonProps = {
      key: idx,
      className: `${baseClassName} ${specialClassName}`,
      style: { width: "100%", height: "auto" },
      onClick: () => renderSpotlight && setSelectedItem(item)
    };

    if (isVideo(item.src)) {
      return (
        <video
          {...commonProps}
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
        />
      );
    }

    return (
      <img 
        {...commonProps}
        src={item.src}
        alt={item.alt}
      />
    );
  };

  return (
    <>
      <div className={className}>
        <Masonry
          items={items}
          config={{
            columns: [1, 2, 3],
            gap: [24, 12, 6],
            media: [640, 768, 1024],
          }}
          render={renderMediaItem}
        />
      </div>

      {/* Spotlight Overlay */}
      {renderSpotlight && selectedItem && (
        <div 
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="max-w-5xl w-full p-4 relative flex flex-col md:flex-row gap-4 bg-slate-50 rounded-xl items-start"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Container */}
            <div className="flex-1 flex justify-center">
              {isVideo(selectedItem.src) ? (
                <video
                  src={selectedItem.src}
                  className="rounded-xl bg-slate-50 max-w-full"
                  style={{ maxHeight: "90vh", objectFit: "contain" }}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.alt}
                  className="rounded-xl bg-slate-50 max-w-full"
                  style={{ maxHeight: "90vh", objectFit: "contain" }}
                />
              )}
            </div>

            {/* Content Container */}
            <div className="w-full md:w-96 flex flex-col flex-shrink-0">
              <h2 className="mt-1 mb-4">{selectedItem.alt}</h2>
              
              {selectedItem.description && (
                <p className="mb-8 mr-4">
                  {selectedItem.description}
                </p>
              )}

              <div className="mt-auto flex gap-4">
                {selectedItem.projectLink && (
                  <a
                    href={selectedItem.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 font-sans text-sm flex items-center tracking-wide bg-slate-700 rounded hover:bg-slate-600 text-slate-50 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Details
                  </a>
                )}
                <button
                  className="px-6 py-2 font-sans text-sm flex items-center tracking-wide border border-slate-300 rounded hover:bg-slate-100 transition-colors"
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
        </div>
      )}
    </>
  );
}