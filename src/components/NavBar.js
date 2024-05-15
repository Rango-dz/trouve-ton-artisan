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
                
                <div className='hidden lg:flex'>
                    <ul className='flex gap-5'>
                        <li className='hover:border-b-2'><a href='/batiment'>Bâtiment</a></li>
                        <li className='hover:border-b-2'><a href='/services'>Services</a></li>
                        <li className='hover:border-b-2'><a href='fabrication'>Fabrication</a></li>
                        <li className='hover:border-b-2'><a href='alimentation'>Alimentation</a></li>
                    </ul>
                </div>
                
                <div className=' inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>          
                    <button className='lg:hidden'
                     onClick={handleToggleClick}>
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                    >
                        <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                    </svg>
                    </button>
                </div>
                <div className='hidden lg:flex m-2'>
                    <SearchBar onSearch={handleSearch} onInputChange={handleInputChange} />
                </div>
                
            </nav>

            {isClick && (
                    <div className="navbar-nav w-full shadow-md items-center">
                        <ul className='space-y-1 item-center px-2 pb-3 pt-2'>
                            <li className='m-2'><a href='/batiment'>Bâtiment</a></li>
                            <li className='m-2'><a href='/services'>Services</a></li>
                            <li className='m-2'><a href='fabrication'>Fabrication</a></li>
                            <li className='m-2'><a href='alimentation'>Alimentation</a></li>
                        </ul>
                        <div>
                            <SearchBar/>
                        </div>
                    </div>
                )}

        </header>
    );
};

export default NavBar;
