'use client'

import React from 'react';

const SearchBar = ({ onSearch, onInputChange }) => {
    const handleSearch = () => {
        onSearch();
    };

    return (
        <div>
            <input
                type="text"
                onChange={onInputChange}
                placeholder="Recherche..."
            />
            <button onClick={handleSearch}>OK</button>
        </div>
    );
};

export default SearchBar;
