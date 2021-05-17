import React, { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"

import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';

import Imgix, { buildURL } from 'react-imgix';

SwiperCore.use([Navigation,Thumbs]);

export const CarouselComponent = ({ gallery, newParams }) => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  //const [urlStr, setUrlStr] = useState();

  const getUrlString = (url, params) => {
    const urlString = buildURL( url, params);
    return urlString;
  }

  console.log(getUrlString);

    return (
      <>
      <Swiper 
        style={{
          '--swiper-navigation-size': 
          '10px'
        }} 
        loop={true} 
        spaceBetween={10} 
        navigation={true} 
        thumbs={{ swiper: thumbsSwiper }} 
        className="swiperDisplay">
          {
              gallery.map( (img, key)=> {
                  return(
                    <SwiperSlide
                        key={ key }>
                        <Imgix
                            src={ getUrlString( img.url, newParams) }
                         
                            key={key}
                            width={ 400 }
                            height={ 400 }
                        />
                    </SwiperSlide>
                  )
              })
          }
        </Swiper> 
        <Swiper 
          onSwiper={setThumbsSwiper} 
          loop={false} 
          spaceBetween={10} 
          slidesPerView={4} 
          freeMode={true} 
          watchSlidesVisibility={true} 
          watchSlidesProgress={true} 
          className="swiperNav">
           {
              gallery.map( (img, key)=> {
                  return(
                    <SwiperSlide
                        key={ key }
                        { ...img }>
                        <img src={ img.url } alt="show a car img" />
                    </SwiperSlide>
                  )
              })
          }
        </Swiper>
        </>
    )
}
