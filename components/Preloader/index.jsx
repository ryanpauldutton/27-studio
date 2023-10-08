"use client"

import animationData from '../../public/load-bar.json'
import LottieAnimation from '../LottieAnimation'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    loading && (
      <div className="preloader">
        <LottieAnimation animationData={animationData} />
      </div>
    )
  )
}
