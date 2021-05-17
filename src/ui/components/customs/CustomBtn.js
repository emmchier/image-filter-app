import React, { useState } from 'react';

import { Link } from 'react-router-dom';

export const CustomBtn = ( props ) => {

    const {
        onClick, 
        btnTitle, 
        isHover, 
        classes, 
        to, 
        btnIcon, 
        isIconVisible, 
        btnType
    } = props;
    
    const [hover, setHover] = useState(true);
    
    return (
        <Link 
            className={
                hover 
                ? `btn btn-primary custom-btn hover-active ${ classes }`
                : `btn btn-primary custom-btn ${ classes }`
            }
            onMouseEnter={() => { setHover( isHover ) }}
            onClick={ onClick }
            to={ to }
            type={ btnType }>
            { btnTitle }
            { isIconVisible && <i className="material-icons btn-icon"> { btnIcon } </i> }
        </Link>
    )
}
