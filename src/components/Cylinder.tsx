import { MeshReflectorMaterial } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useCylinderStore } from '../store/useCylinderStore'

export default function Cylinder() {
    const meshRef = useRef<THREE.Mesh>(null)
    const [isFlipping, setIsFlipping] = useState(false)
    const [, setRotationProgress] = useState(0)
    const { position, rotation, setRotation, setPosition } = useCylinderStore();
    useFrame((_, delta) => {
        if (isFlipping && meshRef.current) {
          const speed = 4 // radianes por segundo
          const step = speed * delta
      
          // 1. Mover la posición como antes
          const [x, y, z] = position
          setPosition([x , y + 0.01, z])
      
          // 2. Rotar en X para hacer el backflip
          const [rx, ry, rz] = rotation
          setRotation([rx + step, ry, rz])
            
          // 3. Controlar la duración del flip
          setRotationProgress((prev) => {
            const updated = prev + step
            if (updated >= Math.PI * 2) {
              setIsFlipping(false)
              return 0
            }
            return updated
          })
        }
      })
      

    const startFlip = () => {
        if (!isFlipping) {
            setIsFlipping(true)
            setRotationProgress(0)
        }
    }

    return (
        <mesh ref={meshRef} position={position} rotation={rotation}onClick={startFlip}>
            <cylinderGeometry />
            <MeshReflectorMaterial color="hotpink" />
        </mesh>
    )
}
