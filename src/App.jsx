import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="logo-container">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>

      <main>
        <h1>🔥 Halo Fikar, Selamat Datang di Dunia React + Vite! 🔥</h1>

        <div className="card">
          <button onClick={() => setCount((prev) => prev + 1)}>
            🚀 Klik Aku! Count: {count}
          </button>
          <p>
            Ubah <code>src/App.jsx</code> & simpan buat lihat keajaiban HMR ⚡
          </p>
        </div>

        <p className="read-the-docs">
          ⬆️ Klik logo Vite & React buat belajar lebih lanjut. Let's gooo! 😎
        </p>
      </main>
    </>
  )
}

export default App
