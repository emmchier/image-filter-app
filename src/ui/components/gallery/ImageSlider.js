import React from 'react';

import Imgix, { buildURL } from 'react-imgix';
import { useFetchImgs } from '../../../hooks/useFetchImgs';
import { CarouselComponent } from '../carousel/CarouselComponent';

export const ImageSlider = ({ newParams }) => {

    const { data, loading } = useFetchImgs();

    // const getUrl = (url, params) => {
    //     const stringUrl = buildURL(url, params);
    //     return stringUrl;
    // }

    return (
        <>
            { loading && 'Loading...' }
            
            {
                data
                ? <CarouselComponent gallery={ data } newParams={ newParams } />
                // ? data.map( (image, key) => {
                //     return (
                //         <Imgix
                //             src={ getUrl( image.url, newParams ) }
                //             key={key}
                //             width={ 400 }
                //             height={ 400 }
                //         />
                //     )}
                // )
                : <h2>NO HAY DATA</h2>
            }
        </>
    )
}
