import React from 'react';

import { CustomBtn } from '../customs/CustomBtn';

export const BtnOrient = ( props ) => {

    const {
        classes, 
        orientIcon,
        onClick
    } = props;

    return (
        <CustomBtn
            classes={ `btn-invert btnFAB ${ classes }`} 
            onClick={ onClick }
            isIconVisible={ true }
            btnIcon={ orientIcon }
        />
    )
}
