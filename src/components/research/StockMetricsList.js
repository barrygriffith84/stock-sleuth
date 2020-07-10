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


export default function StockMetricsList(props) {
      const classes = useStyles();

      return (
            <div className={classes.root}>
                  <List component="nav" aria-label="company profile">
                        <ListItem>
                              <Tooltip title="The daily average number of shares or contracts traded for a given security over a three-month period">
                                    <ListItemText primary="Three Month Average Trading Volume" secondary={props.stock["3MonthAverageTradingVolume"]} />
                              </Tooltip>
                        </ListItem>
                        <Divider />
                        <ListItem>
                              <Tooltip title="The daily average number of shares or contracts traded for a given security over a 10-day period">
                                    <ListItemText primary="Ten Day Average Trading Volume" secondary={props.stock["10DayAverageTradingVolume"]} />
                              </Tooltip>

                        </ListItem>
                        <Divider />
                        <ListItem>
                              <Tooltip title="The highest price a security was traded at over the last 52 weeks">
                                    <ListItemText primary="52 Week High" secondary={props.stock["52WeekHigh"]} />
                              </Tooltip>

                        </ListItem>
                        <Divider />
                        <ListItem>
                              <Tooltip title="The date the highest price a security was traded at over the last 52 weeks took place">

                                    <ListItemText primary="52 Week High Date" secondary={props.stock["52WeekHighDate"]} />
                              </Tooltip>

                        </ListItem>
                        <Divider />
                        <ListItem>
                              <Tooltip title="The lowest price a security was traded at over the last 52 weeks">
                                    <ListItemText primary="52 Week Low" secondary={props.stock["52WeekLow"]} />
                              </Tooltip>

                        </ListItem>
                        <Divider />
                        <ListItem>
                              <Tooltip title="The date the lowest price a security was traded at over the last 52 weeks took place">
                                    <ListItemText primary="52 Week Low Date" secondary={props.stock["52WeekLowDate"]} />
                              </Tooltip>

                        </ListItem>
                        <Divider />

                        <ListItem>
                              <Tooltip title="A measure of stock market volitility relative to the market  A bet of 1.00 means the stock's volitility follows market volitility.  A beta 0f -1.00 means the stock's volitity is the inverse of the market's volitility.">
                                    <ListItemText primary="Beta" secondary={props.stock["beta"]} />
                              </Tooltip>
                        </ListItem>

                        <Divider />

                  </List>
            </div>
      );
}