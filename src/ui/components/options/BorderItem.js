import React from 'react';

import { SliderComponent } from './SliderComponent';

export const BorderItem = (props) => {

    const {
        value,
        onChange,
        onChangeCommitted,
        onClick,
        min,
        max
    } = props;

    return (
        <div className="alignX">

            <i className="material-icons">menu</i>
            <SliderComponent
                value={ value }
                onChange={ onChange }
                onChangeCommitted={ onChangeCommitted }
                onClick={ onClick }
                min={ min }
                max={ max }
            />

        </div>
        
    )
}
