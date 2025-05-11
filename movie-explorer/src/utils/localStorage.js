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
  export const getFavorites = () => getItem('favorites', []);
  export const saveFavorite = (movie) => {
    const current = getFavorites();
    const updated = [...current, movie];
    setItem('favorites', updated);
  };
  
  export const removeFavorite = (movieId) => {
    const updated = getFavorites().filter((movie) => movie.id !== movieId);
    setItem('favorites', updated);
  };
  
  export const isFavorite = (movieId) => {
    return getFavorites().some((movie) => movie.id === movieId);
  };
  
  // === Last Search ===
  export const saveLastSearch = (query) => setItem('lastSearch', query);
  export const getLastSearch = () => getItem('lastSearch', '');
  