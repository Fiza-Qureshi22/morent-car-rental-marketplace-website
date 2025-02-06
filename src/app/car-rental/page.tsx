"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";

function CarRentalPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [updatedPrice, setUpdatedPrice] = useState(searchParams?.get("price") || "N/A");

  const name = searchParams?.get("name") || "Unknown Car";
  const type = searchParams?.get("type") || "Not specified";
  const imageUrl = searchParams?.get("imageUrl") || "/default-car.png"; // Default image
  const fuel = searchParams?.get("fuel") || "N/A";
  const seating = searchParams?.get("seating") || "N/A";
  const transmission = searchParams?.get("transmission") || "N/A";

  const handleBooking = () => {
    // Update rent price when confirming booking
    setUpdatedPrice("$120/day"); // Example price change, you can modify as needed
    
    // Redirect to contact page with car details
    router.push(`/contact?name=${name}&price=${updatedPrice}&imageUrl=${imageUrl}`);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-6 sm:p-8">
      {/* Website Name */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
          Morent
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mt-2">
          Experience luxury car rentals with comfort and ease
        </p>
      </header>

      {/* Car Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Car Image */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-40 sm:h-48 w-full rounded-lg overflow-hidden"
          >
            <Image
              src={imageUrl}
              alt={`${name} image`}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </motion.div>

          {/* Car Information */}
          <div className="p-6 sm:p-8 flex flex-col justify-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 mb-4">
              <span className="font-serif text-3xl sm:text-4xl text-blue-600">{name}</span>
            </h2>
            <div className="text-gray-600 text-lg sm:text-xl flex items-center gap-2">
              <span className="text-blue-600">🚗</span> <span>Type: {type}</span>
            </div>
            <div className="text-gray-600 text-lg sm:text-xl flex items-center gap-2">
              <span className="text-blue-600">⛽</span> <span>Fuel Capacity: {fuel}</span>
            </div>
            <div className="text-gray-600 text-lg sm:text-xl flex items-center gap-2">
              <span className="text-blue-600">🪑</span> <span>Seating Capacity: {seating}</span>
            </div>
            <div className="text-gray-600 text-lg sm:text-xl flex items-center gap-2">
              <span className="text-blue-600">🔧</span> <span>Transmission: {transmission}</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-gray-800">Rent Price: {updatedPrice}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
              onClick={handleBooking}
            >
              Confirm Booking
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Wrap inside Suspense for useSearchParams()
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarRentalPage />
    </Suspense>
  );
}