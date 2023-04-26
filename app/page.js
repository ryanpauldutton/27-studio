'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment,OrbitControls } from '@react-three/drei'
import Navbar from '../components/NavBar.jsx'

import ModelTwo from '../components/ModelTwo'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <h1 className='absolute mt-10 text-7xl right-0 left-0 '>studio</h1>
       <Canvas
       orthographic camera={{ position: [5, -5, 10], zoom: 20 }}
    size={[`1920px`,`1080px`]}
    style={{width: `100%`, height: `100vh`, position: `relative` }}
    shadows
>
        <Suspense fallback={null}>
          <ModelTwo />
          <OrbitControls makeDefault />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </main>
  )
}
