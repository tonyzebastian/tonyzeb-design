'use client';

import { useState } from 'react';
import Image from 'next/image';
import MasonryGrid from './MasonryGrid';
import { PlusSquare } from 'react-feather';
import { X } from "lucide-react";

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
                    className="fixed inset-0 bg-black/25 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={handleCloseSingleImageLightbox}
                >
                    <div 
                        className="relative w-full max-w-4xl h-[70vh] mx-4"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close Button - Top right of image container */}
                        <button
                            className="absolute -top-12 right-0 p-2 hover:bg-slate-900 bg-slate-600 rounded-full transition-colors z-10"
                            onClick={handleCloseSingleImageLightbox}
                        >
                            <X size={24} className="text-white" />
                        </button>

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
                </div>
            )}

            {/* Masonry Lightbox */}
            {showMasonryLightbox && shouldShowViewMore && (
                <div 
                    className="fixed inset-0 bg-black/25 backdrop-blur-sm flex flex-col items-center justify-center z-50"
                    onClick={() => setShowMasonryLightbox(false)}
                >
                        <div 
                            className="relative max-w-7xl w-full max-h-[85vh] bg-white rounded-xl p-2 mb-16 2xl:mb-0 2xl:max-w-screen-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Close Button - Top right side */}
                            <button
                                className="absolute top-0 -right-16 p-2 hover:bg-slate-900 bg-slate-600 rounded-full transition-colors z-10"
                                onClick={() => setShowMasonryLightbox(false)}
                            >
                                <X size={24} className="text-white" />
                            </button>
                            <div 
                                className="w-full h-full overflow-y-auto scrollbar-hide rounded-xl"
                                style={{
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                }}
                            >
                                <MasonryGrid 
                                    items={lightboxImages.map(src => ({ src, alt: title }))} 
                                    spotlight={{ enabled: false }}
                                    className=""
                                />
                            </div>
                        </div>
                </div>
            )}
        </>
    );
}