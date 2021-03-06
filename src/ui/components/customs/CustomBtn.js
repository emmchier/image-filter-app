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
        isIconLeftVisible,
        btnType,
        btnTarget
    } = props;
    
    const [hover, setHover] = useState(true);
    
    return (
        <Link 
            className={
                hover 
                ? `hover-active ${ classes }`
                : ` ${ classes }`
            }
            onMouseEnter={() => { setHover( isHover ) }}
            onClick={ onClick }
            to={ to }
            type={ btnType }
            target={ btnTarget }>
            { isIconLeftVisible && <i className="material-icons btn-icon"> { btnIcon } </i> }
            { btnTitle }
            { isIconVisible && <i className="material-icons btn-icon"> { btnIcon } </i> }
        </Link>
    )
}
