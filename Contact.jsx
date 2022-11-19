 // eslint-disable-next-line 
import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const Contact = ()=>{
return(
  <section id='contact'>
    <h5>Get In</h5>
    <h2> Contact Me</h2>
    <div className='container contact__container'>
      <article className='contact__options'>
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>dheerajjha451@gmail.com</h5>
        <a href="mailto:dheerajjha451@gmail.com" target="blank" rel="noreferrer" > Send Message</a>
        </article>
        <article className='contact__options'>
        <BsInstagram className='contact__option-icon'/>
        <h4>Instagram</h4>
        <h5>https://www.instagram.com/dheeraj._jha/</h5>
        <a href="https://www.instagram.com/dheeraj._jha/"target="blank" rel="noreferrer" >Send Message</a>
        </article>
        <article className='contact__options'>
        <BsLinkedin className='contact__option-icon'/>
        <h4>Linkedin</h4>
        <h5>https://www.linkedin.com/in/dheeraj-jha-34648821b
</h5>
        <a href="https://www.linkedin.com/in/dheeraj-jha-34648821b
"target="blank" rel="noreferrer" >Send Message</a>
        </article>
      </div>
    {/*--end of contact options--*/}
    <form action=''>
    <input type="text" name='name' placeholder="Your Full Name" required/>
    <input type="email" name='email' placeholder="Your Email" required/>
     <textarea name='message' rows="7" placeholder="Your Message" required></textarea>      
     <button type='submit' className='btn btn-primary' Send Message ></button>
    </form>
  </section>
)
 }
 export default Contact