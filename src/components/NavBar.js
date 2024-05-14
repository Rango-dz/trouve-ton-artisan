'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar';

const NavBar = ({ onSearch }) => {
    const [isClick, setIsClick] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleToggleClick = () => {
        setIsClick(!isClick);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <header>
            <nav className='navbar-nav w-full bg-white shadow-md flex items-center justify-between'>
                {/* Logo */}
                <div className='flex justify-start'>
                    <a href='/'>
                        <Image
                            src='/Logo.png'
                            alt="Logo"
                            width={180}
                            height={180}
                            priority
                        />
                    </a>
                </div>
                {/* Liens de navigation */}
                <div className='hidden lg:flex'>
                    <ul className='flex gap-5'>
                        <li className='hover:border-b-2'><a href='/batiment'>Bâtiment</a></li>
                        <li className='hover:border-b-2'><a href='/services'>Services</a></li>
                        <li className='hover:border-b-2'><a href='fabrication'>Fabrication</a></li>
                        <li className='hover:border-b-2'><a href='alimentation'>Alimentation</a></li>
                    </ul>
                </div>
                {/* Bouton de recherche et barre de recherche */}
                <div className=''>
                    <button className='m-5 lg:hidden' onClick={handleToggleClick}>
                        {/* Icône du bouton de recherche */}
                    </button>
                    <div className='hidden lg:flex m-2'>
                        <SearchBar onSearch={handleSearch} onInputChange={handleInputChange} />
                    </div>
                </div>
                {/* Menu déroulant pour les petits écrans */}
                {isClick && (
                    <div className='m-5'>
                        <ul className='flex flex-col items-center'>
                            <li className='m-2'><a href='/batiment'>Bâtiment</a></li>
                            <li className='m-2'><a href='/services'>Services</a></li>
                            <li className='m-2'><a href='fabrication'>Fabrication</a></li>
                            <li className='m-2'><a href='alimentation'>Alimentation</a></li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default NavBar;
