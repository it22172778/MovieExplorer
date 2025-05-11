// src/api/tmdb.js
import axios from 'axios';

// Create Axios instance with base settings
const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '71271f2e626650d74890420c803b18db',
    language: 'en-US',
  },
});

// Fetch trending movies (weekly)
export const fetchTrendingMovies = async () => {
  try {
    const response = await tmdb.get('/trending/movie/week');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

// Search movies by keyword and page
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await tmdb.get('/search/movie', {
      params: { query, page },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching for movies:', error);
    throw error;
  }
};

// Get full movie details including videos and cast
export const getMovieDetails = async (movieId) => {
  try {
    const response = await tmdb.get(`/movie/${movieId}`, {
      params: {
        append_to_response: 'videos,credits',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// Fetch available genres (useful for filters)
export const fetchGenres = async () => {
  try {
    const response = await tmdb.get('/genre/movie/list');
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};

// Discover movies with filters
export const discoverMovies = async (filters = {}) => {
  try {
    const response = await tmdb.get('/discover/movie', {
      params: {
        ...filters,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error discovering movies:', error);
    throw error;
  }
};

export default tmdb;
