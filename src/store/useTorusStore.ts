import { create } from 'zustand'
import { Texture } from 'three'

type TextureSet = Partial<Record<string, Texture>>

type TorusState = {
  color: string
  scale: number
  args: [number, number, number]
  textures: Record<string, TextureSet>
  currentTextures: TextureSet;
  setColor: (newColor: string) => void;
  setScale: (newScale: number) => void;
  setTextures: (sets: Record<string, TextureSet>) => void;
  applyTextureSet: (key: string) => void;
  resetSphere: () => void;
}

export const useTorusStore = create<TorusState>((set, get) => ({
  color: '#ffffff',
  scale: 1,
  args: [ 1, 36, 36],
  textures: {},
  currentTextures: {},
  setColor: (newColor) => set({ color: newColor }),
  setScale: (newScale) => set({ scale: newScale }),
  setTextures: (sets) => set({ textures: sets, currentTextures: sets['set1'] || {} }),
  applyTextureSet: (key) => {
    const textures = get().textures[key]
    if (textures) {
      set({ currentTextures: textures })
    }
  },
  resetSphere: () => {
    const textures = get().textures
    const set1 = textures['set1'] || {}
    set({
      color: '#ffffff',
      scale: 1,
      currentTextures: set1,
      args: [ 1, 36, 36]

    })
  }
  
}))
