// components/UI.tsx
import { useCubeStore } from '../store/useCubeStore'
import { useCylinderStore } from '../store/useCylinderStore'
import { useTorusStore } from '../store/useTorusStore'
import './General.css'
export default function UI() {
  const color = useTorusStore((state) => state.color)
  const setColor = useTorusStore((state) => state.setColor)
  const applyTextureSet = useTorusStore((state) => state.applyTextureSet)
  const { resetCube, isVisible, toggle, speedRotation, setSpeedRotation } = useCubeStore()
  const { resetCylinder } = useCylinderStore();
  const { resetSphere } = useTorusStore();
  return (
    <div className="general">
      <label>
        Color:
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <br />
      <br />
      <button onClick={() => applyTextureSet('set1')}>Textura Set 1</button>
      <button onClick={() => applyTextureSet('set2')}>Textura Set 2</button>
      <button onClick={toggle}>
        {isVisible ? 'Ocultar Cubo' : 'Mostrar Cubo'}
      </button>
      <div style={{ marginTop: '1rem' }}>
        <label>Velocidad de rotación: {speedRotation.toFixed(3)}</label>
        <input
          type="range"
          min="0"
          max="0.1"
          step="0.001"
          value={speedRotation}
          onChange={(e) => setSpeedRotation(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={() => { resetCylinder(); resetCube(); resetSphere()}}>Reset</button>
    </div>
  )
}
