// src/context/MovieContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const MovieContext = createContext();

// Create the provider
export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [lastSearch, setLastSearch] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const savedSearch = localStorage.getItem('lastSearch') || '';
    setFavorites(savedFavorites);
    setLastSearch(savedSearch);
  }, []);

  // Save to localStorage when favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Save last search query
  useEffect(() => {
    localStorage.setItem('lastSearch', lastSearch);
  }, [lastSearch]);

  const addFavorite = (movie) => {
    if (!favorites.find((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (movieId) => {
    setFavorites(favorites.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  return (
    <MovieContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        lastSearch,
        setLastSearch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
