'use client'

import { useState } from 'react';
import React from 'react';
import datas from '/public/datas';
import { Link } from 'lucide-react';

const Fabrication = () => {
  const category = "Fabrication";
  const [dataId, setDataId] = useState(null); 

  const handleClick = (id) => {
    setDataId(id);
    localStorage.setItem('dataId', id)
  };
 
  return (
    <>
    <div>
          <h1 className='flex justify-center p-5'>Fabrication</h1>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-5'>
            
              {datas.map(item => (
                (category===item.category)
                 && (
                  
                      <button
                          key={item.id}
                          onClick={() => handleClick(item.id)} 
                          className={`border-2 p-5 ${item.id === dataId ? 'bg-gray-200' : ''}`} 
                      >
                        <Link href='pageArtisan'>
                          <ul className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <li><h5>{item.name}</h5></li>
                            <li>{item.category}</li>
                            <li>{item.location}</li>
                            <li>{item.note}</li>
                          </ul>
                        </Link>
                </button>
              )))}

          </div>
          </div>
    </>
  )
}

export default Fabrication;
