// app/car-rental/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const CarsSelector = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(100);

  useEffect(() => {
    setCars([
      {
        id: "1",
        name: "Nissan GT - R",
        description: "Experience ultimate performance and sleek design with the Nissan GT-R Nismo.",
        price: 80,
        originalPrice: 100,
        imageUrl: "/white.png",
        type: "Sport",
        capacity: "2 Person",
        thumbnails: ["/car (3).png", "/car (8).png", "/Car (9).png"],
      },
      {
        id: "2",
        name: "Toyota Supra",
        description: "The Toyota Supra is built for enthusiasts, with top-tier performance and aggressive styling.",
        price: 85,
        originalPrice: 120,
        imageUrl: "/blue.png",
        type: "Sport",
        capacity: "4 Person",
        thumbnails: ["/car (2).png", "/car (7).png", "/car (5).png"],
      },
      {
        id: "3",
        name: "BMW M4",
        description: "BMW’s M4 combines sportiness with luxury, providing a perfect driving experience.",
        price: 95,
        originalPrice: 130,
        imageUrl: "/orange.png",
        type: "Coupe",
        capacity: "8 or More",
        thumbnails: ["/car (6).png", "/car (12).png", "/car (5).png"],
      },
      {
        id: "4",
        name: "Ford Explorer",
        description: "Explore the great outdoors in comfort and style with the Ford Explorer.",
        price: 100,
        originalPrice: 130,
        imageUrl: "/cars.png",
        type: "SUV",
        capacity: "6 Person",
        thumbnails: ["/car (9).png", "/car (5).png", "/car (3).png"],
      },
    ]);
  }, []);

  const handleFilterChange = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    state: string[]
  ) => {
    setState(state.includes(value) ? state.filter((item) => item !== value) : [...state, value]);
  };

  const filteredCars = cars.filter(
    (car) =>
      (selectedTypes.length === 0 || selectedTypes.includes(car.type)) &&
      (selectedCapacities.length === 0 || selectedCapacities.includes(car.capacity)) &&
      car.price <= maxPrice
  );

  const handleThumbnailClick = (carId: string, imageUrl: string) => {
    setSelectedCar(carId === selectedCar ? null : imageUrl);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen p-6 space-y-6 lg:space-y-0">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>
        {/* Type Filter */}
        <div>
          <h3 className="font-semibold text-gray-700">Type</h3>
          <ul className="space-y-2 mt-2">
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`type-${index}`}
                  className="accent-blue-600"
                  onChange={() => handleFilterChange(type, setSelectedTypes, selectedTypes)}
                  checked={selectedTypes.includes(type)}
                />
                <label htmlFor={`type-${index}`} className="text-gray-600">
                  {type}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Capacity Filter */}
        <div>
          <h3 className="font-semibold text-gray-700">Capacity</h3>
          <ul className="space-y-2 mt-2">
            {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  id={`capacity-${index}`}
                  className="accent-blue-600"
                  onChange={() => handleFilterChange(capacity, setSelectedCapacities, selectedCapacities)}
                  checked={selectedCapacities.includes(capacity)}
                />
                <label htmlFor={`capacity-${index}`} className="text-gray-600">
                  {capacity}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="font-semibold text-gray-700">Price</h3>
          <input
            type="range"
            min="0"
            max="200"
            value={maxPrice}
            className="w-full mt-2 accent-blue-600"
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <p className="text-gray-600 mt-2">Max. ${maxPrice}.00</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Offer Section */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-lg text-center mb-6">
          <h3 className="font-bold text-xl text-blue-600">Limited Time Offer🎉❤</h3>
          <p className="text-lg text-gray-700">
            Get 30% OFF on 3 days rental! Rent Now and Save Big!
          </p>
        </div>

        {/* Car Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <section
              key={car.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4"
            >
              {/* Car Image */}
              <div className="relative h-32 w-full overflow-hidden rounded-lg">
                <Image
                  src={selectedCar ? selectedCar : car.imageUrl}
                  alt={car.name}
                  width={320}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Car Details */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-sm text-gray-600">{car.description}</p>

                {/* Price and Rent Now Button */}
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-lg font-semibold text-blue-600">${car.price}/day</p>
                    <p className="text-sm text-gray-500 line-through">${car.originalPrice}/day</p>
                  </div>
                  <Link href={`/car-rent?carId=${car.id}&name=${car.name}`}>
                    <button className="bg-blue-600 text-white rounded-lg py-2 px-4 transition-transform transform hover:scale-105 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:outline-none">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CarsSelector;
