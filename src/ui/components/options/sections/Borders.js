import React, { useState } from 'react';

import { createColor } from 'material-ui-color';
import ColorPickerComponent from '../ColorPickerComponent';
import { SliderComponent } from '../SliderComponent';

export const Borders = ({ params, setParams }) => {

    const [colorBorder, setColorBorder] = useState(createColor("#000"));

    const handleBgReset = () => {
        setParams({ ...params, bg: '' });
        setColorBorder('#000');
    }

    return (

        <div id="options__borders">
            <div className="borders-content">
                <div className="alignX">
                    <h6>Border Color</h6>

                    <ColorPickerComponent 
                        setParams={setParams} 
                        color={ colorBorder }
                        setColor={ setColorBorder }
                        paramsValue={{ ...params, bg: `#${colorBorder.hex}` }}
                        onClick={ ()=> handleBgReset()  }
                    />
                </div>
                <h6 className="border-size">Border Size</h6>

                <SliderComponent
                    value={params.pad}
                    onChange= {(e, value) =>
                        setParams({ ...params, pad: value}) }
                    onChangeCommitted={ ()=> 
                        setParams({ ...params, pad: params.pad }) }
                    onClick={ ()=> { setParams({ ...params, pad: '' }) } }
                    min={0}
                    max={100}
                />
          
            </div>
        </div>
    )
}
