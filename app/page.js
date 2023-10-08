'use client'

import Image from 'next/image.js'
import Link from 'next/link.js'
import Card from '../components/Card'
import ThreeDType from '../components/ThreeDType'
import ScrollType from '../components/ScrollType'
import { useState } from 'react';
import Projects from '../components/Projects';
import Descript from '../components/descript';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';





export default function Home() {


  const [modal, setModal] = useState({ active: false, index: 0 })
  return (

    <main className="flex flex-col relative bg-slate-300 overflow-hidden">

      <div className='absolute w-full h-screen z-30 flex flex-col-reverse p-2 '>
        <ScrollType />
      </div>

      <ThreeDType />

      <Descript />
      <Projects />
      <SlidingImages />
        <Contact />
    </main>


  )
}
