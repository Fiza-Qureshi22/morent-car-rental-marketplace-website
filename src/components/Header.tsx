'use client';

import React from 'react';
import { FaSearch, FaHeart, FaBell, FaCog } from 'react-icons/fa';
import Image from 'next/image'; 

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-md h-auto md:h-32 space-y-4 md:space-y-0">
   
      <div className="text-4xl font-bold text-blue-500 ml-8 tracking-wide">
        MORENT
      </div>

   
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full max-w-full md:max-w-md bg-gray-50">
        <FaSearch className="text-gray-500 mr-2 text-xl" />
        <input
          type="text"
          placeholder="Search something here"
          className="w-full focus:outline-none bg-transparent text-gray-700"
        />
      </div>

   
      <div className="flex items-center justify-center space-x-6 md:space-x-8">
        <FaHeart 
          className="text-gray-600 text-3xl cursor-pointer hover:text-pink-500 hover:border-b-2 hover:border-pink-500 transition" 
        />
        <div className="relative">
          <FaBell 
            className="text-gray-600 text-3xl cursor-pointer hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition" 
          />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            1
          </span>
        </div>
        <FaCog 
          className="text-gray-600 text-3xl cursor-pointer hover:text-green-500 hover:border-b-2 hover:border-green-500 transition" 
        />
        <Image
          src="/image.png" 
          alt="User Profile"
          width={48} 
          height={48} 
          className="rounded-full object-cover cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
