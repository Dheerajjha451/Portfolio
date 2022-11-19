import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
   
    <div className='header__socials'>
        <a href="linkedin.com/in/dheeraj-jha-34648821b" target="_blank"> <BsLinkedin/></a>
        <a href="https://github.com/Dheerajjha451" target="blank" rel="noreferrer"><FaGithub/></a>
       
    </div>
   
  )
}

export default HeaderSocials