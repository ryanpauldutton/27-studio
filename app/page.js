'use client'

import Image from 'next/image.js'
import Link from 'next/link.js'
import Card from '@/components/Card'
import ThreeDType from '@/components/ThreeDType'
import { motion } from 'framer-motion'
import { TypingText, TitleText, TextMove, TestMove } from '@/components/CustomAni'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'



export default function Home() {
  return (
<main>
    
    <main className="flex flex-col relative">



      <div className='absolute w-full h-screen z-30 flex flex-col-reverse p-2 z'>
        <h1 className='text-right font-semibold text-5xl'><span>DIGITAL DESIGNER</span><br/>& DEVELOPER</h1>
        </div>



      <ThreeDType />
      <div className='p-2 grid md:grid-cols-2 w-full relative gap-4 z-10'>
      <Card bgimg = "bg-larosa" title="La Rosa"/>
      <Card bgimg = "bg-larosa" title="La Rosa"/>
      <Card bgimg = "bg-larosa" title="La Rosa"/>

      </div>
      <div class="bg" className=''></div>
    </main>
    </main>
  )
}
