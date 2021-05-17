import React from 'react';
import { Link } from 'react-router-dom';

import { CustomBtn } from '../customs/CustomBtn';

import Brand from './../../../assets/brand-logo.svg';

export const Header = ({ visibility, setVisibility }) => {
    
    return (
        <div className="tab-header">

            <div className="row">

                <div className="col-sm col-md-3">
                    <Link to="/">
                        <h1 className="brand alignX">
                            <img src={ Brand } alt={ 'show brand' } /> 
                            FilterUp!
                        </h1>
                    </Link>
                </div>
                <div className="col-sm col-md-9">
                    <div className="row">
                        <div className="col-sm col-md-6">
                            <CustomBtn 
                                onClick={ ()=> setVisibility(true) }
                                btnTitle={ 'Sandbox' }
                                classes={ 
                                    visibility 
                                    ? 'btn-tab btn-tab-sandbox pushAside active' 
                                    : 'btn-tab btn-tab-sandbox pushAside' }
                            />
                        </div>
                        <div className="col-sm col-md-6">
                            <CustomBtn 
                                onClick={ ()=> setVisibility(false) }
                                btnTitle={ 'Upload' }
                                classes={ 
                                    !visibility 
                                    ? 'btn-tab btn-tab-upload active pushAside' 
                                    : 'btn-tab btn-tab-upload pushAside' }
                               
                        />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
