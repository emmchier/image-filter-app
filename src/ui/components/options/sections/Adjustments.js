import React from 'react';

import { useGetList } from '../../../../hooks/useGetList';

import { BtnOrient } from '../BtnOrient';
import SelectComponent from '../SelectComponent';
import { SliderComponent } from '../SliderComponent';

export const Adjustments = ({ params, setParams }) => {

    const { 
        iluminationList, 
        colorList,
        sizeList,
        invertList
    } = useGetList( params, setParams);

    return (
        <div id="options__adjustments">
                <div className="adjustment-content">
                    
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
    )
}
