'use client';

import { useState } from 'react';
import Image from 'next/image';
import MasonryGrid from './MasonryGrid';
import { PlusSquare } from 'react-feather';

export default function ImageGridWithLightbox({ gridImages, lightboxImages = [], title }) {
    const [showMasonryLightbox, setShowMasonryLightbox] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    
    // Determine if we should show the "View More" card and lightbox
    const shouldShowViewMore = lightboxImages.length > 0 && gridImages.length === 5;
    
    // Determine grid columns based on number of images
    const getGridClass = () => {
        const totalItems = shouldShowViewMore ? gridImages.length + 1 : gridImages.length;
        if (totalItems <= 3) return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
        if (totalItems <= 4) return 'grid-cols-1 sm:grid-cols-2';
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handleCloseSingleImageLightbox = () => {
        setSelectedImageIndex(null);
    };

    return (
        <>
            {/* Main Grid */}
            <div className={`grid gap-4 mb-4 ${getGridClass()}`}>
                {gridImages.map((src, index) => (
                    <div
                        key={index}
                        className="relative aspect-square rounded overflow-hidden bg-slate-100 transition-all duration-300 hover:scale-[96%] hover:rounded-xl shadow group cursor-pointer"
                        onClick={() => handleImageClick(index)}
                    >
                        <Image
                            src={src}
                            alt={`${title} image ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                    </div>
                ))}
                
                {/* View More Card */}
                {shouldShowViewMore && (
                    <div 
                        className="relative aspect-square rounded overflow-hidden bg-white cursor-pointer transition-all duration-300 hover:scale-[96%] hover:rounded-xl flex items-center justify-center shadow p-2"
                        onClick={() => setShowMasonryLightbox(true)}
                    >
                        <div className="text-center bg-slate-50 cursor-pointer hover:bg-slate-100 w-full h-full items-center justify-center flex flex-col rounded hover:rounded-xl">
                            <PlusSquare size={24} className="text-slate-700" />
                            <p className="text-sm text-slate-700 mt-2 font-sans tracking-wide">{lightboxImages.length} More</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Single Image Lightbox */}
            {selectedImageIndex !== null && (
                <div 
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center z-50"
                    onClick={handleCloseSingleImageLightbox}
                >
                    <div 
                        className="relative w-full max-w-4xl h-[70vh] mx-4"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Image Container */}
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                src={gridImages[selectedImageIndex]}
                                alt={`${title} image ${selectedImageIndex + 1}`}
                                fill
                                className="object-contain rounded"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Close Button - Now outside the image container */}
                    <div className="mt-6">
                        <button
                            className="px-6 py-2 bg-white rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
                            onClick={handleCloseSingleImageLightbox}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Masonry Lightbox */}
            {showMasonryLightbox && shouldShowViewMore && (
                <div 
                    className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setShowMasonryLightbox(false)}
                >
                    <div className="max-w-5xl w-full max-h-[90vh] overflow-y-auto p-4 bg-white rounded-xl" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-sans">{title} Gallery</h2>
                            <button
                                className="px-4 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-100"
                                onClick={() => setShowMasonryLightbox(false)}
                            >
                                Close
                            </button>
                        </div>
                        <MasonryGrid 
                            items={lightboxImages.map(src => ({ src, alt: title }))} 
                        />
                    </div>
                </div>
            )}
        </>
    );
}