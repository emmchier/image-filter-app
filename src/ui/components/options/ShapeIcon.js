import React from 'react';

export const ShapeIcon = (props) => {

    const {
        shapeIcon,
        shapeName,
        onClick,
        reset
    } = props;

    return (
        <div className="card">
            <div 
                className="card-body alignX"
                onClick={ onClick }>
                <i className="material-icons">menu</i>
                <h6>{ shapeName }</h6>
         
            </div>
        </div>
    )
}
