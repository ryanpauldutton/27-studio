'use client'

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";


function ModelTwo(props) {

  const ref = useRef()

  // useFrame((_, delta) => {
  //   ref.current.rotation.x += 0.5 * delta
  // })


  const { nodes, materials } = useGLTF("/273dwebmodel.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["Material.001"]}
        position={[0, 0, 0]}
        rotation={[89.5, 0.1, -0.1]}
        scale={170.5}
      />
    </group>
  );
}

useGLTF.preload("/273dwebmodel.gltf");

export default ModelTwo;