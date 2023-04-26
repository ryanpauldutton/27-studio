'use client'

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function ModelTwo(props) {

    // const meshRef = useRef<Mesh>(null);

    // useFrame(() => {
    //     if (!meshRef.current) {
    //         return;
    //     }
    
    //     meshRef.current.rotation.x += 0.01;
    //     meshRef.current.rotation.y += 0.1
    // });

  const { nodes, materials } = useGLTF("/273dwebmodel.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["Material.001"]}
        position={[2.58, 5.05, -1.41]}
        rotation={[1.55, 0, 0]}
        scale={200.5}
      />
    </group>
  );
}

useGLTF.preload("/273dwebmodel.gltf");

export default ModelTwo;