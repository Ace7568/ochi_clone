import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import EyePart from './components/EyePart'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Ready from './components/Ready'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <EyePart/>
      <Featured/>
      <Cards/>
      <Ready/>
    </div>
  )
}

export default App
