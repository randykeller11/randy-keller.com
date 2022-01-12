/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/tourHouse.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[735.37, -1.25, -715.87]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-735.37, -715.87, 1.25]}>
              <mesh geometry={nodes.Object001_Object001_mtl_0.geometry} material={materials.Object001_mtl} />
            </group>
          </group>
          <group position={[735.37, -1.25, -715.87]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-735.37, -715.87, 1.25]}>
              <mesh geometry={nodes.Object002_Object002_mtl_0.geometry} material={materials.Object002_mtl} />
            </group>
          </group>
          <group position={[735.37, -1.25, -715.87]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-735.37, -715.87, 1.25]}>
              <mesh geometry={nodes.Object003_Object003_mtl_0.geometry} material={materials.Object003_mtl} />
            </group>
          </group>
          <group position={[735.37, -1.25, -715.87]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-735.37, -715.87, 1.25]}>
              <mesh geometry={nodes.Object004_Object004_mtl_0.geometry} material={materials.Object004_mtl} />
            </group>
          </group>
          <group position={[735.37, -1.25, -715.87]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-735.37, -715.87, 1.25]}>
              <mesh
                geometry={nodes.vitre_BATIMENUISERIE_VITRE_0.geometry}
                material={materials['BATI.MENUISERIE_VITRE']}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tourHouse.glb')
