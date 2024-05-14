import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
    <>
        <footer>
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
        <div className='md:flex items-end justify-around ml-5'>
            <div>
                <p>Conseil regional<br/>
                Auvergne-Rhone-Alpes</p>
            </div>
            <div>
                <p>Lyon</p>
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
    
                >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <path d="M15 10 A3 3 0 0 1 12 13 A3 3 0 0 1 9 10 A3 3 0 0 1 15 10 z" />
                </svg>
                <p>101 cours Charlemagne<br/>
                    CS 20033 69269 LYON<br/> 
                    CEDEX 02 France</p>
            </div>
            <div>
            <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
            >
                <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>


                <a href="tel:+33426734000">+33(0)426734000</a>
            </div>
        </div>
        <div className='flex justify-center m-5'>
            <nav>
                <ul className='flex justify-between gap-2 md:gap-10'>
                    <li><a href='/mentionsLegales'>Mentions Légales</a></li>
                    <li><a href='/donneesPrsonnelles'>Données Personnelles</a></li>
                    <li><a href='/accessiblite'>Accéssibilité</a></li>
                    <li><a href='/cookies'>Cookies</a></li>
                </ul>
            </nav>
        </div>
        <div className='reseaux-sociaux flex justify-center p-2'>
            <ul className='flex'>
                <li>
                    <a href='https://www.facebook.com/'>
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                        >
                            <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/'>
                        <svg
                            baseProfile="tiny"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                        >
                            <path d="M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm2.8-2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2zM12 19c-3.9 0-7-3.1-7-7h3c0 2.2 1.8 4 4 4s4-1.8 4-4h3c0 3.9-3.1 7-7 7z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/'>
                        <svg
                            viewBox="0 0 960 1000"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                        >
                            <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/'>
                        <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="2em"
                            width="2em"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
        </footer>
    </>
  )
}

export default Footer