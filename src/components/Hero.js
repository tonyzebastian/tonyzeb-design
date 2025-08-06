import { bio } from '@/lib/content';
import { FlickeringGrid } from './ui/flickering-grid';

export default function Hero() {
  return (
    <div className="hero-gradient min-h-[754px] 2xl:min-h-[1100px] flex items-center justify-center relative rounded-b-3xl overflow-hidden">
      {/* FlickeringGrid Background */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="size-full"
          squareSize={4}
          gridGap={6}
          color="#92400E"
          maxOpacity={0.1}
          flickerChance={0.1}
        />
      </div>
      
      <div className="max-w-[862px] 2xl:max-w-[1200px] w-full flex flex-col items-center gap-12 2xl:gap-16 relative z-10">
        
        {/* Video/Image Container */}
        <div className="w-full h-[485px] 2xl:h-[600px] bg-white/50 rounded-[26px] p-2 flex items-center justify-center">
          <div className="w-full h-full bg-white rounded-[20px] flex items-center justify-center">
            <div className="w-[416px] h-[416px] rounded-lg overflow-hidden">
              <img 
                src="/hero.gif" 
                alt="Tony Sebastian"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-2 w-full">
          <h1 className="font-serif text-3xl text-center text-slate-900">
            Hello! I am Tony, a software designer.
          </h1>
          <div className="max-w-[612px] w-full">
            <p className="font-sans text-base text-slate-800 text-center leading-relaxed">
              {bio.intro}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}