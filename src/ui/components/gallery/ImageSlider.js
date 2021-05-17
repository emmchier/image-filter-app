import React from 'react';

import { useFetchImgs } from '../../../hooks/useFetchImgs';
import { CarouselComponent } from '../carousel/CarouselComponent';

export const ImageSlider = ({ newParams }) => {

    const { data, loading } = useFetchImgs();

    return (
        <>
            { loading && 'Loading...' }
            
            {
                data
                ? <CarouselComponent gallery={ data } newParams={ newParams } />
                : <h2>NO HAY DATA</h2>
            }
        </>
    )
}
