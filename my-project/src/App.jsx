import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import Contact from './components/contact'
import Linkedin from './components/linkedin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Contact/>
    <Linkedin/>
    </>
  )
}

export default App
