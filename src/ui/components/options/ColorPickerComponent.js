import React from "react";

import { ColorPicker } from "material-ui-color";

export default function ColorPickerComponent( props ) {

    const {
        setParams,
        paramsValue,
        color,
        setColor,
        onClick
    } = props;
    

  const handleChange = (value) => {
    setColor(value);
    setParams( paramsValue )
  };

  return (
      <div className="alignX">
        <ColorPicker 
          value={color} 
          onChange={ handleChange }
          aria-label="#000" />
        <div className="btnFAB btn-reset">
          <i 
            className="material-icons reset-icon"
            onClick={ onClick }>restart_alt</i>
        </div>
      </div>
  );
}