
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import './App.css'
import { Environment, Grid, MeshReflectorMaterial, MeshRefractionMaterial, OrbitControls, Sky, useTexture } from '@react-three/drei'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Sphere from './components/Sphere';
import UI from './UI/General';
import Cube from './components/Cube';
import Cylinder from './components/Cylinder';
import LoadTextureSets from './components/LoadTextureSet';
function App() {




  return (
    <>
      <Canvas shadows camera={{ fov: 75, position: [0, 5, 5] }}>

        {/* OBJECTOS3D⁄ */}
        <Cube />
        <Sphere />
        <Cylinder />

        <LoadTextureSets />

        {/* <ambientLight intensity={0.2} /> */}

        <directionalLight
          castShadow
          position={[5, 10, 5]}
          intensity={0.5}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={1}
          shadow-camera-far={30}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[0, 5, 0]} intensity={5} />
        {/* <Environment preset="city" /> */}
        <mesh receiveShadow position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial color="white" />
        </mesh>
        {/* <Grid args={[100, 100]} /> */}
        <Sky />
        <OrbitControls />
      </Canvas>
      <UI />
    </>
  )
}

export default App
