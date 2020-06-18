import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import Stock from './components/Stock';
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: blue
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
    <Stock />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);


