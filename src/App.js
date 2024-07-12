import React from 'react';
import { ThemeProvider } from '@mui/material';
import MainView from './components/views/MainView';
import Player from './components/Player';
import theme from './theme'; // Import custom theme
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{backgroundColor: "lime", height: "100vh", width: "100vw"}}>
        <MainView />
        <Player />
      </div>
    </ThemeProvider>
  );
}

export default App;
