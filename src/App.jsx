import {
  Grid,
  CssBaseline
} from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import './App.css'

import { ErrorBoundary } from './components/ErrorBoundary';
import { Layout } from './components/Layout';

function App() {
  console.log( 'cunt',import.meta.url)
  const theme = createTheme({
    palette: {
      primary: {
        main: '#003333'
      },
      secondary: {
        main: '#CCCCCC'
      }
    },
    typography: {
      fontFamily: ["Alegreya SC", "Open Sans"].join(),
      body1: {
        fontFamily: "Open Sans"
      },
      body2: {
        fontFamily: "Open Sans"
      }
    }
  });

  return (
    <Grid
      container 
      direction='column'
    >
      <Grid item>
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          <CssBaseline />
          <ErrorBoundary>
            <Layout />
          </ErrorBoundary>
        </ThemeProvider>
      </Grid>
    </Grid>
  )
}

export default App;
