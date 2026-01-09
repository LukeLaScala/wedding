'use client'

import { Container } from "@/components/Container"
import { MapPinIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Image from "next/image"


function WeddingDetails() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      {/* Ceremony */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="mb-6">
          <Image
            src="/ceremony.PNG"
            alt="Peachtree Road United Methodist Church"
            width={400}
            height={300}
            className="w-3/4 h-auto object-contain rounded-lg mb-6 mx-auto"
          />
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            Ceremony
          </h3>
          <div className="w-16 h-0.5 bg-pink-600 mx-auto"></div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="font-medium text-gray-600 mb-2">Peachtree Road United Methodist Church</p>
            <div className="flex items-center justify-center text-gray-600">
              <MapPinIcon className="h-5 w-5 mr-2 text-pink-600" />
              <p className="text-sm">3180 Peachtree Rd NE, Atlanta, GA 30305</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Reception */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="mb-6">
          <Image
            src="/reception.PNG"
            alt="Cherokee Town & Country Club"
            width={400}
            height={300}
            className="w-3/4 h-auto object-contain rounded-lg mb-6 mx-auto"
          />
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            Reception
          </h3>
          <div className="w-16 h-0.5 bg-pink-600 mx-auto"></div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="font-medium text-gray-600 mb-2">Cherokee Town & Country Club</p>
            <div className="flex items-center justify-center text-gray-600">
              <MapPinIcon className="h-5 w-5 mr-2 text-pink-600" />
              <p className="text-sm">155 W Paces Ferry Rd NW, Atlanta, GA 30305</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function AttireInfo() {
  return (
    <motion.div
      className="rounded-2xl p-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* <UserGroupIcon className="h-8 w-8 text-pink-600 mx-auto mb-4" /> */}
      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
        Black Tie Attire
      </h3>
      <div className="max-w-2xl mx-auto text-gray-600 space-y-2">
        <p><strong>Gentlemen:</strong> Tuxedos or formal dinner jackets</p>
        <p><strong>Ladies:</strong> Floor-length gowns or equally formal attire</p>
      </div>
    </motion.div>
  )
}

function TransportationInfo() {
  return (
    <motion.div
      className="rounded-2xl p-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
        Getting There
      </h3>
      <div className="max-w-2xl mx-auto text-gray-600">
        <p>
          Valet will be provided at Cherokee Town Club; however, we strongly encourage guests
          to Uber/Lyft so you can relax and enjoy the evening safely.
        </p>
      </div>
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <>

      <main className="bg-white min-h-screen md:border-t md:border-gray-200 md:border-dashed md:border-spacing-4">
        {/* Mobile image and text */}
        <div className="lg:hidden">
          <Image
            src="/homepage.jpeg"
            alt="Piper and Luke"
            width={800}
            height={600}
            priority
            className="w-full h-auto object-contain"
            style={{
              filter: 'brightness(0.9) contrast(1.1)'
            }}
          />
          <motion.div
            className="text-center text-gray-900 px-8 py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-black mb-6">
              Piper & Luke
            </h1>
            <div className="w-32 h-0.5 bg-gray-900 mb-6 mx-auto"></div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Saturday, October 10, 2026
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Atlanta, Georgia
            </p>
          </motion.div>
        </div>

        {/* Hero Container - Desktop only */}
        <div className="hidden lg:flex lg:flex-col lg:h-[calc(100vh-80px)] lg:items-center lg:justify-center px-0 lg:px-16 py-8">
          {/* Hero Section with Background Image */}
          <div className="relative lg:h-full w-full max-w-4xl overflow-hidden rounded-lg bg-white">
            <div className="relative w-full h-full">
              <Image
                src="/homepage.jpeg"
                alt="Piper and Luke"
                fill
                priority
                className="object-cover"
                style={{
                  filter: 'brightness(1) contrast(1.1)'
                }}
              />
            </div>
            {/* Text content overlay */}
            <div className="absolute inset-0 z-20 flex items-start justify-start h-full min-h-[500px]">
              <motion.div
                className="text-left text-white max-w-2xl mt-8 ml-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black mb-6 drop-shadow-2xl">
                  Piper & Luke
                </h1>
                <div className="w-32 h-0.5 bg-white mb-6 drop-shadow-lg"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-xl">
                  Saturday, October 10, 2026
                </h2>
                <p className="text-xl md:text-2xl text-white drop-shadow-xl">
                  Atlanta, Georgia
                </p>
              </motion.div>
            </div>

          </div>
          {/* Animated scroll indicator - below image */}
          <motion.div
            className="hidden lg:flex flex-col items-center text-gray-800 cursor-pointer py-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
          >
            <span className="text-sm font-medium mb-2">Wedding Details</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="w-8 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 12"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3l6 6 6-6" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
        {/* Wedding Details */}
        <div className="bg-white border-t border-gray-200">
          <Container className="py-20">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Wedding Day Details
              </h2>
              <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
            </motion.div>

            <div className="space-y-12">
              <WeddingDetails />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AttireInfo />
                <TransportationInfo />
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}