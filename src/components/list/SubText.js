'use client'

import { useState, useRef, useEffect } from 'react';


const SubText = ({ primaryText, secondaryText, isHovered }) => {
  const [width, setWidth] = useState('auto');
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth);
    }
  }, [primaryText]);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(isHovered ? containerRef.current.scrollWidth : textRef.current.offsetWidth);
    }
  }, [isHovered]);

  return (
    <div 
      ref={containerRef}
      className="overflow-hidden transition-all duration-300"
      style={{ width }}
    >
      <div className="flex items-center whitespace-nowrap">
        <h5 ref={textRef} className="text-sm">
          {primaryText}
        </h5>
        {secondaryText && (
          <>
            <span className={`mx-4 text-sm text-slate-500 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              |
            </span>
            <h5 className="text-sm">
              {secondaryText}
            </h5>
          </>
        )}
      </div>
    </div>
  );
};

export default SubText;