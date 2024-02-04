import { useState } from 'react'
import {
  Paper,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ErrorBoundary } from './components/ErrorBoundary';
import { BandCampPlayer } from './components/BandCampPlayer';
import { SpotifyPlayer } from './components/SpotifyPlayer';
import { Link } from 'react-dom';

import './App.css'

const theme = {
  palette: {
    primary: '#c2c2c2',
    secondary: 'FFFFFF'
  }
}

function App() {
  return (
    <div>
      <ThemeProvider theme={createTheme()}>
        <ErrorBoundary>
          
          <Paper elevation={2} color='primary'>
            <Typography>Phil Norman</Typography>
            <BandCampPlayer album="901286560" />
          </Paper>
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  )
}

export default App;
