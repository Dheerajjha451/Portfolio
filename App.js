/* eslint-disable no-unused-vars */
import React  from 'react'
import Header from './components/header/Header'
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
<Header /> 
    <Nav />
    <About />
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
</div>
 )
}
