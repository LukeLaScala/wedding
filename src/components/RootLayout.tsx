'use client'

import { Footer } from '@/components/Footer'
import Header from './Header'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full flex-auto">{children}</main>
      <Footer />
    </>
  )
}
