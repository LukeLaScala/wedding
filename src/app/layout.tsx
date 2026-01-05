import { type Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import InterstitialWrapper from '@/components/InterstitialWrapper'

const cormo = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Piper & Luke\'s Wedding',
    default: 'Piper & Luke\'s Wedding - October 10th, 2026 in Atlanta, Georgia',
  },
  description: 'Join us for our wedding celebration on October 10th, 2026 in Atlanta, Georgia',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white text-base antialiased">
      <body className={`flex min-h-full flex-col ${cormo.className}`}>
        <InterstitialWrapper>
          {children}
        </InterstitialWrapper>
      </body>
    </html>
  )
}
