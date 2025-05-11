// src/components/Header.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; // ✅ Import reusable theme toggle component

const Header = () => {
  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* App Title */}
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
        >
          🎬 Movie Explorer
        </Typography>

        {/* Navigation Links + Theme Toggle */}
        <Box display="flex" alignItems="center" gap={2}>
          <Button
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{ textTransform: 'none' }}
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/favorites"
            color="inherit"
            sx={{ textTransform: 'none' }}
          >
            Favorites
          </Button>

          {/* Theme Toggle Component */}
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
