import React, { createContext, useMemo, useState, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

// Create the ColorModeContext
const ColorModeContext = createContext();

// Custom hook to use the ColorModeContext
export const useColorMode = () => useContext(ColorModeContext);

// Provider component to manage light/dark mode
export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light'); // Default mode is 'light'

  // Function to toggle between light and dark mode
  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Memoize the theme to avoid unnecessary re-renders
  const theme = useMemo(
    () => createTheme(mode === 'light' ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
