/*
 * custom hook that initialize and return the global state option menu
 */
export const useGlobalState = () => {

    return {
        con: 0, // constrast 
        bri: 0, // brigtness 
        exp: 0, // exposure
        high: 0, // opacitiy 
        vib: 0, // intensity
        hue: 0, // filter color
        sat: 0, // saturation
        gam: 0, // gamma brigtness
        fit: 'clip', // size effects
        flip: '', // invert horizontal or vertical
        orient: 0, // rotation in 4 directions
        rot: 0, // rotation
        invert: false, // negative effect
        shad: 0, // shadow effect
        blur: 0, // blur effect
        px: 0, // pixels effect
        monochrome:'', // monochrome
        sepia: 0, // sepia 
        mask: '', // shapes
        "corner-radius": "", // radius
        pad: '', // paddings
        'pad-left': '', 
        'pad-right': '', 
        'pad-top': '', 
        'pad-bottom': '', 
        bg: '#00', // background color
        txt: '', // text
        "txt-align": 'top, left',
        "txt-pad": 10, 
        "txt-clip": 'end, ellipsis', 
        "txt-color": '#000000', 
        "txt-fit": '',
        "txt-font": 'Arial', 
        "txt-size": 16, 
        "txt-line": 0,
        "txt-line-color": '',
        "txt-shad": 0,
    }
}
