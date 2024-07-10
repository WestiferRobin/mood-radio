// theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // main: '#00FF00', // Spotify green
      main: '#FFFFFF'
    },
    background: {
      default: '#000000', // Dark background color
    },
    text: {
      primary: '#FFFFFF', // White text color
      secondary: '#888888', // Light grey text color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Customize font family
  },
});

export default theme;
