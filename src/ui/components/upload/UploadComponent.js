import React, { useState } from 'react';
import Imgix, { buildURL } from 'react-imgix';

import { uploadImage } from '../../../actions/uploadImage';

import { CustomBtn } from '../customs/CustomBtn';

export const UploadComponent = ({ newParams }) => {

    const [imageUpload, setImageUpload] = useState('https://res.cloudinary.com/dimlvoz4y/image/upload/v1621221811/c9skvcvaustqbrfrmhu0.svg');
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
                    loadingImg ? <h3>LOADING IMG!...</h3>
                    : 
                    <Imgix
                        src={ buildURL( imageUpload, newParams ) }
                        width={ 400 }
                        height={ 400 }
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
                btnTitle={ 'Add from your directories' }
                classes={ 'btn-upload' }
                btnIcon={ 'file_upload' }
                isIconVisible={true}
            />
        </>
    )
}
