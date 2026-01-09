'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface InterstitialProps {
  onEnter: () => void
}

export default function Interstitial({ onEnter }: InterstitialProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-gray-50 flex items-center justify-center"
    >
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('/texture.png')] bg-repeat opacity-10" />

        <div className="relative z-10 text-center max-w-4xl mx-auto p-6">
          {/* Wedding title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8 text-3xl font-serif font-bold text-gray-900"
          >
            Piper and Luke&rsquo;s Wedding
          </motion.h1>

          {/* Save the Date Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-12"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/save-the-date.jpg"
                alt="Save the Date"
                width={1200}
                height={1600}
                className="w-full h-auto max-w-2xl mx-auto"
              />
            </div>
          </motion.div>

          {/* Enter Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <button
              onClick={onEnter}
              className="cursor-pointer px-12 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Enter
            </button>
          </motion.div>
        </div>
    </motion.div>
  )
}