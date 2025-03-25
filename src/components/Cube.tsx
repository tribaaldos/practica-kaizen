import { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";

import { useCubeStore } from "../store/useCubeStore";
import { MeshReflectorMaterial } from "@react-three/drei";
export default function Cube() {

    const color = useCubeStore((state) => state.color);
    const isVisible = useCubeStore((state) => state.isVisible);
    const cuboRef = useRef<THREE.Mesh>(null);
    const speed = useCubeStore((state) => state.speedRotation);
    const setColor = useCubeStore((state) => state.setColor);
    useFrame(() => {
        if (cuboRef.current) {
            cuboRef.current.rotation.y += speed;

        }
    })
    function changeColor() {
        const RandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
        const newColor = RandomColor();
        setColor(newColor); // <-- Use Zustand!
      }
      
    return (
        <mesh onClick={changeColor} ref={cuboRef} position={[0, 1.5, 0]}>
            <boxGeometry />
            <MeshReflectorMaterial blur={[2,2]}color={color} visible={isVisible} />
        </mesh>
    )
}