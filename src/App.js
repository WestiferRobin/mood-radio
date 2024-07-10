// App.js

import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, ThemeProvider } from '@mui/material';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Player from './components/Player';
import theme from './theme'; // Import custom theme
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{backgroundColor: "lime", height: "100vh", width: "100vw"}}>
        <MainContent />
        <Player />
      </div>
    </ThemeProvider>
  );
}

export default App;
