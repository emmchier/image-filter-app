import React from 'react';

import { useGetList } from '../../../hooks/useGetList';
import { useReset } from '../../../hooks/useReset';

import { MenuOptionHeader } from './MenuOptionHeader';
import SelectComponent from './SelectComponent';
import { SliderComponent } from './SliderComponent';

import InvertIcon from './../../../assets/invert.svg';

export const MenuOptions = ({ params, setParams }) => {

    const { 
        iluminationList, 
        colorList,
        sizeList
    } = useGetList( params, setParams);

    const {
        resetAdjustments
    } = useReset( setParams );

    return (
        <div className="dashboard__menu-options">
            <div className="card">
                <div className="card-body">

                    <button 
                        className="btn btn-primary" 
                        onClick={ ()=> 
                            resetAdjustments() }>
                            Reset Adjustments
                    </button>
                    
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
                        <h4>Invert</h4>
                        <button 
                            className="btn-invert btn btn-primary" 
                            onClick={ ()=> 
                                setParams( { ...params, flip: 'h' } ) }>
                                <img src={ InvertIcon } alt={ 'show invert icon' } />
                        </button>
                    </div>
                   

                </div>
            </div>
        </div>
    )
}