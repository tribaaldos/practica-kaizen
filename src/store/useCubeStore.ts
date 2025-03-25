
import { create } from 'zustand';

type CubeState = {
    color: string;
    isVisible: boolean;
    speedRotation: number;
    toggle: () => void;
    setColor: (newColor: string) => void;
    setSpeedRotation: (newSpeed: number) => void;
    resetCube: () => void;
}

export const useCubeStore = create<CubeState>((set) => ({
    color: 'red',
    isVisible: true,
    speedRotation: 0.01,
    setColor: (newColor) => set({ color: newColor }),
    toggle: () => set((state) => ({ isVisible: !state.isVisible })),
    setSpeedRotation: (newSpeed) => set({ speedRotation: newSpeed }),
    resetCube: () => set({ color: 'red', isVisible: true, speedRotation: 0.01 })
}))