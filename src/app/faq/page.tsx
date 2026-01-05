'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from "@/components/Header"
import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "When is the RSVP deadline?",
    answer: "We kindly request that you RSVP by September 10th, 2026. Please let us know by then so we can finalize our numbers and save a seat for you!"
  },
  {
    question: "How do I RSVP?",
    answer: "It's easy! You can RSVP right here on our website. Just click the \"RSVP\" tab in the menu to let us know if you can make it."
  },
  {
    question: "What time should I arrive at the ceremony?",
    answer: "Doors at Peachtree Road United Methodist Church will open at 4:00 PM. We kindly ask that all guests be seated no later than 4:20 PM, as the processional will begin promptly at 4:30 PM."
  },
  {
    question: "What is the dress code?",
    answer: "We are excited to celebrate in style! Our wedding is Black Tie. We encourage men to wear tuxedos and women to wear floor-length gowns. We can't wait to see everyone dressed to the nines!"
  },
  {
    question: "Will any events take place outdoors?",
    answer: "Both the ceremony and reception will be held indoors. However, guests are invited to access the lawn and terrace at the Club during cocktail hour to enjoy the October weather."
  },
  {
    question: "What weather should I expect?",
    answer: "October is our favorite month in Atlanta (which is exactly why we chose it)! You can expect beautiful fall weather, with highs around 75°F and evening lows dipping to 55°F."
  },
  {
    question: "Can I bring a plus one?",
    answer: "We are so excited to celebrate this day with our nearest and dearest! As we have a strict guest list to stay within our venue's capacity, we are only able to accommodate the guests specifically named on your invitation."
  },
  {
    question: "Are children welcome?",
    answer: "We love your little ones! However, due to space constraints, we respectfully request that only children named on the invitation attend. We hope that you enjoy a date night on us!"
  },
  {
    question: "Where should I park for the ceremony?",
    answer: "Ample parking is available in the parking lot at Peachtree Road United Methodist Church."
  },
  {
    question: "Where should I park for the reception?",
    answer: "Valet parking will be provided upon arrival at Cherokee Town Club. However, we strongly encourage using Uber or Lyft so you can relax and get home safely."
  },
  {
    question: "Do you have a hotel room block?",
    answer: "Yes! We have secured room blocks at three wonderful hotels nearby. Please visit our \"Where to Stay\" page for details and booking links."
  },
  {
    question: "What is the best airport to fly into?",
    answer: "We recommend flying into Hartsfield–Jackson Atlanta International Airport (ATL). It's the busiest airport in the world for a reason and it will get you straight to the fun!"
  },
  {
    question: "What if I have a dietary restriction or allergy?",
    answer: "We want everyone to have a safe and delicious meal! Please indicate any dietary restrictions or allergies when you RSVP online. We are more than happy to accommodate your needs with our catering team."
  },
  {
    question: "Can I take pictures during the ceremony?",
    answer: "As we are getting married in a place of worship, we kindly request that all phones be silenced and put away during the ceremony. We have an amazing photography team capturing every moment, and we promise to share those beautiful photos with you!"
  }
]

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border-b border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className="w-full py-6 px-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900 pr-4">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-6 px-6 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FAQPage() {
  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">
        <Hero description="We've gathered answers to some of the most common questions to help you prepare for Our Big Day! Should you have a question that isn't addressed here, please don't hesitate to contact us through the message button at the bottom of the page.">
          Frequently Asked Questions
        </Hero>

        <Container className="py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}