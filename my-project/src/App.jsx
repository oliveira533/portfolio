import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import Contact from './components/contact'
import Linkedin from './components/linkedin'
import Projects from './components/projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div>
      <Contact/>
      <Linkedin/>
      <Projects/> 
    </div>
    </>
  )
}

export default App
