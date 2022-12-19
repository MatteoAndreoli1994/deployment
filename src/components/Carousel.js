import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination"
import "swiper/css/navigation"
import arrow from "../assets/elements/arrow.jpeg"

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/nfts/1.jpg';
import img2 from '../assets/nfts/2.jpg';
import img3 from '../assets/nfts/3.jpg';
import img4 from '../assets/nfts/4.png';
const Container = styled.div`
width: 50vh;
height: 50vh;


@media (max-width: 64em){
  width: 35vh;
  height: 35vh;
}


.swiper{
  width: 100%;
  height: 100%;
}

img{
  width: 100%;
  height: 100%
}

.swiper-slide{
  background-color: white;
  border-radius: 20px;

  display: flex;
  justify-content; center;
  align-items: center;
}

.swiper-button-next{
  color: blue;
  right: 0;
  width: 4rem;
  background-image: url(${arrow});
  background-position: center;
  background-size: cover;

  &:after{
    display: none;
  }
}

.swiper-button-prev{
  color: blue;
  left : 0;
  width: 4rem;
  transform: rotate(180deg);
  background-image: url(${arrow});
  background-position: center;
  background-size: cover;

  &:after{
    display: none;
  }
}
`


const Carousel = () => {
  return (
    <Container>
    <Swiper
    autoplay={{
      delay:2000, 
      disableOnInteraction:false, 
    }}
    pagination={{
      type:'fraction',
    }
    }
    navigation={true}
    effect={"cards"}
    grabCursor={true}
    modules={[Pagination, Navigation, Autoplay, EffectCards]}
    className="mySwiper"
  >
    <SwiperSlide><img src={img1} alt="Gameboyz"/></SwiperSlide>
    <SwiperSlide><img src={img2} alt="Gameboyz"/></SwiperSlide>
    <SwiperSlide><img src={img3} alt="Gameboyz"/></SwiperSlide>
  </Swiper></Container>
  )
}

export default Carousel