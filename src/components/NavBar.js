import React from 'react';
import Link from 'next/link';
import { Home, Tangent, FlaskConical, Camera, Signature, CircleUser } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
    { icon: Home, label: 'Home', link: '/' },
    { icon: Tangent, label: 'Craft', link: '/craft' },
    { icon: FlaskConical, label: 'Projects', link: '/projects' },
    { icon: Camera, label: 'Visuals', link: '/visuals' },
    { icon: Signature, label: 'Musings', link: '/musings' },
    { icon: CircleUser, label: 'About', link: '/about' },
  ];


const NavBar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full shadow-lg px-6 py-3 flex items-center space-x-4 border border-gray-200 dark:border-gray-700">
      <TooltipProvider>
        {navItems.map((item) => (
          <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                    <Link
                        key={item.label}
                        href={item.link}
                        className={cn(
                            "p-2 rounded-full transition-colors duration-200",
                            "hover:bg-gray-100 dark:hover:bg-gray-700",
                            "focus:outline-none focus:ring-2 focus:ring-primary"
                        )}
                        >
                        <item.icon className="w-5 h-5" />
                        <span className="sr-only">{item.label}</span>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                <p>{item.label}</p>
                </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </nav>
  );
};

export default NavBar;