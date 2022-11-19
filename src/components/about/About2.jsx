/* eslint-disable jsx-a11y/img-redundant-alt */


import React from 'react'

import './about1.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { BiFolder } from 'react-icons/bi'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className='about__card'>
              <BiUser  className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>

            <article className='about__card'>
              <BiFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus exercitationem dicta reiciendis, reprehenderit dolorum hic sed voluptatem. Molestiae eaque veritatis, voluptatem ex numquam assumenda nesciunt, soluta impedit minima praesentium voluptates!</p>

          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About