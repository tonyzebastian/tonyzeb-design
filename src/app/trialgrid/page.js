import MasonryGridLightbox from '@/components/ui/MasonryGridLigthbox';
import { galleryImagess } from './config';



export default function Abouts() {

    return (
        <div className="flex flex-col items-center justify-center mx-auto max-w-2xl px-8 mb-16">

            {/* Animation Section */}
            <section className="mb-8">
                <h4 className="mb-2">Animation</h4>
                <p className="text-slate-700 mb-4"> Trial</p>

                <MasonryGridLightbox
                    lightboxImages={galleryImagess.photography.lightbox}
                />
            </section>

         </div>
    );
}