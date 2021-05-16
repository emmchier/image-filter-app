import React, { useState } from 'react';

import { useGetList } from '../../../hooks/useGetList';
import { useReset } from '../../../hooks/useReset';
import { BtnOrient } from './BtnOrient';
import ColorPickerComponent from './ColorPickerComponent';
import { createColor } from "material-ui-color";

import { MenuOptionHeader } from './MenuOptionHeader';
import SelectComponent from './SelectComponent';
import { SliderComponent } from './SliderComponent';
import SwitchComponent from './SwitchComponent';
import { ShapeIcon } from './ShapeIcon';
import { BorderItem } from './BorderItem';

export const MenuOptions = ({ params, setParams }) => {

    const { 
        iluminationList, 
        colorList,
        sizeList,
        invertList,
        effectList,
        shapeList
    } = useGetList( params, setParams);

    const [color, setColor] = useState(createColor("#000"));

    const handleColorReset = () => {
        setParams({ ...params, monochrome: '' });
        setColor('#000');
    }

    const [colorBorder, setColorBorder] = useState(createColor("#000"));

    const handleBgReset = () => {
        setParams({ ...params, bg: '' });
        setColorBorder('#000');
    }

    return (
        <div className="dashboard__menu-options">
            <div className="card">
                <div className="card-body">
                    
                    <MenuOptionHeader
                        headerTitle={ 'Adjustments' }
                        tooltipDesc={ 'Adjust the lights, colors, sizes and orientation of your images. See examples in our sandbox and play with it' }
                        tooltipOrient={ 'top' }
                    />
                    
                    <h6 class="card-subtitle text-muted"> Ilumination </h6>

                    {
                        iluminationList.map( (adjust, key) => {
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

                <h6 class="card-subtitle text-muted"> Color </h6>

                {
                        colorList.map( (adjust, key) => {
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
 
                <h6 class="card-subtitle text-muted"> Size </h6>

                <SelectComponent selectList={ sizeList } />

                <h6 class="card-subtitle text-muted"> Orientation </h6>

                    <div className="invert-container alignX">
                        <h6> Invert </h6>
                        {
                            invertList.map( (invert, key)=> {
                                return (
                                    <BtnOrient
                                        key={ key }
                                        classes={ invert.classes }
                                        onClick={ invert.onClick }
                                        orientIcon={ invert.orientIcon }
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="rotate-container">
                        <SliderComponent
                            sliderTitle={ 'Rotate' }
                            value={ params.rot }
                            onChange={ (e, value) =>
                                setParams({ ...params, rot: value}) }
                            onChangeCommitted={ ()=> 
                                setParams({ ...params, rot: params.rot }) }
                            onClick={ ()=> { setParams({ ...params, rot: 0 }) } }
                            min={0}
                            max={359}
                        />
                    </div>


                </div>
            </div>

            {/* Effects */}

            <div className="card">
                <div className="card-body">

                    <MenuOptionHeader
                        headerTitle={ 'Add Effects' }
                        tooltipDesc={ 'Adjust the lights, colors, sizes and orientation of your images. See examples in our sandbox and play with it' }
                        tooltipOrient={ 'top' }
                    />


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

                    <div className="monochome-container">
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

            {/* Shapes */}

            <div className="card">
                <div className="card-body">
                    
                    <div className="alignX">
                        <MenuOptionHeader
                            headerTitle={ 'Add Shapes' }
                            tooltipDesc={ 'Adjust the lights, colors, sizes and orientation of your images. See examples in our sandbox and play with it' }
                            tooltipOrient={ 'top' }
                        />
                        <button 
                            className="btn btn-primary" 
                            onClick={ ()=> { setParams({ ...params, mask: "" }) } }>
                                <i className="material-icons">restart_alt</i>
                        </button>
                    </div>
                   
                    {
                        shapeList.map( (shape, key) => {
                            return(
                                <ShapeIcon
                                    key={key}
                                    shapeIcon={ shape.shapeIcon }
                                    shapeName={ shape.shapeName }
                                    onClick={ shape.onClick}
                                />
                            )
                        })
                    }

                

                </div>
            </div>

            {/* Borders */}

            <div className="card">
                <div className="card-body">
                    
                    <MenuOptionHeader
                        headerTitle={ 'Add Borders' }
                        tooltipDesc={ 'Adjust the lights, colors, sizes and orientation of your images. See examples in our sandbox and play with it' }
                        tooltipOrient={ 'top' }
                    />

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
        </div>
    )
}