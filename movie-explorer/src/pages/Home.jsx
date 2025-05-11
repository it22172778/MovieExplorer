// src/pages/Home.jsx
import React, { useEffect, useState, useContext } from 'react';
import { Box, CircularProgress, Typography, Container } from '@mui/material';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import { fetchTrendingMovies, searchMovies } from '../api/tmdb';
import { MovieContext } from '../context/MovieContext';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { lastSearch, setLastSearch } = useContext(MovieContext);

  // Fetch trending movies on mount
  useEffect(() => {
    const loadTrending = async () => {
      try {
        setLoading(true);
        const data = await fetchTrendingMovies();
        setTrending(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch trending:', err);
        setError('Failed to load trending movies.');
      } finally {
        setLoading(false);
      }
    };

    loadTrending();

    // If last search exists, perform it
    if (lastSearch) {
      handleSearch(lastSearch);
    }
  }, []);

  // Search handler
  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(query);
      setMovies(data.results);
      setLastSearch(query);
    } catch (err) {
      console.error('Search failed:', err);
      setError('Movie search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" align="center" mt={4}>
          {error}
        </Typography>
      ) : movies.length > 0 ? (
        <MovieGrid movies={movies} title={`Results for "${lastSearch}"`} />
      ) : (
        <MovieGrid movies={trending} title="Trending Movies" />
      )}
    </Container>
  );
};

export default Home;
