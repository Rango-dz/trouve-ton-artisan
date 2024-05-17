'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import SearchForm from './SearchFormHeader';
import Link from 'next/link';

const NavBar = ({ onSearch }) => {
    const [isClick, setIsClick] = useState(false);

    const handleToggleClick = () => {
        setIsClick(!isClick);
    };





    return (
            <nav className='navbar-nav w-full bg-white shadow-md flex items-center justify-between px-4'>
                {/* Logo */}
                <div className='flex justify-start'>
                    <Link href='/'>
                        <Image
                            src='/Logo.png'
                            alt="Logo"
                            width={180}
                            height={180}
                            priority
                        />
                    </Link>
                </div>
                {/* Bouton de recherche et barre de recherche */}
                <div className='hidden lg:flex m-2'>
                        {/* <SearchBar onSearch={handleSearch} onInputChange={handleInputChange} /> */}
                        <SearchForm />
                </div>

                {/* Liens de navigation */}
                <div className='hidden lg:flex'>
                    <ul className='flex gap-5'>
                        <li className='hover:border-b-2'><Link href='/categories/batiment'>Batiment</Link></li>
                        <li className='hover:border-b-2'><Link href='/categories/services'>Services</Link></li>
                        <li className='hover:border-b-2'><Link href='/categories/fabrication'>Fabrication</Link></li>
                        <li className='hover:border-b-2'><Link href='/categories/alimentation'>Alimentation</Link></li>
                    </ul>
                </div>
                {/* Menu déroulant pour les petits écrans */}
                <button className='m-2 p-2 rounded bg-white hover:bg-slate-50 block cursor-pointer border lg:hidden' onClick={handleToggleClick}>
                        {/* Icône du bouton de recherche */}
                        Menu
                </button>
                {isClick && (
                <div className='m-2 translate-y-36 transition-all ease-in-out delay-500 z-50 absolute right-0 bg-white border shadow border-t-0 rounded-b-md p-4 mr-0 border-r-0'>
                    <ul className='flex flex-col justify-end'>
                        <li className='m-2'><Link href='/categories/batiment'>Batiment</Link></li>
                        <li className='m-2'><Link href='/categories/services'>Services</Link></li>
                        <li className='m-2'><Link href='/categories/fabrication'>Fabrication</Link></li>
                        <li className='m-2'><Link href='/categories/alimentation'>Alimentation</Link></li>
                    </ul>
                </div>
                )}
            </nav>
    );
};

export default NavBar;
