import { create } from 'zustand'

type CylinderState = {
  color: string
  position: [number, number, number]
  rotation: [number, number, number]
  setPosition: (pos: [number, number, number]) => void
  setRotation: (rot: [number, number, number]) => void
  resetCylinder: () => void
}

export const useCylinderStore = create<CylinderState>((set) => ({
  color: 'red',
  position: [2.5, 1.5, 0],
  rotation: [0, 0, 0],

  setPosition: (pos) => set({ position: pos }),
  setRotation: (rot) => set({ rotation: rot }),

  resetCylinder: () =>
    set({
      color: 'red',
      position: [2.5, 1.5, 0],
      rotation: [0, 0, 0],
    }),
}))
