import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-zinc-800 text-white min-h-screen flex flex-col items-center justify-center space-y-16">
      <div className="flex space-x-12 items-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-24" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold">Vite + React</h1>
      <div className="flex flex-col items-center justify-center space-y-4">
        <button className="bg-zinc-900 px-4 py-2 rounded-md" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-zinc-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
