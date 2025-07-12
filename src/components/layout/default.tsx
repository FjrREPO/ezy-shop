'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Navbar } from './navbar'
import Footer from './footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const hideNavbar = pathname.startsWith('/auth')

  return (
    <div className='flex-1 min-h-screen w-screen'>
      {!hideNavbar && <Navbar />}
      {children}
      <Footer />
    </div>
  )
}
