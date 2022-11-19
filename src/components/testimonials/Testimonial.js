/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Testimonial.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'


import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'



import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const data =[
  {
    avatar:AVATAR1,
    name:'Dhruv',
    review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias similique quaerat id vero laborum excepturi culpa assumenda, quisquam cupiditate sint aperiam exercitationem placeat at sit eum nostrum libero impedit aspernatur!'

  },
  {
    avatar:AVATAR2,
    name:'Dhrisyam',
    review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias similique quaerat id vero laborum excepturi culpa assumenda, quisquam cupiditate sint aperiam exercitationem placeat at sit eum nostrum libero impedit aspernatur!'

  },
  {
    avatar:AVATAR3,
    name:'David',
    review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias similique quaerat id vero laborum excepturi culpa assumenda, quisquam cupiditate sint aperiam exercitationem placeat at sit eum nostrum libero impedit aspernatur!'

  },
  {
    avatar:AVATAR4,
    name:'Danish',
    review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias similique quaerat id vero laborum excepturi culpa assumenda, quisquam cupiditate sint aperiam exercitationem placeat at sit eum nostrum libero impedit aspernatur!'

  },
]

export default function Testimonial(){
  // const c=data.map(data=>{
  //   <Card
  //   {...data}
  //   />
  // })
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      {/* {c} */}
      {/* <Swiper className='container testimonials__container'>
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    
       {
        data.map(((avatar,name,review,index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
              
                <img src={avatar}/>

              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        }
        ))
       }
      </Swiper> */}
    </section>
  )
}
