// src/components/MovieGrid.jsx
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies, title = 'Results' }) => {
  if (!movies || movies.length === 0) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h6" color="textSecondary">
          No movies found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ px: 2 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 2, mt: 2 }}>
        {title}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={6} sm={4} md={3} lg={2}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieGrid;
