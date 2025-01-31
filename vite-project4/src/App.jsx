import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState('olive');
  function changeColor(color){
    setColor(color)
  }
  return (
    <div
    style={{ backgroundColor: color }}
    className="min-h-screen flex flex-col items-center justify-center"
  >
    <h1 className="text-4xl font-bold mb-6">Background Color Changer</h1>
    <div className="space-x-4">
      <button
        onClick={() => changeColor("red")}
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition-all duration-300"
      >
        Red
      </button>
      <button
        onClick={() => changeColor("green")}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition-all duration-300"
      >
        Green
      </button>
      <button
        onClick={() => changeColor("blue")}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-all duration-300"
      >
        Blue
      </button>
    </div>
  </div>
  )
}

export default App
