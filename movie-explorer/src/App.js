// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';
import Login from './pages/Login';

import Header from './components/Header';
import { MovieProvider } from './context/MovieContext';
import { ColorModeProvider } from './theme/ColorModeContext';

function App() {
  return (
    <ColorModeProvider>
      <MovieProvider>
        <CssBaseline />
        <Router>
          <Header />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Container>
        </Router>
      </MovieProvider>
    </ColorModeProvider>
  );
}

export default App;
