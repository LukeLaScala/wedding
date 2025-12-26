'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Header from "@/components/Header"
import { Container } from "@/components/Container"
import { FadeIn } from "@/components/FadeIn"
import { ReactNode } from 'react'

const storySegments = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "The Beginning",
    text: "It was a rainy Tuesday when our eyes first met across the crowded coffee shop. Neither of us knew that moment would change everything. The conversation flowed like we had known each other for years, and by the time we left, we both knew something special had begun."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "First Adventures",
    text: "From weekend hikes to late-night conversations, we discovered we shared the same dreams and the same terrible sense of humor. Every adventure became more meaningful when shared together, and we realized we were building something beautiful."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Growing Together",
    text: "Through every season, every challenge, and every celebration, we learned that we were better together than apart. Our love deepened with each passing day, and we knew we wanted to face whatever life brought us as a team."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "The Proposal",
    text: "On a sunset beach in Santorini, with the Aegean Sea as our witness, the question was finally asked and joyfully answered. It was the perfect moment in the perfect place, but most importantly, it was with the perfect person."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Forever Starts Now",
    text: "Today marks not an ending, but a beautiful beginning. Our greatest adventure awaits as we promise to love, honor, and cherish each other. Thank you for being here to witness the start of our forever."
  }
]

function ScrollLockedStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Calculate which section should be active based on scroll progress
  const sectionProgress = useTransform(scrollYProgress, [0, 1], [0, storySegments.length - 1])

  useEffect(() => {
    return sectionProgress.onChange((latest) => {
      const newSection = Math.round(latest)
      if (newSection !== currentSection && newSection >= 0 && newSection < storySegments.length) {
        setCurrentSection(newSection)
      }
    })
  }, [sectionProgress, currentSection])

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        height: `${storySegments.length * 100}vh`,
        scrollSnapType: 'y mandatory'
      }} // Make container tall enough for scroll
    >
      {/* Fixed viewport container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('/texture.png')] bg-repeat opacity-10" />

        {storySegments.map((segment, index) => (
          <StorySlide
            key={segment.id}
            segment={segment}
            index={index}
            isActive={currentSection === index}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* Invisible scroll snap points */}
      {storySegments.map((_, index) => (
        <div
          key={`snap-${index}`}
          className="absolute w-full"
          style={{
            height: '100vh',
            top: `${index * 100}vh`,
            scrollSnapAlign: 'start'
          }}
        />
      ))}
    </div>
  )
}

function StorySlide({
  segment,
  index,
  isActive,
  scrollProgress
}: {
  segment: typeof storySegments[0],
  index: number,
  isActive: boolean,
  scrollProgress: any
}) {
  const isEven = index % 2 === 0


  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">

          {/* Image */}
          <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${segment.image})` }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
            <motion.span
              className="inline-block text-sm uppercase tracking-[0.2em] text-pink-600 font-medium"
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Chapter {segment.id}
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight"
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {segment.title}
            </motion.h2>

            <motion.div
              className="h-0.5 bg-gray-900"
              animate={isActive ? { width: 64, opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {segment.text}
            </motion.p>
          </div>
        </div>
      </Container>
    </motion.div>
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

export default function OurStoryPage() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen border-y border-gray-200 border-dashed border-spacing-4">
        <Hero>Our Story</Hero>
        <div className="relative bg-white border-t border-gray-200">
          {/* Scroll-locked story experience */}
          <ScrollLockedStory />
        </div>
      </main>
    </>
  )
}