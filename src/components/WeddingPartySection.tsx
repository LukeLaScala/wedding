'use client'

import { motion } from 'framer-motion'
import { WeddingPartyMember } from './WeddingPartyMember'
import { FadeInStagger } from './FadeIn'

interface WeddingPartyMember {
  name: string
  title: string
  description?: string
  image?: string
}

interface WeddingPartySectionProps {
  members: WeddingPartyMember[]
  imagePosition?: 'left' | 'right'
}

export function WeddingPartySection({
  members,
  imagePosition = 'left',
}: WeddingPartySectionProps) {
  return (
    <section className="">
      <FadeInStagger>
        <div className="grid grid-cols-1 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <WeddingPartyMember
                name={member.name}
                title={member.title}
                description={member.description}
                image={member.image}
                delay={index * 0.05}
                imagePosition={imagePosition}
              />
            </motion.div>
          ))}
        </div>
      </FadeInStagger>
    </section>
  )
}