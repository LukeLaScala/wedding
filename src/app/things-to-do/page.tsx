'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Header from "@/components/Header"
import { Container } from "@/components/Container"
import { FadeIn } from "@/components/FadeIn"
import { ReactNode } from 'react'
import Image from 'next/image'

// Hotspot data - we'll define positions later
const hotspots = [
  {
    id: 1,
    name: "Sample Location 1",
    description: "Description for location 1",
    x: 8.1, // percentage from left
    y: 9.8, // percentage from top
  },
  {
    id: 2,
    name: "Sample Location 2",
    description: "Description for location 2",
    x: 38.3,
    y: 7.2,
  },
  {
    id: 3,
    name: "Sample Location 3",
    description: "Description for location 3",
    x: 61.3,
    y: 10.5,
  },
  {
    id: 4,
    name: "Sample Location 4",
    description: "Description for location 4",
    x: 90,
    y: 22.4,
  },
  {
    id: 5,
    name: "Sample Location 5",
    description: "Description for location 5",
    x: 78.1,
    y: 52.4,
  },
  {
    id: 6,
    name: "Sample Location 6",
    description: "Description for location 6",
    x: 77.4,
    y: 70.3,
  },
  {
    id: 7,
    name: "Sample Location 7",
    description: "Description for location 7",
    x: 69,
    y: 88.5,
  },
  {
    id: 8,
    name: "Sample Location 8",
    description: "Description for location 8",
    x: 33.3,
    y: 83,
  },
  {
    id: 9,
    name: "Sample Location 9",
    description: "Description for location 9",
    x: 24,
    y: 80.5,
  },
  {
    id: 10,
    name: "Sample Location 10",
    description: "Description for location 10",
    x: 23.2,
    y: 58.6,
  },
  {
    id: 11,
    name: "Sample Location 11",
    description: "Description for location 11",
    x: 24.2,
    y: 42,
  },
  {
    id: 12,
    name: "Sample Location 12",
    description: "Description for location 12",
    x: 7.9,
    y: 25.3,
  }
]

export function Hero({ children }: { children: ReactNode }) {
  return (
    <div className="py-20">
      <Container>
        <FadeIn>
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {children}
            </motion.h1>

            <motion.div
              className="w-32 h-0.5 bg-gray-900 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

export default function ThingsToDoPage() {
  const [selectedHotspot, setSelectedHotspot] = useState<typeof hotspots[0] | null>(null)
  const [mobileDialogOpen, setMobileDialogOpen] = useState(false)
  const [mobileSelectedHotspot, setMobileSelectedHotspot] = useState<typeof hotspots[0] | null>(null)

  const handleMobileHotspotClick = (hotspot: typeof hotspots[0]) => {
    setMobileSelectedHotspot(hotspot)
    setMobileDialogOpen(true)
  }

  // // Development helper for positioning hotspots
  // const handleMapClick = async (e: React.MouseEvent<HTMLDivElement>) => {
  //   const rect = e.currentTarget.getBoundingClientRect()
  //   const x = ((e.clientX - rect.left) / rect.width) * 100
  //   const y = ((e.clientY - rect.top) / rect.height) * 100

  //   const coordsText = `x: ${Math.round(x * 10) / 10},
  //   y: ${Math.round(y * 10) / 10},`

  //   try {
  //     await navigator.clipboard.writeText(coordsText)
  //     alert(`Coordinates copied to clipboard!\n${coordsText}`)
  //   } catch (err) {
  //     // Fallback if clipboard API fails
  //     console.log(`Hotspot coordinates: x: ${Math.round(x * 10) / 10}, y: ${Math.round(y * 10) / 10}`)
  //     alert(`Clipboard failed, check console for coordinates`)
  //   }
  // }

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen border-y border-gray-200 border-dashed border-spacing-4">
        <Hero>Things to Do</Hero>

        <div className="relative bg-white border-t border-gray-200">
          {/* Background texture */}
          <div className="absolute top-0 inset-x-0 bottom-0 bg-[url('/texture.png')] bg-repeat opacity-20"></div>

          <Container className="relative z-10">
            <div className="py-20">
              {/* Desktop Layout - Map + Sidebar */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12">
                {/* Map Section */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <Image
                          src="/map.jpeg"
                          alt="Local area map"
                          width={800}
                          height={600}
                          className="w-full h-auto"
                        />
                      </motion.div>

                      {/* Hotspots */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute inset-0"
                      >
                        {hotspots.map((hotspot) => (
                          <motion.button
                            key={hotspot.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.8,
                              ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            className="absolute w-6 h-6 bg-pink-600 border-1 border-white rounded-full shadow-lg hover:scale-125 transition-transform cursor-pointer flex items-center justify-center text-white text-xs font-semibold font-mono -translate-x-1/2 -translate-y-1/2"
                            style={{
                              left: `${hotspot.x}%`,
                              top: `${hotspot.y}%`,
                            }}
                            onClick={() => setSelectedHotspot(hotspot)}
                          >
                            {hotspot.id}
                          </motion.button>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Panel */}
                <div className="space-y-6">
                  {selectedHotspot ? (
                    <motion.div
                      key={selectedHotspot.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
                    >
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                        {selectedHotspot.name}
                      </h3>
                      <div className="w-16 h-0.5 bg-gray-900 mb-6" />
                      <p className="text-gray-600 leading-relaxed">
                        {selectedHotspot.description}
                      </p>
                    </motion.div>
                  ) : (
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                        Explore the Area
                      </h3>
                      <div className="w-16 h-0.5 bg-gray-900 mb-6" />
                      <p className="text-gray-600 leading-relaxed">
                        Click on the pink dots on the map to learn more about local attractions and activities.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="block lg:hidden space-y-8">
                {/* Mobile intro section */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                    Explore the Area
                  </h3>
                  <div className="w-16 h-0.5 bg-gray-900 mb-4" />
                  <p className="text-gray-600 leading-relaxed">
                    Tap on the numbered pins on the map to learn more about local attractions and activities.
                  </p>
                </div>

                {/* Mobile map */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Image
                        src="/map.jpeg"
                        alt="Local area map"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </motion.div>

                    {/* Mobile hotspots */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute inset-0"
                    >
                      {hotspots.map((hotspot) => (
                        <motion.button
                          key={hotspot.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          className="absolute w-6 h-6 bg-pink-600 border-1 border-white rounded-full shadow-lg hover:scale-125 transition-transform cursor-pointer flex items-center justify-center text-white text-xs font-semibold font-mono -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: `${hotspot.x}%`,
                            top: `${hotspot.y}%`,
                          }}
                          onClick={() => handleMobileHotspotClick(hotspot)}
                        >
                          {hotspot.id}
                        </motion.button>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Mobile Dialog */}
        <Dialog open={mobileDialogOpen} onClose={setMobileDialogOpen} className="relative z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <DialogTitle className="text-lg font-serif font-bold text-gray-900">
                  {mobileSelectedHotspot?.name}
                </DialogTitle>
                <button
                  onClick={() => setMobileDialogOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <XMarkIcon className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {mobileSelectedHotspot && (
                <>
                  <div className="w-16 h-0.5 bg-gray-900 mb-4" />
                  <p className="text-gray-600 leading-relaxed">
                    {mobileSelectedHotspot.description}
                  </p>
                </>
              )}
            </DialogPanel>
          </div>
        </Dialog>
      </main>
    </>
  )
}