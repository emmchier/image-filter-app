export const useGlobalState = () => {

    return {
        // adjustment (all sliders -100 to 100. 0 default)

          // ADJUST LIGHT
          con: 0, // constrast LIGHT
          bri: 0, // brigtness LIGHT
          exp: 0, // exposure= light LIGHT
          high: 0, // opacitiy ( -100 to 0) LIGHT
          vib: 0, // intensity
          // ADJUST COLOR
          hue: 0, // filter color (0 to 359)
          sat: 0, // saturation LIGHT
          gam: 0, // gamma brigtness in same color LIGHT

        // ADJUST SIZE
        fit: 'clip', // size effects (select)
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
    }
}
