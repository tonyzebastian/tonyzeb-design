'use client'

import { ArrowRight, ArrowUpRight } from 'react-feather';
import Image from 'next/image';
import VariableFontHoverByLetter from '@/components/fancy/text/variable-font-hover-by-letter';
import { useState } from 'react';

const Title = ({ image, title, isExternal, isHovered: parentIsHovered }) => {
  const [localIsHovered, setLocalIsHovered] = useState(false);
  const isHovered = parentIsHovered !== undefined ? parentIsHovered : localIsHovered;

  return (
    <div 
      className="flex items-center group"
      onMouseEnter={() => setLocalIsHovered(true)}
      onMouseLeave={() => setLocalIsHovered(false)}
    >
      {image && (
        <div className="mr-2 w-6 h-6 flex-shrink-0">
          <Image
            src={image}
            alt={`${title} icon`}
            width={24}
            height={24}
            className="object-contain filter drop-shadow-md"
          />
        </div>
      )}
      <h4>
        <VariableFontHoverByLetter
          label={title}
          staggerDuration={0.03}
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' -10"
          isHovered={isHovered}
        />
      </h4>
      <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isHovered ? 'w-6 ml-2' : 'w-0'}`}>
        {isExternal ? (
          <ArrowUpRight size={16} className="text-slate-500" />
        ) : (
          <ArrowRight size={16} className="text-slate-500" />
        )}
      </div>
    </div>
  );
};

export default Title;