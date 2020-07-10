import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function SimpleList(props) {
  const classes = useStyles();

  console.log(props)

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="company profile">
        <ListItem>
          <Tooltip title="A stock symbol is a unique series of letters assigned to a security for trading purposes. New York Stock Exchange (NYSE) and American Stock Exchange (AMEX) listed stocks have three characters or less. Nasdaq-listed securities have four or five characters. ">
            <ListItemText primary="Symbol" secondary={props.profile.ticker} />
          </Tooltip>
        </ListItem>
        <Divider />
        <ListItem>
          <Tooltip title="The name of the company.">
            <ListItemText primary="Company" secondary={props.profile.name} />
          </Tooltip>

        </ListItem>
        <Divider />
        <ListItem>
          <Tooltip title="The industry the company operates in.">
            <ListItemText primary="Industry" secondary={props.profile.finnhubIndustry} />
          </Tooltip>

        </ListItem>
        <Divider />
        <ListItem>
          <Tooltip title="The exchange that the security is traded on.">
            <ListItemText primary="Exchange" secondary={props.profile.exchange} />
          </Tooltip>

        </ListItem>
        <Divider />
        <ListItem>
          <Tooltip title="The web address of the company">
            <ListItemText primary="Web Address" secondary={props.profile.weburl} />
          </Tooltip>

        </ListItem>
        <Divider />

        <ListItem>
          <Tooltip title="How much the company is worth.  Calculated by taking the current price of the security and multiplying it by the number of shares outstanding">
            <ListItemText primary="Market Capitalization (Millions)" secondary={props.profile.marketCapitalization} />
          </Tooltip>

        </ListItem>
        <Divider />
        <ListItem>
          <Tooltip title="The number of shares currently held by all of its shareholders">
            <ListItemText primary="Shares Outstanding (Millions)" secondary={props.profile.shareOutstanding} />
          </Tooltip>

        </ListItem>
        <Divider />
      </List>
    </div>
  );
}
