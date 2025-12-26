'use client'

import { useState, useEffect, ReactNode } from 'react'
import Interstitial from './Interstitial'

interface InterstitialWrapperProps {
  children: ReactNode
}

export default function InterstitialWrapper({ children }: InterstitialWrapperProps) {
  const [showContent, setShowContent] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Check if user has visited in the last 24 hours
    const lastVisit = localStorage.getItem('weddingLastVisit')
    const now = Date.now()
    const twentyFourHours = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

    if (lastVisit && (now - parseInt(lastVisit)) < twentyFourHours) {
      setShowContent(true)
    }
    setIsChecking(false)
  }, [])

  const handleEnterSite = () => {
    localStorage.setItem('weddingLastVisit', Date.now().toString())
    setShowContent(true)
  }

  // Show loading state while checking
  if (isChecking) {
    return (
      <div className="fixed inset-0 z-50 bg-gray-50">
        <div className="absolute inset-0 bg-[url('/texture.png')] bg-repeat opacity-10" />
      </div>
    )
  }

  return (
    <>
      {/* Main content - only show if user has entered */}
      {showContent && children}

      {/* Interstitial - only show if user hasn't entered */}
      {!showContent && <Interstitial onEnter={handleEnterSite} />}
    </>
  )
}