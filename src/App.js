import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Projects from './components/Projects';
import React from 'react';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

let wheezyThemeLight = createTheme({
  palette: {
    mode:'light',
    background: {
      default: '#fbfcfe'
    },
    
    primary: {
      main: '#006687',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#c1e8ff',
      contrastText: '#001e2b'
    },
    tertiary: {
      main:'#4d616c',
      contrastText:'#ffffff',
    },
    text : {
      main:"#191c1e",
    },
    contrastThreshold: 4.5,
    tonalOffset: .2,
  },
  typography: {
    h1: {
      fontFamily: 'Bakbak One'
    },
    h2: {
      fontFamily: 'Bakbak One'
    },
    h3: {
      fontFamily: 'Bakbak One'
    },
    h4: {
      fontFamily: 'Bakbak One'
    },
    h5: {
      fontFamily: 'Bakbak One'
    },
    h6: {
      fontFamily: 'Bakbak One'
    }
  },
})

let wheezyThemeDark = createTheme({
  palette: {
    mode:'dark',
    background: {
      default: '#191c1e'
    },
    
    primary: {
      main: '#73d1ff',
      contrastText: '#003548'
    },
    secondary: {
      main: '#004d67',
      contrastText: '#c1e8ff',
    },
    tertiary: {
      main:'#b5c9d7',
      contrastText:'#1f333d',
    },
    text : {
      main:"#e1e2e5",
    },
    contrastThreshold: 4.5,
    tonalOffset: .2,
  },
  typography: {
    h1: {
      fontFamily: 'Bakbak One'
    },
    h2: {
      fontFamily: 'Bakbak One'
    },
    h3: {
      fontFamily: 'Bakbak One'
    },
    h4: {
      fontFamily: 'Bakbak One'
    },
    h5: {
      fontFamily: 'Bakbak One'
    },
    h6: {
      fontFamily: 'Bakbak One'
    }
  },
})



wheezyThemeLight = createTheme(wheezyThemeLight, {
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: wheezyThemeLight.palette.secondary.main,
          color: wheezyThemeLight.palette.secondary.contrastText,
          boxShadow: '0 3px 1px -2px rgb(0, 0, 0, .2), 0 2px 2px 0px rgb(0, 0, 0, .14), 0 1px 5px 0 rgb(0, 0, 0, .12)',
          '&:hover, &.Mui-focusVisible': {
            backgroundColor: '#001e2b',
            color: wheezyThemeLight.palette.primary.main,
            boxShadow: '0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0px rgba(0, 0, 0, .14), 0 1px 10px 0px rgba(0, 0, 0, .12)'
          }
        },
      },
    },
  },
});

wheezyThemeDark = createTheme(wheezyThemeDark, {
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: wheezyThemeDark.palette.secondary.main,
          color: wheezyThemeDark.palette.secondary.contrastText,
          boxShadow: '0 3px 1px -2px rgb(0, 0, 0, .2), 0 2px 2px 0px rgb(0, 0, 0, .14), 0 1px 5px 0 rgb(0, 0, 0, .12)',
          '&:hover, &.Mui-focusVisible': {
            backgroundColor: '#c1e8ff',
            color: '#004d67',
            boxShadow: '0 2px 4px -1px rgba(0, 0, 0, .3), 0 4px 5px 0px rgba(0, 0, 0, .24), 0 1px 10px 0px rgba(0, 0, 0, .22)'
          }
        },
      },
    },
  },
});

wheezyThemeLight = responsiveFontSizes(wheezyThemeLight)
wheezyThemeDark = responsiveFontSizes(wheezyThemeDark)

export default function App() {
  const [mode, setMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('Home');
  // true will equal dark mode
  const toggleMode = () => {setMode(!mode)}

  const renderMainSection = () => {
    if (currentPage === 'Home') {
      return <Main />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    // return <Main />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  console.log(mode + ' mode in app')  
  
  return (
    <ThemeProvider theme={mode ? wheezyThemeDark : wheezyThemeLight}>
      <CssBaseline/>
        <Header toggleMode={toggleMode} mode={mode} handlePageChange={handlePageChange} currentPage={currentPage} />
        {renderMainSection()}
        <Footer />
   </ThemeProvider>
  );
}

