import React, { useState } from 'react';

import Imgix from 'react-imgix';

import { useFetchImgs } from '../hooks/useFetchImgs';

export const DashboardScreen = () => {

      const { data, loading } = useFetchImgs();
      
    //   const buildURL = imagePath =>
    //     `https://assets.imgix.net/tutorials/${imagePath}.webp`;

    const [myWidth, setMyWidth] = useState(200);

    const handleClick = (number) => {
        setMyWidth(number);
    }
      
    return (

        <>
        <div className="container alignX mb-30">
            <button className="btn btn-primary" onClick={ ()=> handleClick(600) }>width: 600</button>
            <button className="btn btn-primary" onClick={ ()=> handleClick(1200) }>width: 1200</button>
            <button className="btn btn-primary" onClick={ ()=> handleClick(1800) }>width: 1800</button>
        </div>
       
         <div className="container">

                {   
                    loading
                    ? 'Loading...'
                    : data.map( image => {
                        return (
                            <Imgix
                                sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                                src={image.url}
                                key={image}
                                imgixParams={{
                                    // adjustment (all sliders -100 to 100. 0 default)
                                    con: 0, // constrast
                                    bri: 0, // brigtness
                                    exp: 0, // exposure= light
                                    gam: 0, // gamma brigtness in same color
                                    high: 100, // opacitiy (-100 to 0)
                                    hue: 0, // filter color (0 to 359)
                                    invert: false, // negative effect (default false - switch component)
                                    sat: 0, // saturation 
                                    shad: 0, // shadow (0 to 100)
                                    sharp: 0, // (0 to 100) (NO USE)
                                    usm: 25, // use with usmrad (NO USE ALONE)
                                    usmrad: 0, // usm:25 + usmrad: 0 to 500 - mask effect
                                    vib: 0, // intensity
                                    
                                    // rotation
                                    flip: '', // invert horiz or vert (select component) none='' , horizontal='h', vertical='v', diagonal='hv' or 'vh
                                    orient: 0, // rotation in 4 directions (4 icon btn rotate) default=0, right=90, 180, 270
                                    rot: 0, // rotation exact effect (slider) 0 to 359

                                    // borders
                                    pad: '', // 0 to 500. default = ''(slider)
                                    'pad-left': '', // 0 to 500. default = ''. (select component)
                                    
                                    // shapes
                                    mask: 'corners', // forms (ellipse, width & height most be same) | corners
                                  
                                    // background
                                    bg: '#00', // background color. default transparent= #00 (select color component)

                                }}
                                width={ myWidth }
                                height={ 600 }
                            />
                        )}
                    )
                } 

        </div>
    </>
    )
}
