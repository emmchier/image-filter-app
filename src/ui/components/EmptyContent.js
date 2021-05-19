import React from 'react';

import EmptyIcon from './../../assets/empty-icon.svg';

export const EmptyContent = () => {

    return (
        <>
            <div className="row empty-container">
                <div className="container">
                    <img src={ EmptyIcon } alt="icon representing empty list" />
                        <p 
                            className="
                                animate__animated 
                                animate__fadeInUp
                                animate__fast">
                                No están llegando los datos del servidor.
                                <span> Intenta nuevamente más tarde.</span> 
                        </p>
                </div>
            </div>
        </>
    )
}