import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function HedgeFundSelect(props) {
  const classes = useStyles();
  const [hedgeIndex, setIndex] = React.useState('');

  const handleChange = (event) => {
    setIndex(event.target.value);
    props.SelectFund(event.target.value);
  };

  return (
    <div>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Hedge Funds</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={hedgeIndex}
          onChange={handleChange}
          label="Hedge Fund"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1410833}>Night Owl</MenuItem>
          <MenuItem value={1315765}>Cedar Rock</MenuItem>
          <MenuItem value={1112520}>Akre Capital</MenuItem>
          <MenuItem value={1135730}>Coatue</MenuItem>
          <MenuItem value={1061165}>Lone Pine</MenuItem>
          <MenuItem value={1020066}>Sands</MenuItem>
          <MenuItem value={1541617}>Altimeter</MenuItem>
          <MenuItem value={1512384}>Kylin</MenuItem>
          <MenuItem value={1512171}>Route One</MenuItem>
          <MenuItem value={1343781}>Health Cor</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}
