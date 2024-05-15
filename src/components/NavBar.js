'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar';
import SearchForm from './SearchForm';

const NavBar = ({ onSearch }) => {
    const [isClick, setIsClick] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleToggleClick = () => {
        setIsClick(!isClick);
    };

    const handleInputChange = (event) => {
        setTimeout(function () {
            setSearchTerm(event.target.value);
        }, 300)
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
<<<<<<< HEAD
            <nav className='navbar-nav w-full bg-white shadow-md flex items-center justify-between px-4'>
                {/* Logo */}
=======
        <header>
            <nav className='navbar-nav w-full bg-white shadow-md flex items-center justify-between'>
                
>>>>>>> af5a27a55986155ddcf12d0b48cce6a971ec9e69
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
<<<<<<< HEAD
                {/* Bouton de recherche et barre de recherche */}
                <div className='hidden lg:flex m-2'>
                        {/* <SearchBar onSearch={handleSearch} onInputChange={handleInputChange} /> */}
                        <SearchForm />
                </div>

                {/* Liens de navigation */}
=======
                
>>>>>>> af5a27a55986155ddcf12d0b48cce6a971ec9e69
                <div className='hidden lg:flex'>
                    <ul className='flex gap-5'>
                        <li className='hover:border-b-2'><a href='/batiment'>Bâtiment</a></li>
                        <li className='hover:border-b-2'><a href='/services'>Services</a></li>
                        <li className='hover:border-b-2'><a href='fabrication'>Fabrication</a></li>
                        <li className='hover:border-b-2'><a href='alimentation'>Alimentation</a></li>
                    </ul>
                </div>
<<<<<<< HEAD
                {/* Menu déroulant pour les petits écrans */}
                <button className='m-2 p-2 rounded bg-white hover:bg-slate-50 block cursor-pointer border lg:hidden' onClick={handleToggleClick}>
                        {/* Icône du bouton de recherche */}
                        Menu
                </button>
                {isClick && (
                <div className='m-2 translate-y-36 transition-all ease-in-out delay-500 z-50 absolute right-0 bg-white border shadow border-t-0 rounded-b-md p-4 mr-0 border-r-0'>
                    <ul className='flex flex-col justify-end'>
                        <li className='m-2'><a href='/batiment'>Bâtiment</a></li>
                        <li className='m-2'><a href='/services'>Services</a></li>
                        <li className='m-2'><a href='fabrication'>Fabrication</a></li>
                        <li className='m-2'><a href='alimentation'>Alimentation</a></li>
                    </ul>
                </div>
                )}
            </nav>
=======
                
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
>>>>>>> af5a27a55986155ddcf12d0b48cce6a971ec9e69
    );
};

export default NavBar;
