import React from 'react'
import { Navbar } from './sections/Navbar'
import One from './sections/One'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return <div className='container mx-auto max-w-7xl'>
    <Navbar/>
    <One/>
    <About/>
    <Projects/>
    <Experiences/>
    <Testimonial/>
    <Contact/>
    <Footer/>
  </div>
  
}

export default App