import React from 'react';
import { ThemeProvider } from '@mui/material';
import MainView from './components/views/MainView';
import theme from './theme'; // Import custom theme
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MainView />
      </div>
    </ThemeProvider>
  );
}

export default App;
