import React from 'react'
import './Experience.css'
import { BsPatchCheckFill} from 'react-icons/bs';
const Experience = () => {
  return (
   <section id='experience'>
    <h5>What skills I have</h5>
    <h2>My Experience</h2>
    < div className='container experience__container'>
        <div className='experience_frontend'>
            <h3>Frontend Devlopment</h3>
            <div className='experience__content'>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                   <div><h4>HTML</h4>
                    <small className='text-light'>Experinced</small></div> 
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                   <div> <h4>CSS</h4>
                    <small className='text-light'>Experinced</small></div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div><h4>Javascript</h4>
                    <small className='text-light'>Experinced</small></div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>   <h4>Bootstrap</h4>
                    <small className='text-light'>Experinced</small></div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div> <h4>Talwind</h4>
                    <small className='text-light'>Experinced</small></div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div> <h4>React Js</h4>
                    <small className='text-light'>Experinced</small></div>
                </article>
            </div>
        </div>
        {/*----front end-------*/}
<div className='experience__backend'>
    <h3>Backend Devlopment</h3>
<div className='experience__content'>
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Node Js</h4>
                    <small className='text-light'>Experinced</small>
                    </div>
                </article>

                 <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>  <h4>MongoDB</h4>
                    <small className='text-light'>Basic</small></div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div> <h4>PHP</h4>
                    <small className='text-light'>Basic</small></div>
                </article>
              
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>  <h4>Python</h4>
                    <small className='text-light'>Experinced</small></div>
                </article>
                </div>
                </div>
    </div>
   </section>
  )
}

export default Experience