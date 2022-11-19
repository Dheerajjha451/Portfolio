/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'
export default function Nav(){
    const[activeNav,setActiveNav]=useState('#')
  return (
   <nav>
    
    <a href='#' onClick={() => setActiveNav('#')} className={activeNav==='#'? 'active' : ""}><AiOutlineHome/></a>
    <a href='#about'onClick={() => setActiveNav('#about')} className={activeNav==='#'? 'active' : ""}><AiOutlineUser /></a>
    <a href='#experience'onClick={() => setActiveNav('#experience')} className={activeNav==='#'? 'active' : ""}><BiBook/></a>
    <a href='#services'onClick={() => setActiveNav('#services')} className={activeNav==='#'? 'active' : ""}><RiServiceLine/></a>
    <a href='#contact'onClick={() => setActiveNav('#contact')} className={activeNav==='#'? 'active' : ""}>< BiMessageSquareDetail /></a>

   </nav>
  )
}
