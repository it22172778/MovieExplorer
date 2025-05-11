import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
    },
  },
};

// 🌞 Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // blue
    },
    secondary: {
      main: '#f50057', // pink
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
  },
  ...commonSettings,
});

// 🌚 Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // light blue
    },
    secondary: {
      main: '#f48fb1', // soft pink
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  ...commonSettings,
});
