import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
// import ThemeProvider from '@mui/material/ThemeProvider';
import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';



let wheezyTheme = createTheme({
  palette: {
    primary: {
      main: '#aed6ed',
      contrastText: '#001e2b'
    },
    contrastThreshold:4.5,
    tonalOffset:.2,

  },
  typography: {
    h1: {
      fontFamily:'Bakbak One'
    },
    h2: {
      fontFamily:'Bakbak One'
    },
    h3: {
      fontFamily:'Bakbak One'
    },
    h4: {
      fontFamily:'Bakbak One'
    },
    h5: {
      fontFamily:'Bakbak One'
    },
    h6: {
      fontFamily:'Bakbak One'
    }
  }
})
wheezyTheme = responsiveFontSizes(wheezyTheme)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={wheezyTheme}>
    <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
