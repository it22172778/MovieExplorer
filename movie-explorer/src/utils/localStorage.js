// src/utils/localStorage.js

// === Generic Utilities ===
export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getItem = (key, defaultValue = null) => {
    const stored = localStorage.getItem(key);
    try {
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  };
  
  export const removeItem = (key) => {
    localStorage.removeItem(key);
  };
  
  // === Auth Utilities ===
  export const setLoginStatus = (isLoggedIn, username = '') => {
    setItem('isLoggedIn', isLoggedIn);
    setItem('username', username);
  };
  
  export const isUserLoggedIn = () => getItem('isLoggedIn', false);
  export const getUsername = () => getItem('username', '');
  
  // === Favorites Utilities ===
  const FAVORITES_KEY = 'favorites';

  export const getFavorites = () => {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  };

  export const saveFavorite = (movie) => {
    const favorites = getFavorites();
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites, movie]));
  };

  export const removeFavorite = (movieId) => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  };

  export const isFavorite = (movieId) => {
    const favorites = getFavorites();
    return favorites.some((movie) => movie.id === movieId);
  };
  
  // === Last Search ===
  export const saveLastSearch = (query) => setItem('lastSearch', query);
  export const getLastSearch = () => getItem('lastSearch', '');
