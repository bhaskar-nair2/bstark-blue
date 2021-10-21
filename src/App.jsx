import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>nav</nav>
      <section>Home</section>
      <section>Links</section>
      <section>Contact</section>
      <section>Footer</section>
    </div>
  )
}

export default App
