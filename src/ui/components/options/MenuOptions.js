import React from 'react';

import { MenuOptionHeader } from './MenuOptionHeader';
import { SliderComponent } from './SliderComponent';

export const MenuOptions = ({ params, setParams }) => {

   

    // const handleResetAdjustments = () => {
    //     setParams({
    //         con: 0,
    //         bri: 0,
    //         exp: 0, 
    //         high: 1, 
    //         vib: 0, 
    //         hue: 0, 
    //         sat: 0,
    //         gam: 0, 
    //         fit: '',
    //         flip: '', 
    //         orient: 0,
    //         rot: 0,
    //         invert: false,
    //         shad: 0, 
    //         blur: 0, 
    //         px: 0, 
    //         monochrome:'',
    //         sepia: 0, 
    //         mask: '', 
    //         "corner-radius": "",
    //         pad: '',
    //         'pad-left': '',
    //         'pad-right': '', 
    //         'pad-top': '', 
    //         'pad-bottom': '', 
    //         bg: '#00',
    //         txt: '',
    //         "txt-align": 'top, left',
    //         "txt-pad": 10,
    //         "txt-clip": 'end, ellipsis',
    //         "txt-color": '#000000',
    //         "txt-fit": '',
    //         "txt-font": 'Arial',
    //         "txt-size": 16, 
    //         "txt-line": 0, 
    //         "txt-line-color": '', 
    //         "txt-shad": 0, 
    //     })
    // }

    return (
        <div className="dashboard__menu-options">
            <div className="card">
                <div className="card-body">

                    <button 
                        className="btn btn-primary" 
                        onClick={ ()=> 
                            setParams({
                                ...params,
                                con: 0,
                                bri: 0,
                                exp: 0, 
                                high: 1, 
                                vib: 0, 
                                hue: 0,
                                sat: 0,
                                gam: 0
                            }) }>
                            Reset Adjustments
                    </button>
                    
                    <MenuOptionHeader
                        headerTitle={ 'Adjustments' }
                        tooltipDesc={ 'Adjust the lights, colors, sizes and orientation of your images. See examples in our sandbox and play with it' }
                        tooltipOrient={ 'top' }
                    />
                    
                    <h6 class="card-subtitle text-muted"> Ilumination </h6>
                    
                    <SliderComponent
                        sliderTitle={ 'Brigtness' }
                        value={params.bri}
                        onChange={(e, value) =>
                            setParams({ ...params, bri: value})}
                        onChangeCommitted={ ()=> 
                            setParams({ ...params, bri: params.bri })}
                        onClick={ ()=> { setParams({ ...params, bri: 0 }) } }
                        min={-100}
                        max={100}
                    />

                    <SliderComponent
                        sliderTitle={ 'Contrast' }
                        value={params.con}
                        onChange={(e, value) =>
                            setParams({ ...params, con: value})}
                        onChangeCommitted={ ()=> 
                            setParams({ ...params, con: params.con })}
                        onClick={ ()=> { setParams({ ...params, con: 0 }) } }
                        min={-100}
                        max={100}
                    />

                    <SliderComponent
                        sliderTitle={ 'Exposure' }
                        value={params.exp}
                        onChange={(e, value) =>
                            setParams({ ...params, exp: value})}
                        onChangeCommitted={ ()=> 
                            setParams({ ...params, exp: params.exp })}
                        onClick={ ()=> { setParams({ ...params, exp: 0 }) } }
                        min={-100}
                        max={100}
                    />

                    <SliderComponent
                        sliderTitle={ 'Opacity' }
                        value={params.high}
                        onChange={(e, value) =>
                            setParams({ ...params, high: value})}
                        onChangeCommitted={ ()=> 
                            setParams({ ...params, high: params.high })}
                        onClick={ ()=> { setParams({ ...params, high: 1 }) } }
                        min={-100}
                        max={100}
                    />

                    <SliderComponent
                        sliderTitle={ 'Intencity' }
                        value={params.vib}
                        onChange={(e, value) =>
                            setParams({ ...params, vib: value})}
                        onChangeCommitted={ ()=> 
                            setParams({ ...params, vib: params.vib })}
                        onClick={ ()=> { setParams({ ...params, vib: 0 }) } }
                        min={0}
                        max={100}
                    />

                    <h6 class="card-subtitle text-muted"> Color </h6>
                    
                    <SliderComponent
                        sliderTitle={ 'Filter' }
                        value={params.hue}
                        onChange={(e, value) =>
                            setParams({ ...params, hue: value})}
                        onChangeCommitted={ ()=> 
                            setParams({ ...params, hue: params.hue })}
                        onClick={ ()=> { setParams({ ...params, hue: 0 }) } }
                        min={0}
                        max={359}
                    />

                    <SliderComponent
                        sliderTitle={ 'Saturation' }
                        value={params.sat}
                        onChange={(e, value) =>
                            setParams({ ...params, sat: value})}
                        onChangeCommitted={ ()=> 
                            setParams({ ...params, sat: params.sat })}
                        onClick={ ()=> { setParams({ ...params, sat: 0 }) } }
                        min={0}
                        max={100}
                    />

                    <SliderComponent
                        sliderTitle={ 'Gamma' }
                        value={params.gam}
                        onChange={(e, value) =>
                            setParams({ ...params, gam: value})}
                        onChangeCommitted={ ()=> 
                            setParams({ ...params, gam: params.gam })}
                        onClick={ ()=> { setParams({ ...params, gam: 0 }) } }
                        min={0}
                        max={100}
                    />
                
                </div>
            </div>
        </div>
    )
}