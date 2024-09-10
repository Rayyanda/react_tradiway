import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Dashboard from './views/Dashboard'
import Navbar from './components/Navbar'
import Homepage from './views/Homepage'
import RoutesIndex from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoutesIndex/>
    </>
  )
}

export default App
