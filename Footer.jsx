/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
const Footer = () => {
  return (
  <footer>
    <a href='#' className='footer__logo'>EGATOR</a>
    <ul className='permalinks'>
        <li><a href='#'> HOME </a></li>
        <li><a href='#about'> About </a></li>
        <li><a href='#experience'> Experience </a></li>
        <li><a href='#services'> Services </a></li>
        <li><a href='#portfolio'> Portfolio</a></li>
        <li><a href='#testimonials'> Testimonials </a></li>
        <li><a href='#contact'> Contact</a></li>
         </ul>

         <div className='footer__socials'>
            <a href='https://www.facebook.com/'> <BsFacebook/></a>
            <a href='https://www.instagram.com/'><BsInstagram/></a>
            <a href='https://twitter.com'><BsTwitter/></a>
         </div>

         <div className="footer__copyright">
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
            </div>
  </footer>
  )
}

export default Footer