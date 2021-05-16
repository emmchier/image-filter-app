import React from 'react';

export const BtnOrient = ( props ) => {

    const {
        classes, 
        orientIcon,
        onClick
    } = props;

    return (
        <button 
            className="btn-invert btn btn-primary"
            onClick={ onClick }>
                <i className={ `material-icons ${ classes }` }>{ orientIcon }</i>
        </button>
    )
}
