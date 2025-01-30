"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { motion } from "framer-motion";

type Car = {
  name: string;
  type: string;
  pricePerDay: number;
  fuelCapacity: number;
  seatingCapacity: number;
  transmission: string;
  tags: string[];
  imageUrl: string;
};

const Header = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [carList, setCarList] = useState<Car[]>([]);

  const router = useRouter();

  // Fetch car data from Sanity CMS
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const cars = await client.fetch(`*[_type=="car"]{
          name,
          type,
          pricePerDay,
          fuelCapacity,
          seatingCapacity,
          transmission,
          tags,
          "imageUrl": image.asset->url
        }`);
        setCarList(cars);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCars();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredCars([]);
      return;
    }

    const results = carList.filter((car) =>
      car.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCars(results);
  };

  const handleCarClick = (car: Car) => {
    router.push(
      `/car-rental-page?name=${car.name}&type=${car.type}&price=${car.pricePerDay}&imageUrl=${car.imageUrl}&fuel=${car.fuelCapacity}&seating=${car.seatingCapacity}&transmission=${car.transmission}`
    );
  };

  // Memoized filtered cars list for performance
  const memoizedFilteredCars = useMemo(() => {
    return filteredCars.sort((a, b) => {
      const aIncludes = a.name.toLowerCase().includes(searchTerm.toLowerCase());
      const bIncludes = b.name.toLowerCase().includes(searchTerm.toLowerCase());
      if (aIncludes && !bIncludes) return -1;
      if (!aIncludes && bIncludes) return 1;
      return 0;
    });
  }, [filteredCars, searchTerm]);

  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-8 py-6 bg-white shadow-lg relative">
      {/* Gradient Reflection Below Logo */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-transparent via-transparent to-gray-100 opacity-30 h-8 animate-reflection"></div>

      {/* Logo */}
      <div
        className="text-5xl font-extrabold text-blue-600 cursor-pointer hover:text-blue-800 transition-all duration-500 transform hover:scale-105 relative z-10"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        onClick={() => router.push("/")}
      >
        Morent
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-transparent via-transparent to-blue-300 opacity-20 h-1"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>

      {/* Search Bar */}
      <div className="relative flex-1 mx-6 w-full max-w-lg">
        <input
          type="text"
          placeholder="Search for cars..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring focus:ring-blue-300"
          aria-label="Search for cars"
        />
        {memoizedFilteredCars.length > 0 && (
          <ul className="absolute mt-2 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-auto z-20">
            {memoizedFilteredCars.map((car) => (
              <li
                key={car.name}
                className="p-4 hover:bg-blue-100 cursor-pointer flex items-center"
                onClick={() => handleCarClick(car)}
              >
                <Image
                  src={car.imageUrl}
                  alt={car.name}
                  width={64} // Adjust width and height as needed
                  height={64}
                  className="w-14 h-12 rounded-lg  mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">{car.name}</p>
                  <p className="text-sm text-gray-600">{car.type}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-6 relative z-10">
        <motion.button
          className="px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-xl transform hover:scale-110 hover:shadow-2xl transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push("/login")}
          aria-label="Login"
        >
          Login
        </motion.button>

        <motion.button
          className="px-8 py-4 text-white bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full shadow-xl transform hover:scale-110 hover:shadow-2xl transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push("/signup")}
          aria-label="Signup"
        >
          Signup
        </motion.button>

        <motion.button
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 via-indigo-200 to-teal-300 hover:scale-110 transform transition-all duration-300 shadow-xl"
          onClick={() => router.push("/profile")}
          whileHover={{ scale: 1.1 }}
            aria-label="Profile"
          >
            <Image
            src="/profiles.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full border-4 border-white shadow-lg"
          />
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-60"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.button>
      </div>

      {/* Gradient Reflection at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-transparent via-transparent to-gray-100 opacity-30 h-8 animate-reflection"></div>
    </header>
  );
};

export default Header;
