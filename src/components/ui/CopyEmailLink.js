'use client';

import { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import HighlightLink from './HighlightLink';

export default function CopyEmailLink() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('tonyzeb.design@gmail.com');
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 1500);
  };

  return (
    <Popover className="relative inline-block">
      <span>
        <HighlightLink 
          href="#" 
          onClick={handleCopy}
        >
          tonyzeb.design@gmail.com
        </HighlightLink>
      </span>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1">
          <span className="inline-block bg-slate-900 text-white text-sm px-2 py-1 rounded">
            Copied!
          </span>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}