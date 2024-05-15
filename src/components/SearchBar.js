'use client'

import React from 'react';

const SearchBar = ({ onSearch, onInputChange }) => {
    const handleSearch = () => {
        onSearch();
    };

    return (
        <div>
            <input
                className='border-2'
                type="text"
                onChange={onInputChange}
                placeholder="Recherche..."
            />
            <button
            className='btn-search m-1' 
            onClick={handleSearch}>
                OK
            </button>
        </div>
    );
};

export default SearchBar;
