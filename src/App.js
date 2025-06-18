import React from 'react'
import styles from './App.module.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Skills from './components/skills/Skills'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default App