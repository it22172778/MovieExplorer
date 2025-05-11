// src/components/MovieCard.jsx
import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <Card sx={{ maxWidth: 200, borderRadius: 2, boxShadow: 3, m: 1 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="300"
          image={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : 'https://via.placeholder.com/200x300?text=No+Image'
          }
          alt={movie.title}
        />
        <CardContent sx={{ p: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold" noWrap>
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <StarIcon fontSize="small" color="warning" />
            <Typography variant="body2" ml={0.5}>
              {movie.vote_average.toFixed(1)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
