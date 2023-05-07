"use client"
// "use client"
// // import animationData from '../animations/loader.json'
// // import LottieAnimation from './LottieAnimation'
// import { useEffect,useState } from 'react'

// export default function Preloader() {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false)
//     }, 2000)

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     loading && (
//       <div className="preloader fixed top-0 left-0 right-0 z-50 bg-slate-400 w-[100%] h-[100%]">
//         <h1 className='font'>Loading...</h1>
//       </div>
//     )
//   )
// }


import animationData from '../public/load-bar.json'
import LottieAnimation from './LottieAnimation'
import { useEffect,useState } from 'react'

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
        <LottieAnimation animationData={animationData}/>
      </div>
    )
  )
}
