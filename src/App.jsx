import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div id="square-1">1</div>
      <div id="square-2">2</div>
      <div id="square-3">3</div>
      <div id="square-4">4</div>
      <div id="square-5">5</div>
      <div id="square-6">6</div>
      <div id="square-7">7</div>
      <div id="square-8">8</div>
      <div id="square-9">9</div>
    </div>
  )
}

export default App
