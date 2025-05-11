// src/components/SearchBar.jsx
import React, { useState, useEffect } from 'react';
import { TextField, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { saveLastSearch, getLastSearch } from '../utils/localStorage';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const last = getLastSearch();
    if (last) {
      setQuery(last);
      onSearch(last);
    }
  }, [onSearch]);

  const handleSearch = () => {
    if (query.trim()) {
      saveLastSearch(query);
      onSearch(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <Box display="flex" gap={1} alignItems="center" sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="Search Movies"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <IconButton color="primary" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
