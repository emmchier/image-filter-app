import React from 'react';

import { useFetchImgs } from '../../../hooks/useFetchImgs';
import { CarouselComponent } from '../carousel/CarouselComponent';
import { EmptyContent } from '../EmptyContent';

export const ImageSlider = ({ newParams }) => {

    const { data } = useFetchImgs();

    return (
        <>
            {
                data
                ? <CarouselComponent gallery={ data } newParams={ newParams } />
                : <EmptyContent />
            }
        </>
    )
}
