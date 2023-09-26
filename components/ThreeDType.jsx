'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import ModelTwo from './ModelTwo'

export default function ThreeDType() {
    return(
<Canvas
      className='pointer-events-none'
        orthographic camera={{ position: [5, -5, 10], zoom: 20 }}
        size={[`1920px`, `1080px`]}
        style={{ width: `100%`, height: `100vh`, position: `relative` }}
        shadows
      >
        <Suspense fallback={null}>
          <ModelTwo />
          <OrbitControls makeDefault />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    )
}