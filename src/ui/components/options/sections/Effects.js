import React, { useState } from 'react';

import { useGetList } from '../../../../hooks/useGetList';

import { createColor } from 'material-ui-color';
import ColorPickerComponent from '../ColorPickerComponent';
import { MenuOptionHeader } from '../MenuOptionHeader';
import { SliderComponent } from '../SliderComponent';
import SwitchComponent from '../SwitchComponent';

export const Effects = ({ params, setParams }) => {

    const { effectList } = useGetList( params, setParams);

    const [ color, setColor ] = useState(createColor("#000"));

    const handleColorReset = () => {
        setParams({ ...params, monochrome: '' });
        setColor('#000');
    }

    return (
        <div id="options__effects">
            <div className="effects-content">

                {
                    effectList.map( (adjust, key) => {
                        return(
                            <SliderComponent
                                key={key}
                                sliderTitle={ adjust.sliderTitle }
                                value={adjust.value}
                                onChange={adjust.onChange}
                                onChangeCommitted={ adjust.onChangeCommitted}
                                onClick={ adjust.onClick}
                                min={adjust.min}
                                max={adjust.max}
                            />
                        )
                    })
                }

                <SwitchComponent 
                    label={ 'Negative' }
                    onChange={(e, value) =>
                    setParams({ ...params, invert: value})} />

                <div className="monochome-container alignX">
                    <h6>Monochrome</h6>
                    <ColorPickerComponent 
                        setParams={setParams} 
                        color={ color }
                        setColor={ setColor }
                        paramsValue={{ ...params, monochrome: `#${color.hex}` }}
                        onClick={ ()=> handleColorReset()  }
                    />
                </div>

            </div> 
        </div>
    )
}
