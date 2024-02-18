'use client'

import Image from 'next/image.js'
import Link from 'next/link.js'
import Card from '../components/Card'
import ThreeDType from '../components/ThreeDType'
import ScrollType from '../components/ScrollType'
import { useEffect, useState } from 'react';
import Projects from '../components/Projects';
import Descript from '../components/descript';

import Preloader from '../components/Preloader'
import { hotjar } from 'react-hotjar'




export default function Home() {

    useEffect(() => {
      hotjar.initialize(3747144, 6)
    }, [])

    useEffect( () => {
      (
        async () => {
    const LocomotiveScroll = (await import('locomotive-scroll')).default;
    const locomotiveScroll = new LocomotiveScroll();
  }
    )()

}, [])
    

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (

    <main className="flex flex-col relative min-h-screen bg-slate-300 overflow-hidden">
      {
        isLoading && <Preloader />
      }
      <div className='absolute pointer-events-none w-full h-screen flex flex-col-reverse p-2 '>
        <ScrollType />
      </div>

      <ThreeDType className="z-10"/>

      <Descript />
      <Projects />
    </main>


  )
}
