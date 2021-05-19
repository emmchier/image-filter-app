import React, { useState } from 'react';

import Imgix, { buildURL } from 'react-imgix';
import { uploadImage } from '../../../actions/uploadImage';
import { CustomBtn } from '../customs/CustomBtn';
import { LoadingComponent } from '../LoadingComponent';

export const UploadComponent = ({ newParams }) => {

    const [imageUpload, setImageUpload] = useState(
        'https://res.cloudinary.com/dimlvoz4y/image/upload/v1621221811/c9skvcvaustqbrfrmhu0.svg');
    console.log(imageUpload);
    const [loadingImg, setLoadingImg] = useState(false);

    const handleClickInput = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setLoadingImg(true);
            const fileUrl = await uploadImage( file );
            setImageUpload(fileUrl);
            setLoadingImg(false);
        }
    }

    return (
        <>
            <div className="upload upload-action">
                {
                    loadingImg 
                    ? 
                    <div className="loading-img">
                        <p>Loading...</p>
                        <div className="spinner-grow loading-item" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    : 
                    <Imgix
                        src={ buildURL( imageUpload, newParams ) }
                        width={ 300 }
                        height={ 300 }
                    />
                }
            </div>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChange }
            />

            <CustomBtn 
                onClick={ handleClickInput }
                btnTitle={ 'From your computer' }
                classes={ 'btn-upload btnNormal' }
                btnIcon={ 'file_upload' }
                isIconVisible={true}
            />
        </>
    )
}
