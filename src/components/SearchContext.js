'use client'
import React, { createContext, useState } from 'react';

const SearchContext = createContext({
  searchResults: [],
  setSearchResults: () => {},
});

const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default { SearchContext, SearchProvider };
