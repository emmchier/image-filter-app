import React, { useState } from 'react';
import { CustomBtn } from '../customs/CustomBtn';
import { UploadComponent } from '../upload/UploadComponent';

import { ImageSlider } from './ImageSlider';

export const ImageGallery = ({ params }) => {

    const [visibility, setVisibility] = useState(true);

    return (
        <>
            <div className="tab-header alignX">
                <CustomBtn 
                     onClick={ ()=> setVisibility(true) }
                     btnTitle={ 'Upload your image' }
                     classes={ 'btn-tab btn-tab-upload' }
                />
                <CustomBtn 
                     onClick={ ()=> setVisibility(false) }
                     btnTitle={ 'Examples' }
                     classes={ 'btn-tab btn-tab-sandbox' }
                />
            </div>
            {
                visibility
                ? 
                <div className="sandbox-container animate__animated animate__fadeIn">
                    <UploadComponent />
                </div>
                : 
                <div className="sandbox-container animate__animated animate__fadeIn">
                    <ImageSlider newParams={ params } />
                </div>
            }

        </>
    )
}
