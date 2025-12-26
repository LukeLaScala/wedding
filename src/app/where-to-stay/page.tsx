'use client'

import { motion } from 'framer-motion'
import Header from "@/components/Header"
import { Container } from "@/components/Container"
import { FadeIn } from "@/components/FadeIn"
import { ReactNode } from 'react'

const hotels = [
  {
    name: "The Grand Hotel",
    type: "Luxury Hotel",
    description: "Elegant accommodations with full-service amenities and downtown location",
    distance: "0.5 miles from venue",
    phone: "(555) 123-4567",
    website: "www.grandhotel.com"
  },
  {
    name: "Comfort Inn & Suites",
    type: "Mid-Range Hotel",
    description: "Comfortable rooms with complimentary breakfast and pool access",
    distance: "2 miles from venue",
    phone: "(555) 234-5678",
    website: "www.comfortinn.com"
  },
  {
    name: "Historic Inn Downtown",
    type: "Boutique Inn",
    description: "Charming historic property with unique character and personalized service",
    distance: "0.8 miles from venue",
    phone: "(555) 345-6789",
    website: "www.historicinn.com"
  },
  {
    name: "Budget Lodge",
    type: "Economy Hotel",
    description: "Clean, affordable accommodations with basic amenities",
    distance: "3 miles from venue",
    phone: "(555) 456-7890",
    website: "www.budgetlodge.com"
  }
]


function AccommodationCard({ accommodation, index }: { accommodation: typeof hotels[0], index: number }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="text-center mb-4">
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
          {accommodation.name}
        </h3>
        <p className="text-sm font-medium text-pink-600 uppercase tracking-wide">
          {accommodation.type}
        </p>
      </div>

      <div className="text-center text-gray-600 mb-4">
        <p className="leading-relaxed">
          {accommodation.description}
        </p>
      </div>

      <div className="border-t border-gray-100 pt-4 space-y-2 text-sm text-gray-500 text-center">
        <p><span className="font-medium">Distance:</span> {accommodation.distance}</p>
        <p><span className="font-medium">Phone:</span> {accommodation.phone}</p>
        <p><span className="font-medium">Website:</span> {accommodation.website}</p>
      </div>
    </motion.div>
  )
}

function AccommodationSection({ title, accommodations }: { title: string, accommodations: any[] }) {
  return (
    <div className="mb-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <div className="w-16 h-0.5 bg-gray-900 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-12">
        {accommodations.map((accommodation, index) => (
          <AccommodationCard
            key={accommodation.name}
            accommodation={accommodation}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default function WhereToStayPage() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen border-y border-gray-200 border-dashed border-spacing-4">
        <Hero>Where to Stay</Hero>
        <div className="relative bg-white border-t border-gray-200">
          {/* Background texture starting after headers - full screen width */}
          <div className="absolute top-64 inset-x-0 bottom-0 bg-[url('/texture.png')] bg-repeat opacity-20"></div>

          <Container className="relative z-10">
            <div className="py-20">
              <AccommodationSection
                title="Recommended Hotels"
                accommodations={hotels}
              />
            </div>
          </Container>
        </div>

        <div className="bg-gray-50 border-t border-gray-200">
          <Container className="py-20">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Booking Information
              </h2>
              <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We recommend booking your accommodations as soon as possible to ensure availability.
                Room blocks may be available at select hotels - please mention our wedding when booking.
              </p>
              <p className="text-base text-gray-500">
                For questions about accommodations or transportation, please don't hesitate to reach out to us directly.
              </p>
            </motion.div>
          </Container>
        </div>
      </main>
    </>
  )
}

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