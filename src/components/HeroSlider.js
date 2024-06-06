import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';


import { EffectFade, Autoplay } from 'swiper/modules';


import Img1 from '../assets/sliders/1.jpg';
import Img2 from '../assets/sliders/2.jpg';
import Img3 from '../assets/sliders/3.jpg';



const slides = [
  {
    title: 'Your luxury Hotel for vacation',
    bg: Img1,
    btnText: 'Room and Suites',
  },
  {
    title: 'Your thisd i df Hotel for asd',
    bg: Img2,
    btnText: 'Room and Suites',
  },
  {
    title: 'Your asdasd Hotel for asd',
    bg: Img3,
    btnText: 'Room and Suites',
  }
]

const HeroSlider = () => {
  return (
    <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop={true} autoplay={{delay: 3000, disableOnInteraction: false}} className='h-[600px] lg:h-[860px]'>
      {slides.map((slide, index) => {

        const { title, bg, btnText } = slide;
        console.log(title)

        return <SwiperSlide className='h-full relative flex  justify-center items-center ' key={index}>
          <div className='absolute z-20 text-white text-center flex flex-col justify-center items-center h-full w-full'>
            <div className='uppercase font-teritary tracking-[6px] mb-5'>
              Just enjoy and relax
            </div>
            <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight'>{title}</h1>
            <button>
              {btnText}
            </button>

          </div>
          <div className='absolute top-0 w-full h-full'>
            <img className='object-cover h-full w-full' src={bg} alt='' />
          </div>

          <div className='absolute w-full h-full bg-black/70'>

          </div>
        </SwiperSlide>
      })}
    </Swiper>
  )
}

export default HeroSlider
