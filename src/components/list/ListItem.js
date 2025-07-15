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
        className="flex flex-col md:flex-row items-start md:items-center justify-between py-3 rounded -mx-4 px-4 md:hover:bg-slate-50 md:hover:border-l md:hover:border-r"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="md:group-hover:[&>*]:hover mb-2 md:mb-0">
          <Title 
            image={image} 
            title={title} 
            isExternal={isExternal} 
            isHovered={isHovered && window.innerWidth >= 768}  
          />
        </div>
        <div className="md:group-hover:[&>*]:hover">
          <SubText 
            primaryText={primaryText} 
            secondaryText={secondaryText}
            isHovered={isHovered && window.innerWidth >= 768}
          />
        </div>
      </div>
    </Link>
  );
};

export default ListItem;