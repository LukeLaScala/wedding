import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about Piper and Luke\'s wedding celebration on October 10th, 2026 in Atlanta, Georgia.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}