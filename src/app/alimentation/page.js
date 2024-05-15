'use client'

import { useState } from 'react';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import React from 'react';
import datas from '/public/datas';

const Alimentation = () => {
  const category = "Alimentation";
  const [dataId, setDataId] = useState(null); 

  const handleClick = (id) => {
    setDataId(id);
    localStorage.setItem('dataId', id)
  };
 
  return (
    <>
      <NavBar/>
      <main className='m-0 p-0'>
          <h1 className='text-3xl flex justify-center m-5 p-5'>Alimentation</h1>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-5'>
            
              {datas.map(item => (
                (category===item.category)
                 && (
                  
                      <button
                          key={item.id}
                          onClick={() => handleClick(item.id)} 
                          className={`border-2 p-5 ${item.id === dataId ? 'bg-gray-200' : ''}`} 
                      >
                        <a href='pageArtisan'>
                          <ul className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <li><h5>{item.name}</h5></li>
                            <li>{item.category}</li>
                            <li>{item.location}</li>
                            <li>{item.note}</li>
                          </ul>
                        </a>
                </button>
                
              )))}

          </div>
        </main>
      <Footer/>
    </>
  )
}

export default Alimentation;
