"use client";

import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter

async function getData() {
  const fetchData = await client.fetch(`*[_type=="car"]{
    _id,
    name,
    type,
    pricePerDay,
    fuelCapacity,
    seatingCapacity,
    transmission,
    tags,
    "imageUrl": image.asset->url
  }`);
  return fetchData;
}

export default function Cars() {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    async function fetchCars() {
      const cars = await getData();
      setData(cars);
    }
    fetchCars();
  }, []);

  // Function to navigate to the car details page with query params
  const handleRentClick = (car: any) => {
    router.push(
      `/car-rental?name=${car.name}&type=${car.type}&price=${car.pricePerDay}&imageUrl=${car.imageUrl}&fuel=${car.fuelCapacity}&seating=${car.seatingCapacity}&transmission=${car.transmission}`
    );
  };

  return (
    <div className="w-full min-h-screen p-5 bg-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#3563E9] to-[#54A6FF]">
        Explore Our Cars
      </h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {data.map((car, index) => (
          <motion.div
            key={index}
            className="w-full max-w-sm bg-white border border-[#3563E9] rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              className="p-4 rounded-t-lg transition duration-500 transform hover:scale-110"
              src={car.imageUrl}
              alt={`${car.name} image`}
              width={300}
              height={200}
            />
            <div className="px-5 pb-5">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {car.name} - {car.type}
              </h2>
              <p className="text-sm text-gray-600">
                Seating Capacity: {car.seatingCapacity}
              </p>
              <p className="text-sm text-gray-600">
                Transmission: {car.transmission}
              </p>
              <div className="flex items-center mt-3">
                <span className="text-[#3563E9] font-medium text-sm">
                  Fuel Capacity: {car.fuelCapacity}L
                </span>
              </div>
              <div className="flex items-center justify-between mt-5">
                <span className="text-2xl font-bold text-gray-800">
                  {car.pricePerDay.includes("/day")
                    ? car.pricePerDay
                    : `$${car.pricePerDay}/day`}
                </span>
              </div>
              <button
                onClick={() => handleRentClick(car)} // Pass car data dynamically
                className="mt-4 w-full bg-gradient-to-r from-[#3563E9] to-[#54A6FF] hover:from-[#3563E9] hover:to-[#54A6FF] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
              >
                Rent This Car
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
