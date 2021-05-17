import React from 'react';
import { Link } from 'react-router-dom';

import { CustomBtn } from '../customs/CustomBtn';

import Brand from './../../../assets/brand-logo.svg';

export const Header = ({ setVisibility }) => {
    
    return (
        <div className="tab-header alignX">

            <Link to="/" className="brand alignX">
                <img src={ Brand } alt={ 'show brand' } /> FilterUp!
            </Link>
            
            <CustomBtn 
                    onClick={ ()=> setVisibility(true) }
                    btnTitle={ 'Sandbox' }
                    classes={ 'btn-tab btn-tab-sandbox' }
            />

            <span className="separator">|</span>

            <CustomBtn 
                    onClick={ ()=> setVisibility(false) }
                    btnTitle={ 'Upload' }
                    classes={ 'btn-tab btn-tab-upload' }
            />
            
        </div>
    )
}
