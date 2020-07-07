import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import Stock from './components/Stock';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#033617'},
    secondary: {
      main: '#A4BD99',
    }
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


