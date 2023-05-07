import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export default function LottieAnimation({ animationData }) {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    })
  }, [animationData])

  return <div ref={container}
  style={{ width: '200px', height: '200px' }}
   />
}
