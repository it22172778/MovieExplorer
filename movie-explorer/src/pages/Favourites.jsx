// src/pages/Favorites.jsx
import React, { useEffect, useState } from 'react';
import { Grid, Typography, Container, Button } from '@mui/material';
import MovieCard from '../components/MovieCard';
import {
  getFavorites,
  removeFavorite as removeFavoriteFromStorage,
} from '../utils/localStorage';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const removeFavorite = (movieId) => {
    removeFavoriteFromStorage(movieId);
    setFavorites(getFavorites()); // Update state after removal
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Favorite Movies
      </Typography>

      {favorites.length === 0 ? (
        <Typography variant="h6" color="text.secondary">
          You haven’t added any favorites yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie}>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => removeFavorite(movie.id)}
                  sx={{ mt: 1 }}
                >
                  Remove
                </Button>
              </MovieCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Favorites;
