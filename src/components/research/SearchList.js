import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function SearchList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <List component="nav" aria-label="stock search results">
        
       { props.searchResults.map((stock) => 
        <>
        <ListItem button component={RouterLink} key={stock["1. symbol"]}  to={`/research/details/${stock["1. symbol"]}`}>
          <ListItemText primary={stock["1. symbol"]} secondary={stock["2. name"]}  /> 
          
        </ListItem>
        <Divider />
        </>
        )}
          
      </List>
    </div>
  );
}
