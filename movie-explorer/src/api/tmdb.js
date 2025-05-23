// src/api/tmdb.js
import axios from 'axios';

//  Use .env variable for security
const API_KEY = '71271f2e626650d74890420c803b18db';

// Create Axios instance with base settings
const BASE_URL = 'https://api.themoviedb.org/3';
const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
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
    throw new Error('Unable to fetch trending movies.');
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
    throw new Error('Unable to search for movies.');
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

    // Extract trailer from videos
    const trailer = response.data.videos?.results.find(
      (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
    );

    return {
      ...response.data,
      trailer,
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw new Error('Unable to fetch movie details.');
  }
};

// Fetch available genres (useful for filters)
export const fetchGenres = async () => {
  try {
    const response = await tmdb.get('/genre/movie/list');
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw new Error('Unable to fetch genres.');
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
    throw new Error('Unable to discover movies.');
  }
};

// Fetch movie trailer
export const getMovieTrailer = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
    );
    const trailers = response.data.results.filter(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );
    return trailers.length > 0 ? trailers[0] : null;
  } catch (error) {
    console.error('Error fetching movie trailer:', error);
    return null;
  }
};

export default tmdb;
