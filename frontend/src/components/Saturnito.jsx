import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF(
    '/models/la_vaca_saturno_saturnito_3d_model_free_download.glb'
  )
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0001_La_Vaca_0.geometry}
          material={materials.La_Vaca}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_La_Vaca_0.geometry}
          material={materials.La_Vaca}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_La_Vaca_0.geometry}
          material={materials.La_Vaca}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_La_Vaca_0.geometry}
          material={materials.La_Vaca}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_La_Vaca_0.geometry}
          material={materials.La_Vaca}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0002_La_Vaca_0.geometry}
          material={materials.La_Vaca}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_La_Vaca_0.geometry}
          material={materials.La_Vaca}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/la_vaca_saturno_saturnito_3d_model_free_download.glb')
