'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

interface HeroProps {
  children: ReactNode
  description?: string | ReactNode
}

export function Hero({ children, description }: HeroProps) {
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

            {description && (
              <motion.div
                className="text-lg md:text-xl text-gray-600 leading-relaxed mt-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {typeof description === 'string'
                  ? description.split('\n\n').map((paragraph, index) => (
                      <p key={index} className={index > 0 ? 'mt-6' : ''}>
                        {paragraph}
                      </p>
                    ))
                  : description
                }
              </motion.div>
            )}
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}