import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom"
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar >
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Tabs variant="fullWidth" indicatorColor="primary" value={0} >
                            <Tab label="Stock Sleuth" component={Link} to="/"  />
                            <Tab label="My Portfolio" component={Link} to="/portfolio" />
                            <Tab label="Stock Research" component={Link} to="/research" />
                            <Tab label="Hedge Funds" component={Link} to="/hedge" />

                        </Tabs>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
