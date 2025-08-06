'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock'
import { LinearBlur } from 'progressive-blur'

export default function DockNavigation() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { 
      title: 'Home', 
      href: '/', 
      icon: <img src="/images/nav/home.png" alt="Home" className='h-full w-full object-contain' />
    },
    { 
      title: 'Craft', 
      href: '/craft', 
      icon: <img src="/images/nav/craft.png" alt="Craft" className='h-full w-full object-contain' />
    },

    { 
      title: 'About', 
      href: '/about', 
      icon: <img src="/images/nav/about.png" alt="About" className='h-full w-full object-contain' />
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className='fixed bottom-0 left-1/2 -translate-x-1/2 w-full'>

    <LinearBlur
      side="bottom"
      steps={8}
      strength={64}
      falloffPercentage={100}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
      }}
    />

    <div className='pb-4 '>
      <Dock className='items-end pb-3 z-50 '>
        {navItems.map((item, idx) => {
          const isActive = pathname === item.href
          
          return (
            <DockItem
              key={idx}
              className={`aspect-square rounded-full`}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>
                <Link href={item.href}>
                  {item.icon}
                </Link>
              </DockIcon>
            </DockItem>
          )
        })}
      </Dock>
    </div>
  </div>
  )
}