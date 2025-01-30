'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const CarRentalDetails = () => {
  const searchParams = useSearchParams();
  const type = searchParams ? searchParams.get('type') : null;
  const [rentalInfo, setRentalInfo] = useState<string | null>(null);
  const [cartAdded, setCartAdded] = useState(false);

  // Sample data for car details
  const carDetails = {
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 50, // per day
    imageUrl: '/car.png', // Placeholder image
    features: ['Air Conditioning', 'Bluetooth', 'Leather Seats', 'Automatic Transmission'],
  };

  useEffect(() => {
    if (type) {
      setRentalInfo(`You are viewing details for: ${type}`);
    }
  }, [type]);

  const handleAddToCart = () => {
    setCartAdded(true);
  };

  if (!type) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative bg-[#F6F7F9] py-10 px-6 sm:px-12 md:px-16">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6">
          {rentalInfo}
        </h1>
        <p className="text-lg lg:text-xl text-center mb-8">
          Here you can learn more about our rental options and special offers for {type}.
        </p>

        {/* Car Details Section */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mb-8">
          {/* Car Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
            <img
              src={carDetails.imageUrl}
              alt={carDetails.model}
              className="w-600 h-500 object-cover"
            />
          </div>
          {/* Car Info */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {carDetails.make} {carDetails.model} ({carDetails.year})
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Price: <span className="font-semibold text-blue-500">${carDetails.price} / day</span>
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Features:</h3>
            <ul className="list-disc pl-5 mb-6">
              {carDetails.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-500 text-white py-3 rounded-lg text-xl hover:bg-blue-600 transition duration-200"
            >
              {cartAdded ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-[#fff] p-8 rounded-lg shadow-lg max-w-4xl">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">More about this car</h3>
          <p className="text-lg text-gray-700">
            The {carDetails.make} {carDetails.model} offers an exceptional driving experience with modern
            features, stylish design, and top-notch safety ratings. It's perfect for both city drives and road trips.
            Rent it today to experience comfort and reliability at its finest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarRentalDetails;
