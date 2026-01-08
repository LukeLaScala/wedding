'use client'

import { Container } from "@/components/Container"
import { FadeIn } from "@/components/FadeIn"
import Header from "@/components/Header"
import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'

const storySegments = [
  {
    id: 1,
    image: "/snorkeling.JPG",
    title: "Snorkel Buddies!",
    text: "We met for the first time on Georgia Tech's study abroad program in Australia & New Zealand. When on the Great Barrier Reef, \"we\" planned a 5am sunrise snorkel that Luke thought was a little ambitious... until Piper showed up with goggles and fins, forever calling Luke her snorkel buddy!"
  },
  {
    id: 2,
    image: "/formal.JPG",
    title: "Senior Year @ Georgia Tech",
    text: "After Covid cut our study abroad short, we made our way back to Georgia Tech's campus about a year and a half later and became close friends. We spent our senior year going to football games, walking through Piedmont Park, and taking Art History II together (Luke's favorite class of all time!). In March of 2022, we finally started dating, confirming the long-running suspicion that we were more than just friends."
  },
  {
    id: 3,
    image: "/newyork.JPG",
    title: "New York City",
    text: "After graduation, Luke moved to New York City to work at Snapchat while Piper stayed at Tech for a master's in Biology. Long distance meant FaceTimes and even better visits: Christmastime in NYC, dinner at our favorite restaurant TAO, pasta-making nights, and an unreasonable number of hot dogs and pretzels."
  },
  {
    id: 10,
    image: "/atlanta.JPG",
    title: "Atlanta",
    text: "In September 2023, Luke moved back to Atlanta, and life got wonderfully amazing. They have spent their time together in Atlanta trying new restaurants and, of course, more Piedmont Park walks."
  },
  {
    id: 4,
    image: "/skiing.JPG",
    title: "Hitting the Slopes",
    text: "Living in Atlanta meant plenty of trips back to New York to visit Luke’s family–often filled with days spent skiing in the Adirondacks or Mont Tremblant. Piper quickly learned to love the cold!"
  },
  // {
  //   id: 5,
  //   image: "/ballpit.JPG",
  //   title: "",
  //   text: "Today marks not an ending, but a beautiful beginning. Our greatest adventure awaits as we promise to love, honor, and cherish each other. Thank you for being here to witness the start of our forever."
  // },
  {
    id: 6,
    image: "/proposal.JPG",
    title: "The Proposal",
    text: "On June 3rd, 2025, Luke proposed to Piper at the Atlanta Botanical Garden - a sweet nod to his parents' engagement at the New York Botanical Garden. Piper said YES! We celebrated with both of our families at a surprise engagement party pulled off by Piper's Mom and Sister... with only 5 days' notice!"
  },
  {
    id: 7,
    image: "/engagement.JPG",
    title: "Cheers to Forever!",
    text: "We are having the best time planning Our Wedding and an even better time dreaming about the marriage that follows. We can't wait to celebrate with all of you on October 10th, 2026!"
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
          <div className={`relative py-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="inline-block overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                src={segment.image}
                alt={segment.title}
                className="w-full h-auto max-h-[60vh] block"
                style={{ maxHeight: '60vh' }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
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