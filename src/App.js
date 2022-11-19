/* eslint-disable no-unused-vars */
import React  from 'react'
import Header from './components/header/Header.js'
import Nav from './components/nav/Nav'
import About from './components/about/About2'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


export default function App(){

 return(
     <div>
         <h1>HELLO WORLD</h1>

          <Header /> 
    <Nav />
     <About />
    <Experience/>
    <Services/>
    <Portfolio/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
     </div>
 )
}
