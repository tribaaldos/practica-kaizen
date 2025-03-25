// components/LoadTextureSets.tsx
import { useEffect } from 'react'
import { useTorusStore } from '../store/useTorusStore'
import { useTexture } from '@react-three/drei'

export default function LoadTextureSets() {
  const setTextures = useTorusStore((state) => state.setTextures)

  const textureSet1 = useTexture({
    map: 'Sphere/color.png',
    aoMap: 'Sphere/ao.png',
    normalMap: 'Sphere/normal.png',
    roughnessMap: 'Sphere/roughness.png',
    bumpMap: 'Sphere/bumpMap.png',
    metalnessMap: 'Sphere/metalness.png',
  })

  const textureSet2 = useTexture({
    map: 'Sphere2/color.jpg',
    aoMap: 'Sphere2/ao.jpg',
    normalMap: 'Sphere2/normal.png',
    roughnessMap: 'Sphere2/roughness.jpg',
    // bumpMap: 'Sphere2/bumpMap.jpg',
    metalnessMap: 'Sphere2/metalness.jpg',

  })

  useEffect(() => {
    // Guardamos ambos sets de textura en Zustand
    setTextures({ set1: textureSet1, set2: textureSet2 })
  }, [textureSet1, textureSet2, setTextures])

  return null
}
