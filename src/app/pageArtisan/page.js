'use client'

import React from 'react'
import datas from '/public/datas'
import ContactForm from '@/components/ContactForm'

const artisan = () => {

    const dataId = getItem('dataId');
  return (
    <>
        <div className="flex w-full">
            {datas.map(item=>(
                (dataId===item.id)&&
                (<div key={item.id} className='w-full md:flex justify-around'>
                    <div className="pb-10 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 m-5 ">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{item.name}</h1>
                            <p className="mt-4 text-xl">{item.about}</p>
                        </div>
                        <div className="sm:max-w-lg">
                            <ul className="mt-4 text-xl">
                                <li className="">{item.specialty}</li>
                                <li>{item.location}</li>
                                <li>{item.note}</li>
                            </ul>
                        </div>
                    </div>



                      
                        
                            
                    <div className="pb-10 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 m-5 ">
                                    
                                        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                                            <div className="sm:max-w-lg">
                                                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Envoyer votre message</h2>
                                            </div>
                                            <div className="inline-block">
                                                <ContactForm/>
                                            </div>
                                        </div>
                                    
                                </div>
                            
                        
                    
                </div> 
            )))}
        </div>
    </>
  )
}

export default artisan