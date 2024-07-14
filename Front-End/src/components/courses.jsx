import React from 'react'
import Card from "../components/card"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';

function courses() {

      const [coursedata, setcoursedata] = useState([])
      useEffect(()=>{
            const CourseData = async () =>{
                try {
                  const res = await axios.get("http://localhost:4001/book")
                  
                  const freedata = res.data.filter((data)=> data.category === 'free')
                  setcoursedata(freedata)
                } catch (error) {
                  console.log("Error", + error)
                }
            }
            CourseData()
      },[])

  return (
   <>
            <div className="px-20 pt-[50px] pb-[20px] max-[786px]:px-[2rem] max-[500px]:px-[1rem]">
                <h1 className='text-white-light text-4xl font-semibold max-[500px]:text-2xl'>free book</h1>
                <p className='text-sm font-normal w-[50%] mt-2  max-[750px]:w-[100%] max-[500px]:text-[10px] max-[500px]:leading-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad delectus non dolorem libero iste soluta unde? Corporis, quidem harum numquam nulla ducimus reprehenderit libero.</p>
            <div className="slider-container">

                <Swiper
        // slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          240: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mainSlider"
      >
      
       {
  coursedata.map((item)=> (
    <SwiperSlide className='pt-[50px]'>
      <Card item={item} key={item.id}/>
    </SwiperSlide>
  ))}


      </Swiper>
            </div>
            </div>
   </>
  )
}

export default courses
