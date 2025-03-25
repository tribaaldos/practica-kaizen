# 🚀 Proyecto 3D Interactivo en React + Three.js

<div align="center">
  <img width="100%" alt="Demo del proyecto" src="https://github.com/user-attachments/assets/a3078475-9de2-4335-b282-955e14579a11" />
</div>

---

## 🧠 Stack Tecnológico

- 🧩 **Framework:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) + TypeScript
- 🧱 **3D Engine:** [Three.js](https://threejs.org/)
- 🎨 **Renderer:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- 🛠 **Utilidades 3D:** [Drei](https://github.com/pmndrs/drei)
- 🧠 **Store Reactiva:** [Zustand](https://github.com/pmndrs/zustand)

---

## 🎯 Objetivo del proyecto

Desarrollar una aplicación web con:

- Una **escena 3D interactiva** con animaciones, luces y texturas personalizadas.
- Un **HUD** (panel de control) integrado que permite modificar elementos de la escena en tiempo real.

---

## ⚙️ Instalación y ejecución

yarn
yarn run dev


La comunicación entre los elementos 3D y la UI se realiza a través de Zustand, una store global reactiva.
El HUD actualiza el estado global (color, visibilidad, velocidad...).
Los componentes 3D escuchan los cambios en tiempo real desde la store del zustand
y son acrualizados, se pueden tener acceso desde cualquier archivo importando la store reactiva
entonces eso nos garantiza un codigo mas limpio y la facilidad de poder organizar los componentes
y tener un arquitectura mas ordenada, y podemos separar los componentes por su logica sin tener
que mezclar la logica.
```bash
