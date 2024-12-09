'use client';

import React from 'react';
import Image from 'next/image';

const CarDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen p-6 space-y-6 lg:space-y-0">
  
      <aside className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-6 space-y-6">
       
        <div>
          <h2 className="text-lg font-bold mb-4">Type</h2>
          <ul className="space-y-2">
            {['Sport (10)', 'SUV (12)', 'MPV (16)', 'Sedan (20)', 'Coupe (14)', 'Hatchback (14)'].map((type, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input type="checkbox" id={`type-${index}`} />
                <label htmlFor={`type-${index}`} className="text-gray-700">{type}</label>
              </li>
            ))}
          </ul>
        </div>

       
        <div>
          <h2 className="text-lg font-bold mb-4">Capacity</h2>
          <ul className="space-y-2">
            {['2 Person (10)', '4 Person (14)', '6 Person (12)', '8 or More (16)'].map((capacity, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input type="checkbox" id={`capacity-${index}`} />
                <label htmlFor={`capacity-${index}`} className="text-gray-700">{capacity}</label>
              </li>
            ))}
          </ul>
        </div>

  
        <div>
          <h2 className="text-lg font-bold mb-4">Price</h2>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Max. $100.00</span>
          </div>
          <input type="range" min="0" max="100" className="w-full" />
        </div>
      </aside>

     
      <main className="flex-1 p-6 space-y-6">
       
        <section className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-2">Sports car with the best design and acceleration</h2>
            <p className="text-gray-600 mb-4">
              Safety and comfort while driving a futuristic and elegant sports car.
            </p>
            <Image
              src="/car (9).png"
              alt="Car"
              width={600}
              height={400}
              className="w-full rounded-lg mb-4 object-cover"
            />
           
            <div className="flex space-x-4 overflow-x-auto lg:overflow-visible">
              <div
                className="w-40 h-20 rounded-md cursor-pointer border hover:border-blue-600 flex items-center justify-center"
                style={{ backgroundColor: '#3563E9' }}
              >
                <Image
                  src="/car (3).png"
                  alt="Centered Image"
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
              <Image
                src="/car (8).png"
                alt="Thumbnail 2"
                width={160}
                height={80}
                className="w-40 h-20 object-cover rounded-md cursor-pointer border hover:border-blue-600"
                style={{ backgroundColor: '#3563E9' }}
              />
              <Image
                src="/car (4).png"
                alt="Thumbnail 3"
                width={160}
                height={80}
                className="w-40 h-20 object-cover rounded-md cursor-pointer border hover:border-blue-600"
                style={{ backgroundColor: '#3563E9' }}
              />
            </div>
          </div>

         
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Nissan GT - R</h3>
              <button className="text-red-500 text-lg">❤️</button>
            </div>
            <p className="text-gray-600 mb-6">
              NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the "race track".
            </p>
            <div className="grid grid-cols-2 gap-4 text-gray-600 mb-6">
              <div><strong>Type Car:</strong> Sport</div>
              <div><strong>Capacity:</strong> 2 Person</div>
              <div><strong>Steering:</strong> Manual</div>
              <div><strong>Gasoline:</strong> 70L</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-600">$80.00/day</p>
                <p className="text-sm text-gray-400 line-through">$100.00</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-500">
                Rent Now
              </button>
            </div>
          </div>
        </section>

      
        <section className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Reviews (13)</h2>
            <button className="text-blue-600 text-sm">Show All</button>
          </div>
          <div className="space-y-6">
      
            <div className="flex space-x-4">
              <Image
                src="/image.png"
                alt="Reviewer"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-bold text-gray-700">Alex Stanton</h4>
                <p className="text-gray-600">CEO at Bukalapak</p>
                <p className="text-sm text-gray-600">
                  We are very happy with the service from the MORENT App...
                </p>
             
                <div className="flex items-center space-x-1 mt-2">
                  {Array(4).fill(0).map((_, index) => (
                    <span key={index} className="text-yellow-400 text-lg">★</span>
                  ))}
                  <span className="text-gray-300 text-lg">★</span>
                </div>
                <span className="text-xs text-gray-400">21 July 2022</span>
              </div>
            </div>

      
            <div className="flex space-x-4">
              <Image
                src="/image copy.png"
                alt="Reviewer"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-bold text-gray-700">Skylar Dias</h4>
                <p className="text-gray-600">CEO at Amazon</p>
                <p className="text-sm text-gray-600">
                  We greatly helped by the services of the MOR...
                </p>
               
                <div className="flex items-center space-x-1 mt-2">
                  {Array(4).fill(0).map((_, index) => (
                    <span key={index} className="text-yellow-400 text-lg">★</span>
                  ))}
                  <span className="text-gray-300 text-lg">★</span>
                </div>
                <span className="text-xs text-gray-400">20 July 2022</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CarDetails;
