'use client';
import MasonryGrid from './MasonryGrid';

export default function MasonryGridLightbox({lightboxImages = [], height, hoverEffects = true}) {
    return (
        <>
            {/* Main Grid */}
            <div className="relative rounded-xl overflow-hidden">
                <div 
                    className="w-full h-full overflow-y-auto scrollbar-hide rounded-xl"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        maxHeight: `${height}px`
                    }}
                >
                    <MasonryGrid 
                        items={lightboxImages.map(src => ({ src }))} 
                        spotlight={{ enabled: false }}
                        className=""
                        hoverEffects={hoverEffects}
                        config={{
                            columns: [1, 2, 2],
                            gap: [24, 12, 6],
                            media: [640, 768, 1024],
                        }}
                    />
                </div>
            </div>
        </>
    );
}