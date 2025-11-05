# Lista de Tareas – React  
Proyecto: React + Vite + Bootstrap o React-Bootstrap (según implementación)  
Autor: Facundo Javier Vera  

## 📝 Descripción  
Esta aplicación permite gestionar una lista de tareas:  
- Agregar nuevas tareas usando un formulario.  
- Mostrar la lista de tareas en la pantalla.  
- Marcar tareas como completadas o eliminarlas.  
- El estado se maneja con los Hooks de React y se gestiona la lista en memoria (y, opcionalmente, con persistencia si se implementó).  
- Diseñada con enfoque educativo para practicar React, Vite, control de estados, props, componentes, etc.

## ✅ Funcionalidades principales  
- Ingresar el texto de una tarea y hacer clic en un botón “Agregar” para añadirla a la lista.  
- Ver cada tarea con su texto, y poder eliminarla o marcarla completada (dependiendo de la implementación).  
- La lista se renderiza dinámicamente al agregar o eliminar tareas.  
- (Opcional) Persistencia con `localStorage` o similar para que la lista quede al recargar la página, si se lo implementó.

## 🚀 Tecnologías utilizadas  
- React (creada con Vite)  
- Vite como bundler / entorno de desarrollo rápido  
- (Opcional) Bootstrap o React-Bootstrap para estilos y componentes visuales  
- Git como sistema de control de versiones  
- JavaScript (o TypeScript, según proyecto) y JSX  
- Hooks como `useState`, `useEffect` según corresponda

## 📁 Estructura del proyecto  
```text
/public
/src
  ├── components
  │   ├── FormTarea.jsx         ← componente para el formulario de ingreso de nuevas tareas  
  │   ├── ListaTareas.jsx      ← componente que muestra la lista de tareas  
  │   ├── Tarea.jsx             ← componente de cada tarea individual  
  ├── App.jsx                   ← componente principal  
  └── main.jsx                  ← punto de entrada  
.gitignore  
package.json  
vite.config.js  
README.md

