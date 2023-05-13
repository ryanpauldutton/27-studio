'use client'

import Image from 'next/image.js'
import Link from 'next/link.js'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'


import ModelTwo from '../components/ModelTwo'

export default function Home() {
  return (
    <main className="flex flex-col relative">



      <div className='absolute w-full h-screen z-30 flex flex-col-reverse p-2'>
        <h1 className='text-right font-semibold text-5xl'>& DEVELOPMENT</h1>
        <h1 className='text-right font-semibold text-5xl'>CREATIVE DESIGN REMEMBER TO LOOK AT WEB UNLOCKED YT</h1></div>



      <Canvas
        orthographic camera={{ position: [5, -5, 10], zoom: 20 }}
        size={[`1920px`, `1080px`]}
        style={{ width: `100%`, height: `100vh`, position: `relative` }}
        shadows
      >
        <Suspense fallback={null}>
          <ModelTwo />
          <OrbitControls makeDefault />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
      <div className='p-2 h-[50vh] flex w-full relative gap-4'>
        <Link className='text-3xl relative w-1/2 overflow-hidden' href='/projects/one.j'>
          <div className='h-full flex relative'>
            <Image
              src="/gpaa-main.jpg"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className='z-10 object-cover'
            />
            <h3 className='z-20 text-violet-700'>Project One</h3>
          </div>
        </Link>

        <Link className='text-3xl relative w-1/2 overflow-hidden' href='/projects/'>
          <div className='h-full flex relative'>
            <Image
              src="/public/larosa-main.jpg"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt='Picture of La Rosa Logo'
              className='z-10 object-cover hover:scale-[1.1] transition-all'
            />
            <h3 className='p-2 z-20 text-violet-700'>Project Two</h3>
          </div>
        </Link>

      </div>
    </main>
  )
}
