'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
    { name: 'Motion', href: '/craft' },
    { name: 'AI', href: '/AI' },
    { name: 'Snaps', href: '/visuals' },
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

      <nav className="flex justify-center whitespace-nowrap">
        <div className="flex bg-white p-1 gap-2 border border-stone-200 rounded-full shadow-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center justify-center gap-2 px-3 py-2 rounded-full font-sans text-sm
                  transition-colors duration-200 hover:bg-blue-50 hover:text-blue-800
                  ${isActive ? 'bg-blue-100 text-slate-900 font-medium' : 'text-slate-800 font-normal'}
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
