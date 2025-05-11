// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { isUserLoggedIn, setLoginStatus, getUsername } from '../utils/localStorage';
import ThemeToggle from './ThemeToggle'; // ✅ Import reusable theme toggle component

const Header = () => {
  const navigate = useNavigate();
  const loggedIn = isUserLoggedIn();
  const username = getUsername();

  const handleLogout = () => {
    setLoginStatus(false);
    navigate('/login');
  };

  return (
    <AppBar position="static" color="primary" enableColorOnDark sx={{ mb: 4 }}>
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
          {/* Home Button */}
          <Button
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{ textTransform: 'none' }}
          >
            Home
          </Button>

          {/* Favorites Button */}
          <Button
            component={RouterLink}
            to="/favorites"
            color="inherit"
            sx={{ textTransform: 'none' }}
          >
            Favorites
          </Button>

          {/* Login/Logout Section */}
          {loggedIn ? (
            <>
              <Typography variant="body1" sx={{ mx: 2 }}>
                Welcome, {username}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button
              component={RouterLink}
              to="/login"
              color="inherit"
              sx={{ textTransform: 'none' }}
            >
              Login
            </Button>
          )}

          {/* Theme Toggle Component */}
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
