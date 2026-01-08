'use client'

import { Container } from "@/components/Container"
import { FadeIn } from "@/components/FadeIn"
import Header from "@/components/Header"
import { WeddingPartySection } from "@/components/WeddingPartySection"
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const bridesmaids = [
  {
    name: "Pearson Rackley",
    title: "Maid of Honor",
    image: "/pearson.jpg",
  },
  {
    name: "Penelope LaScala",
    title: "Bridesmaid",
    image: "/penelope.jpg",
  },
  {
    name: "Tinsley LaScala",
    title: "Bridesmaid",
    image: "/tinsley.jpg",
  },
  {
    name: "Dee McMillan",
    title: "Bridesmaid",
    image: "/dee.JPG",
  },
  {
    name: "Gracie Thompson",
    title: "Bridesmaid",
    image: "/gracie.jpg",
  },
  {
    name: "Hannah Johnson",
    title: "Bridesmaid",
    image: "/hannah.jpg",
  },
  {
    name: "Katelyn Barton",
    title: "Bridesmaid",
    image: "/katelyn.JPG",
  },
  {
    name: "Madeleine Geller",
    title: "Bridesmaid",
    image: "/madeleine.JPG",
  }
]

const groomsmen = [
  {
    name: "Nicholas LaScala",
    title: "Best Man",
    image: "/nick.jpg",
  },
  {
    name: "Edward LaScala",
    title: "Groomsman",
    image: "/edward.jpg",
  },
  {
    name: "Brady Rackley",
    title: "Groomsman",
    image: "/brady.JPG",
  },
  {
    name: "James Cipolletti",
    title: "Groomsman",
    image: "/james.JPG",
  },
  {
    name: "Jarod LaFalce",
    title: "Groomsman",
    image: "/jarod.JPG",
  },
  {
    name: "Josh Bredbenner",
    title: "Groomsman",
    image: "/josh.jpg",
  },
  {
    name: "Matthew Brown",
    title: "Groomsman",
    image: "/matthew.JPG",
  },
  {
    name: "William Formisano",
    title: "Groomsman",
    image: "/will.jpg",
  }
]

export default function WeddingPartyPage() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen border-y  border-gray-200 border-dashed border-spacing-4">
        <Hero>Our Wedding Party</Hero>
        <div className="relative bg-white border-t border-gray-200">
          {/* Background texture starting after headers - full screen width */}
          <div className="absolute top-64 inset-x-0 bottom-0 bg-[url('/texture.png')] bg-repeat opacity-20"></div>

          <Container className="relative z-10">
            <div className="py-20">
              {/* Mobile Layout - Stacked */}
              <div className="block lg:hidden space-y-20">
                <WeddingPartySection
                  members={bridesmaids}
                />
                <WeddingPartySection
                  members={groomsmen}
                />
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-48 relative">
                <div>
                  <WeddingPartySection
                    members={bridesmaids}
                    imagePosition="right"
                  />
                </div>
                <div>
                  <WeddingPartySection
                    members={groomsmen}
                    imagePosition="left"
                  />
                </div>
              </div>
            </div>
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