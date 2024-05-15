'use client'

import React from 'react';

const SearchBar = ({ onSearch, onInputChange }) => {
    const handleSearch = () => {
        onSearch();
    };

    return (
        <div className=''>
            <input className=''
                type="text"
                onChange={onInputChange}
                placeholder="Recherche..."
                aria-label="Search input"
            />
            <button onClick={handleSearch} aria-label="Search button">Enter</button>
        </div>
    );
};

export default SearchBar;
