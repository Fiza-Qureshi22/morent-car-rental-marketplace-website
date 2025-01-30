// app/checkout/[carId]/page.tsx

"use client";

import { client } from "@/sanity/lib/client"; // Import the Sanity client
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // For navigation
import Image from "next/image";
import { motion } from "framer-motion";

// Fetch car details from Sanity based on carId
async function getCarDetails(carId: string) {
  const fetchData = await client.fetch(`
    *[_type=="car" && _id == "${carId}"]{
      name,
      type,
      pricePerDay,
      fuelCapacity,
      seatingCapacity,
      transmission,
      tags,
      "imageUrl": image.asset->url,
      description,
      location,
      modelYear,
      features
    }`);
  return fetchData[0]; // Returning the first car object
}

export default function CheckoutPage({ params }: { params: { carId: string } }) {
  const [car, setCar] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchCarDetails() {
      const carDetails = await getCarDetails(params.carId);
      setCar(carDetails);
    }
    fetchCarDetails();
  }, [params.carId]);

  if (!car) {
    return <div>Loading...</div>; // Show loading until data is fetched
  }

  // Handle Rent Car button click
  const handleRentCar = () => {
    // You can add payment or further logic here
    console.log("Proceeding to rent the car:", car.name);
    // Navigate to the checkout page or payment page
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-5">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#3563E9] to-[#54A6FF] mb-8">
          Checkout - {car.name}
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            className="w-full flex justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className="rounded-lg shadow-lg transition duration-500 transform hover:scale-105"
              src={car.imageUrl}
              alt={`${car.name} image`}
              width={600}
              height={400}
            />
          </motion.div>

          <div className="text-gray-700 space-y-4">
            <p className="text-lg">{car.description}</p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-lg font-medium">
                <span className="mr-2">📅 Model Year:</span>
                {car.modelYear}
              </div>
              <div className="flex items-center text-lg font-medium">
                <span className="mr-2">📍 Location:</span>
                {car.location}
              </div>
            </div>

            <ul className="mt-5 text-lg">
              <li><strong>Seating Capacity:</strong> {car.seatingCapacity}</li>
              <li><strong>Transmission:</strong> {car.transmission}</li>
              <li><strong>Fuel Capacity:</strong> {car.fuelCapacity}L</li>
              <li><strong>Price per Day:</strong> {car.pricePerDay.includes("/day") ? car.pricePerDay : `$${car.pricePerDay}/day`}</li>
            </ul>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold">Features:</h3>
              <ul className="list-disc list-inside mt-3">
                {car.features.map((feature: string, index: number) => (
                  <motion.li
                    key={index}
                    className="text-lg text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.button
              onClick={handleRentCar}
              className="mt-8 w-full bg-gradient-to-r from-[#3563E9] to-[#54A6FF] hover:from-[#3563E9] hover:to-[#54A6FF] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              Rent This Car
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
