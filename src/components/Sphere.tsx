import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTorusStore } from '../store/useTorusStore'

export default function Sphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  const color = useTorusStore((state) => state.color)
  const textures = useTorusStore((state) => state.currentTextures)
  const targetScale = useTorusStore((state) => state.scale)
  const setScale = useTorusStore((state) => state.setScale)
  const args = useTorusStore((state) => state.args)

  const [isAnimating, setIsAnimating] = useState(false)

  // Reset animación si cambia el valor del target
  useEffect(() => {
    if (meshRef.current) {
      setIsAnimating(true)
    }
  }, [targetScale])

  useFrame(() => {
    if (meshRef.current && isAnimating) {
      const current = meshRef.current.scale.x
      const newScale = THREE.MathUtils.lerp(current, targetScale, 0.1)
      meshRef.current.scale.setScalar(newScale)

      if (Math.abs(newScale - targetScale) < 0.01) {
        meshRef.current.scale.setScalar(targetScale)
        setIsAnimating(false)
      }
    }
  })

  const makeItBigger = () => {
    setScale(targetScale + 1)
  }

  return (
    <mesh
      ref={meshRef}
      onClick={makeItBigger}
      position={[-2.5, 1.5, 0]}
      receiveShadow
      castShadow
    >
      <sphereGeometry args={args} />
      <meshStandardMaterial {...textures} color={color} metalness={1} />
    </mesh>
  )
}
