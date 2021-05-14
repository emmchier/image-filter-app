import React, { useState } from 'react';

import { ImageGallery } from '../ui/components/gallery/ImageGallery';
import { MenuOptions } from '../ui/components/options/MenuOptions';
import { SliderComponent } from '../ui/components/options/SliderComponent';


export const DashboardScreen = () => {

    // dashboard
    const [ params, setParams] = useState({
        // adjustment (all sliders -100 to 100. 0 default)

          // ADJUST LIGHT
          con: 0, // constrast LIGHT
          bri: 0, // brigtness LIGHT
          exp: 0, // exposure= light LIGHT
          high: 100, // opacitiy ( -100 to 0) LIGHT
          vib: 0, // intensity
          // ADJUST COLOR
          hue: 0, // filter color (0 to 359)
          sat: 0, // saturation LIGHT
          gam: 0, // gamma brigtness in same color LIGHT

        // ADJUST SIZE
        fit: '', // size effects (select)
        //default = clip
        //clamp(elastizado), 
        //clip(se ajusta), 
        //crop(mantiene sizes), 
        //facearea(simil crop) 
        //fill(simil clip)
        //fillmax(simil clip)
        //max(max width)
        //min(min width)
        //scale(adjust at width)

        
            // ----- CHANGE ORIENTATION ----- //
        // invert Horizontal - Vertical
        flip: '', // invert horiz or vert (select component) none='' , horizontal='h', vertical='v', diagonal='hv' or 'vh
        // Rotate 
        orient: 0, // rotation in 4 directions (4 icon btn rotate) default=0, right=90, 180, 270
        rot: 0, // rotation exact effect (slider) 0 to 359

        // ----- EFFECTS ----- //
        invert: false, // negative effect (default false - switch component)
        shad: 0, // shadow effect (0 to 100)
        blur: 0, // borroso 0 a 100 (slider)
        px: 0, // pixelado 0 a 100 (slider)
        monochrome:'', // monocromía. default '' (select color component)
        sepia: 0, // sepias 0 a 100 (slider)
        // add shapes
        mask: '', // forms (ellipse, width & height most be same) | corners

        "corner-radius": "",
        // circle = "corner-radius": "50"
        // hexagon = https://assets.imgix.net/gearbox/hexagon.png 
        // gradient hexagon = https://assets.imgix.net/gearbox/hexagon-gradient.png
        // inverted hezagon = https://assets.imgix.net/gearbox/hexagon-inverted.png

    
        // ADD BORDERS
        pad: '', // 0 to 500. default = ''(slider)
        'pad-left': '', // 0 to 500. default = ''. (select component)
        'pad-right': '', // 0 to 500. default = ''. (select component)
        'pad-top': '', // 0 to 500. default = ''. (select component)
        'pad-bottom': '', // 0 to 500. default = ''. (select component)
        // background borders
        bg: '#00', // background color. default transparent= #00 (select color component)

 
        // ADD TEXT
        txt: '', // form
        "txt-align": 'top, left', // top, bottom, left. right, middle (checkboxs)
        "txt-pad": 10, // text padding 0 to 500 (slider). mayor control de posicionamiento
        "txt-clip": 'end, ellipsis', // los "...", start los pone al comienzo (grid with icons)
        //funciona cuando el texto se sale de la caja. Tenerlo siempre activoen todo lo de text
        "txt-color": '#000000', // (select color)
        "txt-fit": '', // default: max,  none o ''. Ajusta el texto al máximo (checkbox)
        "txt-font": 'Arial', // getFonts list (select)
        "txt-size": 16, // 0 a 500 (slider)
        "txt-line": 0, // border letter (slider + form) 0 a 40
        "txt-line-color": '', // border letter color (select color)
        "txt-shad": 0, // text shadow 0 to 10 (slider)
    });

    // history
    const [ historyList, setHistoryList ] = useState([]);
    // add btn
    const handleAddItem = () => {
        const historyItem = historyList.concat({
           params 
        });
        setHistoryList( historyItem );
    }
    console.log(historyList);

     
    const handleChangeParams = ( key ) => {
       const thisParams = historyList[key].params;
       setParams( thisParams );
   }

    const handleClearHistory = () => {
        setParams({});
        setHistoryList([]);
    }
    
    return (

       
         <div className="container">
            <div className="row">
                
                <div className="col-sm col-md-2">
                    <button 
                        className="btn btn-primary" 
                        onClick={ ()=> handleClearHistory() }>
                            CLEAR
                    </button>
                    <ul>
                        {
                            historyList.map( (item, key) => {
                                return (
                                    <li 
                                        key={key}
                                        {...item}>
                                            <button 
                                                className="btn btn-primary alignX" 
                                                onClick={ ()=> handleChangeParams( key ) }>
                                                    {key} ITEM 
                                                    
                                            </button>
                                    </li>
                                )
                                
                            })
                        }
                    </ul>
                </div>
                <div className="col-sm col-md-6">

                   <ImageGallery params={ params } />

                </div>
                <div className="col-sm col-md-4">
                <button className="btn btn-primary" onClick={ ()=> handleAddItem() }>Save</button>

                <MenuOptions params={ params } setParams={ setParams } />
                {/* <div className="dashboard__menu-options">
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
                </div> */}
                </div>
            </div>
        </div>

    )
}
