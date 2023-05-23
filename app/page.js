'use client'

import Image from 'next/image.js'
import Link from 'next/link.js'
import Card from '../components/Card'
import ThreeDType from '../components/ThreeDType'
import { motion } from 'framer-motion'
import { TypingText, TitleText, TextMove, TestMove } from '../components/CustomAni'
import ProjectScroll from '../section/ProjectScroll'




export default function Home() {
  return (

    <main className="flex flex-col relative">
<div className='absolute w-full h-screen z-30 flex flex-col-reverse p-2 z'>
        <h1 className='text-right font-semibold text-7xl'><span>DIGITAL DESIGNER</span><br/>& DEVELOPER</h1>
        </div>



      <ThreeDType />


       <div className='absolute w-full h-screen z-30 flex flex-col-reverse p-2 z'>
        <h1 className='text-right font-semibold text-7xl'><span>DIGITAL DESIGNER</span><br/>& DEVELOPER</h1>
        </div>
      <ProjectScroll/>
      {/* <div className='px-4 w-full relative'>
      <div className=' bg-gray-600  p-8 py-12 grid md:grid-cols-1 w-full relative gap-4 z-10 rounded-t-2xl'>
      <Card bgimg = "bg-gpaamain" title="GPAA" colour="text-cyan-200"/>
      <Card bgimg = "bg-larosa" title="Higher Capital" colour="text-green-200"/>
      <Card bgimg = "bg-larosa" title="La Rosa" colour="text-blue-200"/>

      </div>
      </div>
      <div class="bg" className=''></div> */}
    </main>
    
   
  )
}
