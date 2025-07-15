'use client'

import { useState } from 'react';
import Title from './Title';
import SubText from './SubText';
import Link from 'next/link';

const ListItem = ({ 
  image, 
  title, 
  isExternal, 
  primaryText, 
  secondaryText,
  href 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block"
    >
      <div 
        className="flex items-center justify-between py-3 rounded group -mx-4 px-4 hover:bg-slate-50 "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="group-hover:[&>*]:hover">
          <Title 
            image={image} 
            title={title} 
            isExternal={isExternal} 
            isHovered={isHovered}  
          />
        </div>
        <div className="group-hover:[&>*]:hover">
          <SubText 
            primaryText={primaryText} 
            secondaryText={secondaryText}
            isHovered={isHovered}
          />
        </div>
      </div>
    </Link>
  );
};

export default ListItem;