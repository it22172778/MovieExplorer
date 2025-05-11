import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  Grid,
  Card,
  CardMedia,
  CircularProgress,
} from '@mui/material';
import { getMovieDetails } from '../api/tmdb';
import {
  saveFavorite,
  removeFavorite,
  isFavorite,
} from '../utils/localStorage';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
        setFav(isFavorite(movieData.id));
      } catch (error) {
        console.error('Error loading movie details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const toggleFavorite = () => {
    if (fav) {
      removeFavorite(movie.id);
    } else {
      saveFavorite({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
      });
    }
    setFav(!fav);
  };

  if (loading) {
    return (
      <Container sx={{ mt: 4 }}>
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (!movie) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" color="error">
          Movie not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Card>
          <Button
            variant={fav ? 'outlined' : 'contained'}
            color="secondary"
            onClick={toggleFavorite}
            fullWidth
            sx={{ mt: 2 }}
          >
            {fav ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {movie.release_date} | Rating: {movie.vote_average}
          </Typography>

          <Box sx={{ mb: 2 }}>
            {movie.genres?.map((genre) => (
              <Chip
                key={genre.id}
                label={genre.name}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>

          <Typography variant="body1" paragraph>
            {movie.overview}
          </Typography>

          <Typography variant="h6" sx={{ mt: 3 }}>
            Cast
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {movie.cast?.map((actor) => (
              <Chip key={actor.id} label={actor.name} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetails;
