'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FadeIn } from './FadeIn'

interface WeddingPartyMemberProps {
  name: string
  title: string
  description?: string
  image?: string
  delay?: number
  imagePosition?: 'left' | 'right'
}

export function WeddingPartyMember({
  name,
  title,
  description,
  image,
  delay = 0,
  imagePosition = 'left',
}: WeddingPartyMemberProps) {
  // Generate consistent placeholder based on name
  const getPlaceholderImage = (name: string) => {
    const seed = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    const imageId = 200 + (seed % 100) // Range from 200-299
    return `https://picsum.photos/seed/${seed}/192/192?random=${imageId}`
  }
  return (
    <FadeIn>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="group relative bg-white shadow-xl border-2 border-gray-200 rounded-lg"
      >
        <div className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:items-start items-center p-6`}>
          <div
            className="flex-shrink-0 h-48 w-48 overflow-hidden bg-gray-100 rounded-md"
          >
            <Image
              src={image || getPlaceholderImage(name)}
              alt={name}
              width={192}
              height={192}
              className="h-full w-full object-cover"
            />
          </div>

          <div className={`flex-1 ${imagePosition === 'right' ? 'lg:text-right' : 'text-left'}`}>
            <motion.h3
              className="text-2xl font-semibold text-gray-900 mb-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.2, duration: 0.4 }}
            >
              {name}
            </motion.h3>

            <motion.p
              className="text-sm font-medium text-gray-600 mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3, duration: 0.4 }}
            >
              {title}
            </motion.p>

            {description && (
              <motion.p
                className="text-xs text-gray-500 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.4, duration: 0.4 }}
              >
                {description}
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </FadeIn>
  )
}