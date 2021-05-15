import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    width: 100
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

export default function SelectComponent({ selectList }) {

  const classes = useStyles();
  const [ selectOption, setSelectOption ] = React.useState('');

  const handleChange = (event) => {
    setSelectOption(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={selectOption}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}>
            {
              selectList.map( (item, key) => {
                return (
                  <MenuItem 
                    key={key} 
                    value={item.value} 
                    onClick={ item.onClick }>
                      { item.itemName }
                  </MenuItem>
                )
              })
            }
        </Select>
      </FormControl>
    </div>
  );
}
