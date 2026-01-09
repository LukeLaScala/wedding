'use client'

import { motion } from 'framer-motion'
import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import Image from "next/image"

const hotels = [
  {
    description: "A luxury hotel located in the heart of Buckhead! It offers an upscale stay and is a quick walk to fabulous Atlanta restaurants and the iconic Shops of Buckhead, plus it's right down the street from Cherokee Town Club.",
    address: "88 West Paces Ferry Road NW, Atlanta, Georgia 30305",
    phone: "(404) 563-7900",
    website: "https://app.marriott.com/reslink?id=1763506003234&key=GRP&app=resvlink",
    deadline: "September 9th, 2026",
    image: "/st-regis.png"
  },
  {
    description: "A stylish hotel in the heart of Buckhead, the InterContinental is just a short stroll from Lenox Square and Phipps Plaza, and features a heated outdoor saltwater pool for year-round relaxation.",
    address: "3315 Peachtree Road NE, Atlanta, Georgia 30326",
    phone: "(404) 946-9000",
    website: "https://book.passkey.com/go/RackleyLaScalaWedding",
    deadline: "September 9th, 2026",
    image: "/intercontinental.png"
  },
  {
    description: "A stylish and unique boutique hotel in Buckhead, The Tess is the perfect trendy home base, featuring Tesserae, an amazing rooftop bar offering stunning Atlanta skyline views.",
    address: "415 East Paces Ferry Road NE, Atlanta, Georgia 30305",
    phone: "(470) 600-3510",
    website: "https://www.marriott.com/event-reservations/reservation-link.mi?id=1765310955385&key=GRP&app=resvlink&_branch_match_id=1487505302718294468&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywo0MtNLCrKzC8p0UvOz9UvSi3OyczLtgdK2ALZZSCOWmaKraG5mamxoYGlqamxhaladmqlrXtQgFpdUWpaKlB3Xnp8UlF%2BeXFqka1zRlF%2BbioARnGnCWAAAAA%3D",
    deadline: "September 9th, 2026",
    image: "/thetess.png"
  }
]


function AccommodationCard({ accommodation, index }: { accommodation: typeof hotels[0], index: number }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="h-[75px] mt-10 relative">
        <Image
          src={accommodation.image}
          alt={accommodation.address}
          fill
          className="object-contain"
        />
      </div>

      <div className="p-6">
        <div className="text-center text-gray-600 mb-4">
          <p className="leading-relaxed">
            {accommodation.description}
          </p>
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-2 text-sm text-gray-500 text-center">
          <p><span className="font-medium">Address:</span> {accommodation.address}</p>
          <p><span className="font-medium">Phone:</span> {accommodation.phone}</p>
          <p className="font-medium text-pink-600">
            <a href={accommodation.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Book Now - Room Block Link
            </a>
          </p>
          <p className="font-medium text-gray-700">Deadline: {accommodation.deadline}</p>
        </div>
      </div>
    </motion.div>
  )
}

function AccommodationSection({ title, accommodations }: { title: string, accommodations: typeof hotels }) {
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
            key={accommodation.address}
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

      <main className="bg-gray-50 min-h-screen border-y border-gray-200 border-dashed border-spacing-4">
        <Hero description={
          <>
            <p>We are absolutely thrilled to celebrate with you in Atlanta, Georgia! For our out-of-town guests, we have secured special room blocks at our favorite hotels located conveniently close to both Peachtree Road United Methodist Church and Cherokee Town Club.</p>
            <p className="mt-6">Please make sure to use the provided links below when booking to ensure you receive the special discounted rates offered for our wedding guests!</p>
          </>
        }>
          Where to Stay
        </Hero>
        <div className="relative bg-white border-t border-gray-200">
          {/* Background texture starting after headers - full screen width */}
          <div className="absolute top-64 inset-x-0 bottom-0 bg-[url('/texture.png')] bg-repeat opacity-20"></div>

          <Container className="relative z-10">
            <div className="py-20">

              <AccommodationSection
                title="Hotel Room Blocks"
                accommodations={hotels}
              />
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}

