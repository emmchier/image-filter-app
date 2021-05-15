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

    const sizeList = [
        {
            itemName: 'Default',
            value: '',
            onClick: ()=> { setParams({ ...params, fit: 'clip' }) }
        },
        {
            itemName: 'Clamp',
            value: 10,
            onClick: ()=> { setParams({ ...params, fit: 'clamp' }) }
        },
        {
            itemName: 'Crop',
            value: 20,
            onClick: ()=> { setParams({ ...params, fit: 'crop' }) }
        },
        {
            itemName: 'Facearea',
            value: 30,
            onClick: ()=> { setParams({ ...params, fit: 'facearea' }) }
        },
        {
            itemName: 'Fill',
            value: 40,
            onClick: ()=> { setParams({ ...params, fit: 'fill' }) }
        },
        {
            itemName: 'Fillmax',
            value: 50,
            onClick: ()=> { setParams({ ...params, fit: 'fillmax' }) }
        },
        {
            itemName: 'Max',
            value: 60,
            onClick: ()=> { setParams({ ...params, fit: 'max' }) }
        },
        {
            itemName: 'Min',
            value: 70,
            onClick: ()=> { setParams({ ...params, fit: 'min' }) }
        },
        {
            itemName: 'Scale',
            value: 80,
            onClick: ()=> { setParams({ ...params, fit: 'scale' }) }
        }
    ];

    
    return {
        iluminationList,
        colorList,
        sizeList
    }
   
}
