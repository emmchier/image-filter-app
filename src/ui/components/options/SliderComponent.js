import React from 'react';

import { Slider, Typography } from '@material-ui/core';

export const SliderComponent = ( props ) => {

  const {
    sliderTitle, 
    value, 
    min, 
    max, 
    onChange, 
    onChangeCommitted
  } = props;

  return (
    <div className="alignX">
        <Typography id="range-slider" gutterBottom>
            { sliderTitle }
        </Typography>
        <Slider
            onChange={ onChange }
            min={min}
            max={max}
            value={ value }
            onChangeCommitted={ onChangeCommitted }
            valueLabelDisplay="auto"
        />
    </div>
  )
}
