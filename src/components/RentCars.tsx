'use client';

import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaGasPump, FaUsers, FaCogs, FaCheck } from 'react-icons/fa';

const RentCars = () => {
  const [likedCars, setLikedCars] = useState<number[]>([0, 3, 5, 8]);
  const [selectedCars, setSelectedCars] = useState<number[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<number[]>([]);
  const [rentedCar, setRentedCar] = useState<string | null>(null);

  const cars = [
    { name: 'Ferrari F8', imgSrc: '/car.png', price: '$50/day', petrol: '70L', people: 2, manual: true, type: 'Sports' },
    { name: 'Lamborghini Huracan', imgSrc: '/car (1).png', price: '$60/day', petrol: '70L', people: 2, manual: true, type: 'Sports' },
    { name: 'Audi R8', imgSrc: '/car (2).png', price: '$70/day', petrol: '70L', people: 2, manual: false, type: 'Sports' },
    { name: 'Porsche 911', imgSrc: '/car (3).png', price: '$80/day', petrol: '70L', people: 4, manual: true, type: 'Sports' },
    { name: 'BMW M4', imgSrc: '/car (4).png', price: '$90/day', petrol: '70L', people: 4, manual: false, type: 'Sports' },
    { name: 'Mercedes-Benz AMG GT', imgSrc: '/car (5).png', price: '$100/day', petrol: '70L', people: 2, manual: true, type: 'Sports' },
    { name: 'Aston Martin Vantage', imgSrc: '/car (6).png', price: '$110/day', petrol: '70L', people: 2, manual: true, type: 'Sports' },
    { name: 'McLaren 720S', imgSrc: '/car (7).png', price: '$120/day', petrol: '70L', people: 2, manual: true, type: 'Sports' },
    { name: 'Tesla Model S', imgSrc: '/car (8).png', price: '$130/day', petrol: 'N/A', people: 4, manual: false, type: 'SUV' },
    { name: 'Jaguar F-Type', imgSrc: '/car (9).png', price: '$140/day', petrol: '70L', people: 2, manual: true, type: 'Sports' },
    { name: 'Chevrolet Corvette', imgSrc: '/car (10).png', price: '$150/day', petrol: '70L', people: 2, manual: true, type: 'Sports' },
    { name: 'Bentley Continental GT', imgSrc: '/car (11).png', price: '$160/day', petrol: '70L', people: 4, manual: false, type: 'SUV' },
  ];

  const toggleSelectCar = (index: number) => {
    setSelectedCars(prevSelectedCars =>
      prevSelectedCars.includes(index)
        ? prevSelectedCars.filter(id => id !== index)
        : [...prevSelectedCars, index]
    );
  };

  const calculateTotalPrice = () => {
    return selectedCars.reduce((total, index) => {
      const car = cars[index];
      const price = parseInt(car.price.replace('$', '').replace('/day', ''));
      return total + price;
    }, 0);
  };

  return (
    <section className="relative bg-white p-4 lg:p-8 flex flex-col lg:flex-row min-h-screen">
      {/* Left-side */}
      <div className="bg-white shadow-md border-r border-gray-300 w-full lg:w-1/4 p-4 lg:sticky lg:top-0 lg:h-screen">
        <h3 className="text-lg font-semibold mb-4">Available Cars</h3>
        <ul className="space-y-2">
          {cars.map((car, index) => (
            <li
              key={index}
              onClick={() => toggleSelectCar(index)}
              className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${selectedCars.includes(index) ? 'bg-blue-50 border-l-4 border-blue-600' : ''}`}
            >
              <span>{car.name}</span>
              {selectedCars.includes(index) && <FaCheck className="text-blue-600" />}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <h4 className="text-lg font-semibold">Summary</h4>
          <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
        <h2 className="text-2xl font-semibold mb-6">Popular Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white shadow-md border rounded-lg p-4 flex flex-col items-center"
            >
              <div className="w-full flex justify-center">
                <img
                  src={car.imgSrc}
                  alt={car.name}
                  className="w-52 h-32 object-contain mb-4"
                />
              </div>
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-sm text-gray-600">{car.type}</p>
              <div className="flex space-x-4 mt-2">
                <FaGasPump /> {car.petrol}
                <FaUsers /> {car.people}
                <FaCogs /> {car.manual ? 'Manual' : 'Automatic'}
              </div>
              <button
                onClick={() => setRentedCar(car.name)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Rent Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentCars;
