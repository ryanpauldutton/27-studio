'use client'

import { Vector3 } from 'three'
import { Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'


import ModelTwo from './ModelTwo'

const vec = new Vector3()

function Rig() {
  return useFrame(({ camera, mouse }) => {
    vec.set(mouse.x * 1.5, mouse.y * 2, camera.position.z)
    camera.position.lerp(vec, 0.1)
    camera.lookAt(0, 0, 0)
  })
}


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
         
          <Environment preset="city" />
          <Rig />
        </Suspense>
      </Canvas>
    )
}