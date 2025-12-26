'use client'

import { motion } from 'framer-motion'
import Header from "@/components/Header"
import { Container } from "@/components/Container"
import { FadeIn } from "@/components/FadeIn"
import { WeddingPartySection } from "@/components/WeddingPartySection"
import { ReactNode } from 'react'

const bridesmaids = [
  {
    name: "Pearson Rackley",
    title: "Maid of Honor",
    description: "Best friend since college and adventure companion"
  },
  {
    name: "Penelope LaScala",
    title: "Bridesmaid",
    description: "Sister and biggest supporter through everything"
  },
  {
    name: "Gracie Thompson",
    title: "Bridesmaid",
    description: "Childhood friend and partner in countless memories"
  },
  {
    name: "Kaitlyn Barton",
    title: "Bridesmaid",
    description: "Work bestie who became family"
  },
  {
    name: "Dee McMillan",
    title: "Bridesmaid",
    description: "Travel buddy and life-long confidante"
  },
  {
    name: "Hannah Johnson",
    title: "Bridesmaid",
    description: "Yoga partner and source of zen wisdom"
  },
  {
    name: "Tinsley LaScala",
    title: "Bridesmaid",
    description: "Book club friend and fellow wine enthusiast"
  },
  {
    name: "Madeleine Geller",
    title: "Bridesmaid",
    description: "Dance partner and celebration coordinator"
  }
]

const groomsmen = [
  {
    name: "Nicholas LaScala",
    title: "Best Man",
    description: "Brother from another mother and loyal friend"
  },
  {
    name: "Edward (teddy) LaScala",
    title: "Groomsman",
    description: "College roommate and adventure seeker"
  },
  {
    name: "William Formisano",
    title: "Groomsman",
    description: "Childhood friend and gaming companion"
  },
  {
    name: "Brady Rackley",
    title: "Groomsman",
    description: "Work buddy and fellow entrepreneur"
  },
  {
    name: "Matthew Brown",
    title: "Groomsman",
    description: "Sports teammate and competition partner"
  },
  {
    name: "Josh Bredbenner",
    title: "Groomsman",
    description: "Travel companion and photography enthusiast"
  },
  {
    name: "James Cipolletti",
    title: "Groomsman",
    description: "Music collaborator and creative inspiration"
  },
  {
    name: "Jarod LaFalce",
    title: "Groomsman",
    description: "Hiking buddy and nature adventure guide"
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
                    members={groomsmen}
                    imagePosition="right"
                  />
                </div>
                <div>
                  <WeddingPartySection
                    members={bridesmaids}
                    imagePosition="left"
                  />
                </div>
              </div>
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
                Thank You
              </h2>
              <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed">
                We are so grateful for each of these amazing people who have supported us,
                celebrated with us, and who will continue to be part of our story for years to come.
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