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


export default function StockMetricsList(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="company profile">
        <ListItem button>
  <ListItemText primary="Three Month Average Trading Volume" secondary={props.stock["3MonthAverageTradingVolume"]} />
        </ListItem>
        <Divider />
        <ListItem button>
  <ListItemText primary="Ten Day Average Trading Volume" secondary={props.stock["10DayAverageTradingVolume"]} />
        </ListItem>
        <Divider />
        <ListItem button>
  <ListItemText primary="52 Week High" secondary={props.stock["52WeekHigh"]} />
        </ListItem>
        <Divider />
        <ListItem button>
  <ListItemText primary="52 Week High Date" secondary={props.stock["52WeekHighDate"]} />
        </ListItem>
        <Divider />
        <ListItem button>
  <ListItemText primary="52 Week Low" secondary={props.stock["52WeekLow"]} />
        </ListItem>
        <Divider />
        <ListItem button>
  <ListItemText primary="52 Week Low Date" secondary={props.stock["52WeekLowDate"]} />
        </ListItem>
        <Divider />
        <ListItem button>
  <ListItemText primary="Beta" secondary={props.stock["beta"]} />
        </ListItem>
        <Divider />
   
      </List>
    </div>
  );
}