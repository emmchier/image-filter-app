import React, { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"

import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';

import Imgix, { buildURL } from 'react-imgix';
import { CustomBtn } from '../customs/CustomBtn';
import { getImageByURL } from '../../../actions/downloadImage';

SwiperCore.use([Navigation,Thumbs]);

export const CarouselComponent = ({ gallery, newParams }) => {
  
  const [ thumbsSwiper, setThumbsSwiper ] = useState(null);

  const [ stringUrl, setStringUrl ] = useState('');

  const getURL = url => buildURL( url, newParams );

  const copyUrl = url => 
    navigator.clipboard.writeText( getURL( url ) );
  
  const openInBrowser = url => {
    const urlSt = getURL( url );
    const newStringUrl = urlSt.substr(8);
    setStringUrl( newStringUrl );
  }

  const downloadImage = ( url, name ) => 
    getImageByURL( getURL( url ), name );
  
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
                          <div className="sandbox-item">
                          <div className="sandbox-item-actions alignX">
                              <CustomBtn
                                btnTitle={ 'Open in browser' }
                                classes={ 'btn-action btnOutline' }
                                onClick={()=> openInBrowser( img.url ) }
                                to={ `//${stringUrl}` }
                                btnTarget={ '_blank' }
                              />
                               <CustomBtn
                                btnTitle={ 'Copy URL' }
                                classes={ 'btn-action btnOutline' }
                                onClick={ () => copyUrl( img.url ) }
                              />
                               <CustomBtn
                                btnTitle={ 'Download Image' }
                                classes={ 'btn-action btnOutline' }
                                onClick={ ()=> downloadImage( img.url, img.name ) }
                              />
                            </div>
                            <div className="image-item">
                            <Imgix
                                src={ getURL( img.url ) }
                                key={key}
                            />
                            </div>
                            
                            
          
                           
                          </div>
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
