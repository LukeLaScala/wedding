'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { Container } from "@/components/Container"
import { FadeIn } from "@/components/FadeIn"
import { ReactNode } from 'react'
import Image from 'next/image'

// Piper and Luke's Atlanta hotspots
const hotspots = [
  {
    id: 1,
    name: "Henri's Bakery",
    description: "One of Atlanta's best and most historic bakeries! Located right in the heart of Buckhead, this spot is conveniently close to all the wedding festivities. It's the perfect place to stop for breakfast, lunch, or an afternoon pick-me-up.",
    link: "https://www.henrisbakery.com/",
    x: 8.1, // percentage from left
    y: 9.8, // percentage from top
  },
  {
    id: 2,
    name: "Jeni's Ice Cream",
    description: "Our favorite spot for ice cream! Try Piper's Pick: Gooey Butter Cake + Buttercream Birthday Cake, or Luke's Pick: Brambleberry Crisp + Honey Vanilla Bean. There are countless Jeni's located around Atlanta.",
    link: "https://jenis.com/blogs/scoop-shops/atlanta-ga",
    x: 38.3,
    y: 7.2,
  },
  {
    id: 3,
    name: "Bobby Jones Golf Course",
    description: "Bobby Jones is where we went on our very first official date! You can play a quick 9-hole round of golf, enjoy tennis/pickleball, or take a 2-mile walk around the course - it's Piper's favorite place to walk with friends!",
    link: "https://www.bobbyjonesgc.com/",
    x: 61.3,
    y: 10.5,
  },
  {
    id: 4,
    name: "Georgia Institute of Technology",
    description: "Go Jackets! Georgia Tech is our alma mater and holds so many great memories for us. We highly recommend strolling through the stunning, historic campus, especially the central Tech Green area. Look for the East Architecture building - that's where we took Art History together (a class Luke took for 'fun' because he had a crush on Piper…)",
    link: "https://map.gatech.edu/?id=82#!ct/15646,94021,94024,94025,94026?s/",
    x: 90,
    y: 22.4,
  },
  {
    id: 5,
    name: "The Varsity",
    description: "What'll Ya Have? You can't visit Atlanta without stopping by The Varsity, the world's largest drive-in restaurant! This iconic, historical fast-food joint has been serving up famous chili dogs, onion rings, and frosted orange shakes since 1928. Pro tip: Try an 'FO' (Frosted Orange - a must-try!) and a 'Naked Dog' (plain hot dog in a bun).",
    link: "https://thevarsity.com/",
    x: 78.1,
    y: 52.4,
  },
  {
    id: 6,
    name: "Fox Theatre",
    description: "Located in Midtown, the Fox Theatre is arguably the most beautiful venue in the city. Originally a magnificent movie palace built in the 1920s, it now hosts Broadway tours, concerts, and comedy shows. Luke used to live right across the street, so he and Piper would often grab last-minute tickets for whatever was playing!",
    link: "https://www.foxtheatre.org/",
    x: 77.4,
    y: 70.3,
  },
  {
    id: 7,
    name: "Georgia Aquarium",
    description: "Home of the famous whale shark, the Georgia Aquarium is the largest aquarium in the United States! Piper also interned here in the Research and Conservation Department during her ~marine biology era~ in college!",
    link: "https://www.georgiaaquarium.org/",
    x: 69,
    y: 88.5,
  },
  {
    id: 8,
    name: "Forza Storico",
    description: "If you're looking for amazing Italian food in a beautiful atmosphere, look no further! Forza Storico is Piper's absolute favorite restaurant in Atlanta where she and Luke have spent countless date nights. Piper's go-to: cacio e pepe and an espresso martini! Reservations are recommended for weekend dinners.",
    link: "https://forzastorico.com/",
    x: 32.7,
    y: 83,
  },
  {
    id: 9,
    name: "Piedmont Park",
    description: "Piedmont Park will always hold a special place in our hearts! It was where we would go on countless 'not-date' walks just the two of us back in college. This beautiful green space in the heart of Midtown is a peaceful oasis in the city. We highly recommend visiting the beautiful ponds and walking trails.",
    link: "https://piedmontpark.org/",
    x: 24,
    y: 80.5,
  },
  {
    id: 10,
    name: "Atlanta Botanical Gardens",
    description: "WHERE WE GOT ENGAGED! 💍 The Atlanta Botanical Garden, located next to Piedmont Park, is a must-see! Visit the Cascade Gardens and see the iconic Earth Goddess, stroll beneath the trees on the elevated Canopy Walk, and enjoy massive seasonal displays. Be sure to visit the Japanese Gardens to see where Luke proposed to Piper!",
    link: "https://atlantabg.org/",
    x: 23.2,
    y: 58.6,
  },
  {
    id: 11,
    name: "Beltline/Ponce",
    description: "This is our favorite place to spend a Saturday with friends! The Beltline is a fantastic converted railway line that's now an expansive trail perfect for walking, jogging, or biking. Our favorite stops along the Eastside Trail include Ladybird, New Realm Brewery, and Victory Sandwich Bar (be sure to try a whiskey-coke slushie). Don't miss Ponce City Market for great shopping and food!",
    link: "https://poncecitymarket.com/",
    x: 24.2,
    y: 42,
  },
  {
    id: 12,
    name: "The Local",
    description: "The Local is Luke's go-to wing spot in Atlanta and he swears they have the 'best wings ever.' It is famous for its relaxed, no-frills atmosphere, and late-night kitchen, but these wings are so good, they often sell out! For dinner, get there as soon as they open to avoid the wait.",
    link: "https://the-local.weeblyte.com/",
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
                            className="absolute bg-pink-600 border-1 border-white rounded-full shadow-lg hover:scale-125 transition-transform cursor-pointer flex items-center justify-center text-white font-semibold font-mono -translate-x-1/2 -translate-y-1/2"
                            style={{
                              left: `${hotspot.x}%`,
                              top: `${hotspot.y}%`,
                              width: 'clamp(16px, 1.7vw, 24px)',
                              height: 'clamp(16px, 1.7vw, 24px)',
                              fontSize: 'clamp(8px, 0.9vw, 11px)'
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
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {selectedHotspot.description}
                      </p>
                      {selectedHotspot.link && (
                        <a
                          href={selectedHotspot.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors font-medium"
                        >
                          Visit Website
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </a>
                      )}
                    </motion.div>
                  ) : (
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                        Piper and Luke&rsquo;s Guide to Atlanta!
                      </h3>
                      <div className="w-16 h-0.5 bg-gray-900 mb-6" />
                      <p className="text-gray-600 leading-relaxed mb-4">
                        We can&rsquo;t wait to welcome y&rsquo;all to Atlanta! We&rsquo;ve rounded up a list of the spots that mean the most to us - from where we had our first date to where we got engaged - we can&rsquo;t wait for you to explore our city!
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Click on the pink dots on the map to learn more about our favorite local spots and the stories behind them.
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
                    Piper and Luke&rsquo;s Guide to Atlanta!
                  </h3>
                  <div className="w-16 h-0.5 bg-gray-900 mb-4" />
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We can&rsquo;t wait to welcome y&rsquo;all to Atlanta! We&rsquo;ve rounded up a list of the spots that mean the most to us - from where we had our first date to where we got engaged.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Tap on the numbered pins to learn more about our favorite local spots and the stories behind them.
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
                          className="absolute bg-pink-600 border-1 border-white rounded-full shadow-lg hover:scale-125 transition-transform cursor-pointer flex items-center justify-center text-white font-semibold font-mono -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: `${hotspot.x}%`,
                            top: `${hotspot.y}%`,
                            width: 'clamp(18px, 4vw, 28px)',
                            height: 'clamp(18px, 4vw, 28px)',
                            fontSize: 'clamp(9px, 2vw, 12px)'
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
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {mobileSelectedHotspot.description}
                  </p>
                  {mobileSelectedHotspot.link && (
                    <a
                      href={mobileSelectedHotspot.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors font-medium"
                    >
                      Visit Website
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                  )}
                </>
              )}
            </DialogPanel>
          </div>
        </Dialog>
      </main>
    </>
  )
}