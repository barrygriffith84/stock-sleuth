import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function SimpleList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="company profile">
        <ListItem button>
  <ListItemText primary="Symbol" secondary={props.profile.ticker} />
        </ListItem>
        <Divider />
        <ListItem button>
  <ListItemText primary="Company" secondary={props.profile.name} />
        </ListItem>
        <Divider />
        <ListItem button>
  <ListItemText primary="Market Capitalization (Millions)" secondary={props.profile.marketCapitalization} />
        </ListItem>
        <Divider />
        <ListItem button>
  <ListItemText primary="Shares Outstanding (Millions)" secondary={props.profile.shareOutstanding} />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}
