import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import Contact from './components/contact'
import Linkedin from './components/linkedin'
import Projects from './components/projects'
import Expirence from './components/expirence'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Contact/>
      <Linkedin/>
      <Projects/> 
      <Expirence/>
    </>
  )
}

export default App
