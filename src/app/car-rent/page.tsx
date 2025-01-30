'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Correct for App Router



const RentNow: React.FC = () => {
  const cars = [
    { model: 'Nissan GT-R', price: '$80.00', type: 'Sport Car', image: '/blue.png', description: 'A high-performance sports car with exceptional power.' },
    { model: 'Koenigsegg', price: '$99.00', type: 'Supercar', image: '/orange.png', description: 'A luxury supercar with unmatched speed and elegance.' },
    { model: 'Rolls Royce', price: '$120.00', type: 'Luxury Car', image: '/white.png', description: 'A world-renowned luxury car that epitomizes comfort.' },
    { model: 'BMW i8', price: '$150.00', type: 'Electric Car', image: '/cars.png', description: 'A futuristic electric car with style and eco-friendliness.' },
    { model: 'Ferrari 488', price: '$250.00', type: 'Sports Car', image: '/green.png', description: 'An iconic sports car with a powerful engine.' },
    { model: 'Lamborghini Aventador', price: '$300.00', type: 'Supercar', image: '/yellow.png', description: 'A bold and powerful supercar designed for thrill-seekers.' },
  ];

  const [selectedCar, setSelectedCar] = useState<{ model: string; price: string; type: string; image: string; description: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState(cars);
  const [selectedType, setSelectedType] = useState('All');

  const router = useRouter(); // Initialize useRouter hook to navigate routes

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const filtered = cars.filter((car) =>
      car.model.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  const handleFilterByType = (type: string) => {
    setSelectedType(type);
    if (type === 'All') {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter((car) => car.type === type);
      setFilteredCars(filtered);
    }
  };

  const openModal = (car: any) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  const handleRentNowClick = (car: any) => {
    // Pass car details to the contact page route as query parameters
    router.push(`/contact?model=${car.model}&price=${car.price}&type=${car.type}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 md:p-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Rent a Car Now</h2>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for a car..."
          className="px-4 py-2 rounded-lg w-1/2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filter Options */}
      <div className="flex justify-center space-x-4 mb-10">
        <button
          className={`px-6 py-2 rounded-lg ${selectedType === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-700 focus:outline-none`}
          onClick={() => handleFilterByType('All')}
        >
          All Cars
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${selectedType === 'Sport Car' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-700 focus:outline-none`}
          onClick={() => handleFilterByType('Sport Car')}
        >
          Sports Cars
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${selectedType === 'Luxury Car' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-700 focus:outline-none`}
          onClick={() => handleFilterByType('Luxury Car')}
        >
          Luxury Cars
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${selectedType === 'Supercar' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-700 focus:outline-none`}
          onClick={() => handleFilterByType('Supercar')}
        >
          Supercars
        </button>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openModal(car)}
          >
            <img src={car.image} alt={car.model} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{car.model}</h3>
              <p className="text-sm text-gray-600 mt-2">{car.type}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-bold text-gray-900">{car.price}</span>
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRentNowClick(car); // Pass car details to the contact page
                  }}
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Car Details */}
      {selectedCar && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-600 text-2xl"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={selectedCar.image}
              alt={selectedCar.model}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-3xl font-semibold text-gray-800">{selectedCar.model}</h3>
            <p className="text-lg text-gray-600 mt-2">{selectedCar.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-3xl font-bold text-gray-900">{selectedCar.price}</span>
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none"
                onClick={() => handleRentNowClick(selectedCar)} // Pass car details to the contact page
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="mt-12 text-center">
        <button
          className="bg-blue-600 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          View More Cars
        </button>
      </div>
    </div>
  );
};

export default RentNow;
