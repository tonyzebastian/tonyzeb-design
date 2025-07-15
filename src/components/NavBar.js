'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { LinearBlur } from 'progressive-blur'

export default function NavBar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Craft', href: '/craft' },
    { name: 'Visuals', href: '/visuals' },
    { name: 'About', href: '/about' },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="sticky bottom-0 pt-2 pb-6 z-10 flex items-center justify-center"
      style={{ 
      paddingTop: '10px',
      marginTop: '-10px' 
    }}>

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

      <nav className="flex justify-center  overflow-x-auto whitespace-nowrap">
        <div className="flex bg-tony_BG-200 p-1 border border-tony_stroke-200 rounded-full shadow-lg">
          
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center justify-center px-4 py-2 rounded-full font-Raleway text-sm font-normal
                  transition-colors duration-200 leading-4 hover:text-tony_text-200
                  ${isActive ? 'bg-tony_BG-100 text-tony_accent-100' : 'text-tony_text-300'}
                `}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}