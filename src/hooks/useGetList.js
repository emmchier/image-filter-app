/*
 * custom hook to return all project lists
 */
export const useGetList = ( params, setParams ) => {

    const iluminationList = [
        {
            sliderTitle: 'Brigtness',
            value: params.bri,
            onChange: (e, value) =>
                setParams({ ...params, bri: value}),
            onChangeCommitted: ()=> 
                setParams({ ...params, bri: params.bri }),
            onClick: ()=> { setParams({ ...params, bri: 0 }) },
            min: -100,
            max: 100
        },
        {
            sliderTitle: 'Contrast',
            value: params.con,
            onChange: (e, value) =>
                setParams({ ...params, con: value}),
            onChangeCommitted: ()=> 
                setParams({ ...params, con: params.con }),
            onClick: ()=> { setParams({ ...params, con: 0 }) },
            min: -100,
            max: 100
        },
        {
            sliderTitle: 'Exposure',
            value: params.exp,
            onChange: (e, value) =>
                setParams({ ...params, exp: value}),
            onChangeCommitted: ()=> 
                setParams({ ...params, exp: params.exp }),
            onClick: ()=> { setParams({ ...params, exp: 0 }) },
            min: -100,
            max: 100
        },
        {
            sliderTitle: 'Opacity',
            value: params.high,
            onChange: (e, value) =>
                setParams({ ...params, high: value}),
            onChangeCommitted: ()=> 
                setParams({ ...params, high: params.high }),
            onClick: ()=> { setParams({ ...params, high: 0 }) },
            min: -100,
            max: 100
        },
        {
            sliderTitle: 'Intencity',
            value: params.vib,
            onChange: (e, value) =>
                setParams({ ...params, vib: value}),
            onChangeCommitted: ()=> 
                setParams({ ...params, vib: params.vib }),
            onClick: ()=> { setParams({ ...params, vib: 0 }) },
            min: 0,
            max: 100
        }
    ];

    const colorList = [
        {
            sliderTitle: 'Filter',
            value: params.hue,
            onChange: (e, value) =>
                setParams({ ...params, hue: value}),
            onChangeCommitted: ()=> 
                setParams({ ...params, hue: params.hue }),
            onClick: ()=> { setParams({ ...params, hue: 0 }) },
            min: 0,
            max: 359
        },
        {
            sliderTitle: 'Saturation',
            value: params.sat,
            onChange: (e, value) =>
                setParams({ ...params, sat: value}),
            onChangeCommitted: ()=> 
                setParams({ ...params, sat: params.sat }),
            onClick: ()=> { setParams({ ...params, sat: 0 }) },
            min: 0,
            max: 100
        },
        {
            sliderTitle: 'Gamma',
            value: params.gam,
            onChange: (e, value) =>
                setParams({ ...params, gam: value}),
            onChangeCommitted: ()=> 
                setParams({ ...params, gam: params.gam }),
            onClick: ()=> { setParams({ ...params, gam: 0 }) },
            min: 0,
            max: 100
        }
    ];

    const invertList = [
        { 
            classes: 'btn-invert-right', 
            onClick: ()=> setParams( { ...params, flip: 'h' } ),
            orientIcon: 'arrow_right' 
        },
        { 
            classes: 'btn-invert-left', 
            onClick: ()=> setParams( { ...params, flip: '' } ),
            orientIcon: 'arrow_right' 
        },
        { 
            classes: 'btn-invert-bottom', 
            onClick: ()=> setParams( { ...params, flip: 'v' } ),
            orientIcon: 'arrow_right' 
        },
        { 
            classes: 'btn-invert-top', 
            onClick: ()=> setParams( { ...params, flip: '' } ),
            orientIcon: 'arrow_right' 
        }
    ];

    const effectList = [
        {
            sliderTitle: 'Shadow',
            value: params.shad,
            onChange: (e, value) =>
                setParams({ ...params, shad: value}),
            onChangeCommitted: ()=> 
                setParams({ ...params, shad: params.shad }),
            onClick: ()=> { setParams({ ...params, shad: 0 }) },
            min: 0,
            max: 100
        },
        {
            sliderTitle: 'Blur',
            value: params.blur,
            onChange: (e, value) =>
                setParams({ ...params, blur: value}),
            onChangeCommitted: ()=> 
                setParams({ ...params, blur: params.blur }),
            onClick: ()=> { setParams({ ...params, blur: 0 }) },
            min: 0,
            max: 100
        },
        {
            sliderTitle: 'Pixels',
            value: params.px,
            onChange: (e, value) =>
                setParams({ ...params, px: value}),
            onChangeCommitted: ()=> 
                setParams({ ...params, px: params.px }),
            onClick: ()=> { setParams({ ...params, px: 0 }) },
            min: 0,
            max: 100
        },
        {
            sliderTitle: 'Sepia',
            value: params.sepia,
            onChange: (e, value) =>
                setParams({ ...params, sepia: value}),
            onChangeCommitted: ()=> 
                setParams({ ...params, sepia: params.sepia }),
            onClick: ()=> { setParams({ ...params, sepia: 0 }) },
            min: 0,
            max: 100
        }
    ];

    const shapeList = [
        {
            shapeIcon: 'corners',
            shapeName: 'Rounded Corners',
            onClick: ()=> { setParams({ ...params, mask: "corners" }) }
        },
        {
            shapeIcon: 'ellipse',
            shapeName: 'Ellipse',
            onClick: ()=> { setParams({ ...params, mask: "ellipse", fit:'fill', w:50, h:50  }) }
        },
        {
            shapeIcon: 'hexagon',
            shapeName: 'Hexagon',
            onClick: ()=> { setParams({ ...params, mask: "https://assets.imgix.net/gearbox/hexagon.png" }) }
        },
        {
            shapeIcon: 'gradient-hex',
            shapeName: 'Gradient Hexagon',
            onClick: ()=> { setParams({ ...params, mask: "https://assets.imgix.net/gearbox/hexagon-gradient.png" }) }
        },
        {
            shapeIcon: 'inverted-hex',
            shapeName: 'Inverted Hexagon',
            onClick: ()=> { setParams({ ...params, mask: "https://assets.imgix.net/gearbox/hexagon-inverted.png" }) }
        }
    ];

    const sectionList = [
        { 
            type: 'adjustment',
            headerName: 'Adjustments',
            collapseId: 'collapse1',
            showClass: 'show',
            ariaExpanded: 'true'
        },
        { 
            type: 'effects',
            headerName: 'Effects',
            collapseId: 'collapse2',
            showClass: '',
            ariaExpanded: 'false'
        },
        { 
            type: 'shapes',
            headerName: 'Shapes',
            collapseId: 'collapse3',
            showClass: '',
            ariaExpanded: 'false'
        },
        { 
            type: 'borders',
            headerName: 'Borders',
            collapseId: 'collapse4',
            showClass: '',
            ariaExpanded: 'false'
        }
    ];

    return {
        iluminationList,
        colorList,
        invertList,
        effectList,
        shapeList,
        sectionList
    }
   
}
