lenguaje: typescript
framework: react
Librerias : Three.js , React Three Fiber, Drei
Store Reactivo: Zustand

<img width="1552" alt="Screenshot 2025-03-25 at 14 31 38" src="https://github.com/user-attachments/assets/a3078475-9de2-4335-b282-955e14579a11" />

Proyecto creado con vite ( ts ) 

How to install
yarn
yarn run dev

La comunicación entre los elementos 3D y la UI se realiza a través de Zustand, una store global reactiva.
El HUD actualiza el estado global (color, visibilidad, velocidad...).
Los componentes 3D escuchan los cambios en tiempo real desde la store del zustand
y son acrualizados, se pueden tener acceso desde cualquier archivo importando la store reactiva
entonces eso nos garantiza un codigo mas limpio y la facilidad de poder organizar los componentes
y tener un arquitectura mas ordenada, y podemos separar los componentes por su logica sin tener
que mezclar la logica.
