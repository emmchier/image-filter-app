import React, { useState } from 'react';

import { createColor } from 'material-ui-color';

import ColorPickerComponent from '../ColorPickerComponent';
import { MenuOptionHeader } from '../MenuOptionHeader';
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
                
               <h6>Border Color</h6>
                <ColorPickerComponent 
                    setParams={setParams} 
                    color={ colorBorder }
                    setColor={ setColorBorder }
                    paramsValue={{ ...params, bg: `#${colorBorder.hex}` }}
                    onClick={ ()=> handleBgReset()  }
                />

                <h6>Border Size</h6>
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
