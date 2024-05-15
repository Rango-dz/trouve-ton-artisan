'use client'

import React from 'react';

const SearchBar = ({ onSearch, onInputChange }) => {
    const handleSearch = () => {
        onSearch();
    };

    return (
<<<<<<< HEAD
        <div className=''>
            <input className=''
=======
        <div>
            <input
                className='border-2'
>>>>>>> af5a27a55986155ddcf12d0b48cce6a971ec9e69
                type="text"
                onChange={onInputChange}
                placeholder="Recherche..."
                aria-label="Search input"
            />
<<<<<<< HEAD
            <button onClick={handleSearch} aria-label="Search button">Enter</button>
=======
            <button
            className='btn-search m-1' 
            onClick={handleSearch}>
                OK
            </button>
>>>>>>> af5a27a55986155ddcf12d0b48cce6a971ec9e69
        </div>
    );
};

export default SearchBar;
