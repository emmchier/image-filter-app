import React from 'react';

import { UploadComponent } from '../upload/UploadComponent';
import { ImageSlider } from './ImageSlider';

export const ImageGallery = ({ params, visibility }) => {

    return (
        <>
            {
                visibility
                ? 
                <div className="sandbox-container animate__animated animate__fadeIn">
                    <ImageSlider newParams={ params } />
                </div>
                :
                <div className="sandbox-container animate__animated animate__fadeIn">
                    <UploadComponent newParams={ params } />
                </div>
            }

        </>
    )
}
