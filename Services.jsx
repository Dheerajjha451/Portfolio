import React from 'react'

import './services.css'
import {BiCheck} from 'react-icons/bi';
const Services = () => {
  return (
   <section id='Services'>
    <h5>What I offer </h5>
    <h2>Services</h2>

    <div className='container services__container'>
      <article className='service'>
        <div className='service_head'>
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          </ul>
          </article>
          {/*--end of ui/ux--*/}

          <article className='service'>
        <div className='service_head'>
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          </ul>
          </article>
          {/*--end of web development--*/}

          <article className='service'>
        <div className='service_head'>
          <h3>Content creation</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor , consectetur .</p>
          </li>
        
        </ul>
      </article>
{/*--end of content creation--*/}
    </div>
   </section>
  )
}

export default Services