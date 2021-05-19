import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchComponent(props) {

    const { onChange, isChecked } = props;

  return (
    <FormControlLabel
        value="start"
        labelPlacement="start"
        control={
            <Switch
                checked={isChecked}
                onChange={ onChange }
                name="checkedB"
                color="primary"
            />
        }
        label="Negative"
    />
  );
}
