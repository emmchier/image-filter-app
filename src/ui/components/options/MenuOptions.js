import React from 'react';

import { SliderComponent } from './SliderComponent';

export const MenuOptions = ({ params, setParams }) => {
    return (
        <div className="dashboard__menu-options">
            <div className="card">
                <div className="card-body">
                    <div className="alignX">
                        <h5 className="card-title">Adjust</h5>
                        <i className="material-icons">help</i>
                    </div>
                    
                    <h6 class="card-subtitle mb-2 text-muted">Customize your image</h6>
                    
                    <SliderComponent
                        sliderTitle={ 'Brigtness' }
                        value={params.bri}
                        onChange={(e, value) =>
                            setParams({ ...params, bri: value})}
                        onChangeCommitted={ ()=> 
                            setParams({ ...params, bri: params.bri })}
                        min={0}
                        max={100}
                    />
                    <SliderComponent
                        sliderTitle={ 'Contrast' }
                        value={params.con}
                        onChange={(e, value) =>
                            setParams({ ...params, con: value})}
                        onChangeCommitted={ ()=> 
                            setParams({ ...params, con: params.con })}
                        min={0}
                        max={100}
                    />
                    <SliderComponent
                        sliderTitle={ 'Exposure' }
                        value={params.exp}
                        onChange={(e, value) =>
                            setParams({ ...params, exp: value})}
                        onChangeCommitted={ ()=> 
                            setParams({ ...params, exp: params.exp })}
                        min={0}
                        max={100}
                    />
                
                </div>
            </div>
        </div>
    )
}
