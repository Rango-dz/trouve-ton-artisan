'use client'
import Image from "next/image";
import datas from "/public/datas";
import { useState } from "react";

export default function Home() {
  // Définir l'état local pour dataId
  const [dataId, setDataId] = useState(null);

  // Supposons que vous avez une fonction handleClick pour gérer les clics sur les boutons
  const handleClick = (id) => {
    setDataId(id);
  };

  
  const top = true;

  return (
    <>
      <main>
        <h1 className="p-5 flex justify-center">Comment trouver ton artisan</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-5">
          <div className="md:col-span-1">
            <Image
              src="/menu-145776_640.webp"
              alt="photo menu"
              width={180}
              height={180}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            <div>
              <h3 className="text-sm text-gray-700">
                1.Choisir la catégorie d’artisanat dans le menu.
              </h3>
            </div>
          </div>
          <div className="md:col-span-1">
            <Image
              src="/man-5690424_640.webp"
              alt="photo menu"
              width={180}
              height={180}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            <div>
              <h3 className="text-sm text-gray-700">
                1.Choisir la catégorie d’artisanat dans le menu.
              </h3>
            </div>
          </div>
          <div className="md:col-span-1">
            <Image
              src="/call-center-7040784_640.webp"
              alt="photo menu"
              width={180}
              height={180}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            <div>
              <h3 className="text-sm text-gray-700">
                1.Choisir la catégorie d’artisanat dans le menu.
              </h3>
            </div>
          </div>
          <div className="md:col-span-1">
            <Image
              src="/chat-1873543_640.webp"
              alt="photo menu"
              width={180}
              height={180}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            <div>
              <h3 className="text-sm text-gray-700">
                1.Choisir la catégorie d’artisanat dans le menu.
              </h3>
            </div>
          </div>
        </div>

        <h2 className="p-5 m-5 flex justify-center">Les trois artisan du mois</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-5">
          
          {datas.map((item) =>
            top === item.top && (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`border-2 p-5 ${
                  item.id === dataId ? "bg-gray-200" : ""
                }`}
              >
                <a href="pageArtisan">
                  <ul className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <li>
                      <h5>{item.name}</h5>
                    </li>
                    <li>{item.category}</li>
                    <li>{item.location}</li>
                    <li>{item.note}</li>
                  </ul>
                </a>
              </button>
            )
          )}
        </div>
      </main>
    </>
  );
}
