import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { ThemeProvider } from '@mui/material';
// import { createTheme } from '@mui/material';
// import { responsiveFontSizes } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';

// const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === 'light'
//       ? {
//           // palette values for light mode
//           primary: {
//             main: '#c1e8ff',
//             contrastText: '#001e2b'
//           },
//           secondary: {
//             main: '#006687',
//             contrastText: '#fff'
//           },
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: {
//             main: '#004d67',
//             contrastText: '#c1e8ff'
//           },
//           secondary: {
//             main: '#73d1ff',
//             contrastText: '#003548'
//           },
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: '#fff',
//             secondary: grey[500],
//           },
//         }),
//   },
// });



// let wheezyTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#aed6ed',
//       contrastText: '#001e2b'
//     },
//     secondary: {
//       main: '#006687',
//       contrastText: '#fff'
//     },
//     contrastThreshold: 4.5,
//     tonalOffset: .2,

//   },
//   typography: {
//     h1: {
//       fontFamily: 'Bakbak One'
//     },
//     h2: {
//       fontFamily: 'Bakbak One'
//     },
//     h3: {
//       fontFamily: 'Bakbak One'
//     },
//     h4: {
//       fontFamily: 'Bakbak One'
//     },
//     h5: {
//       fontFamily: 'Bakbak One'
//     },
//     h6: {
//       fontFamily: 'Bakbak One'
//     }
//   },
// })

// wheezyTheme = createTheme(wheezyTheme, {
//   components: {
//     // Name of the component
//     MuiButton: {
//       styleOverrides: {
//         // Name of the slot
//         root: {
//           // Some CSS
//           backgroundColor: wheezyTheme.palette.secondary.main,
//           boxShadow: '0 3px 1px -2px rgb(0, 0, 0, .2), 0 2px 2px 0px rgb(0, 0, 0, .14), 0 1px 5px 0 rgb(0, 0, 0, .12)',
//           '&:hover, &.Mui-focusVisible': {
//             backgroundColor: '#001e2b',
//             color: wheezyTheme.palette.primary.main,
//             boxShadow: '0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0px rgba(0, 0, 0, .14), 0 1px 10px 0px rgba(0, 0, 0, .12)'
//           }
//         },
//       },
//     },
//   },
// });

// wheezyTheme = responsiveFontSizes(wheezyTheme)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={wheezyTheme}>
      <CssBaseline /> */}
      {/* <Paper> */}
        <App />
      {/* </Paper> */}
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
