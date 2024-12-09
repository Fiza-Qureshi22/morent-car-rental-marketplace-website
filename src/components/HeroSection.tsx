'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-[#F6F7F9] py-10 px-6 sm:px-12 md:px-16">
     
      <div className="flex flex-col lg:flex-row justify-between gap-8 mt-0">
        {/* Left Box */}
        <div className="bg-[#54A6FF] shadow-md rounded-2xl relative overflow-hidden w-full lg:w-[45%] h-[350px] lg:h-[520px] mt-8 lg:mt-0">
    
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[300px] h-[90px]">
            <Image
              src="/image 7.png"
              alt="Left Box Image"
              width={406}
              height={116}
              className="object-cover w-full h-full"
            />
          </div>
         
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6">
              The Best Platform <br /> For Car Rental
            </h1>
            <p className="text-lg lg:text-xl text-white text-center mb-8">
              Ease of doing a car rental safely and reliably. Of course, at a low price.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-600 transition">
              Rental Car
            </button>
          </div>
        </div>

        {/* Right Box */}
        <div className="bg-[#3563E9] shadow-md rounded-2xl relative overflow-hidden w-full lg:w-[45%] h-[350px] lg:h-[520px] mt-8 lg:mt-0">
         
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[300px] h-[90px]">
            <Image
              src="/image 8.png"
              alt="Right Box Image"
              width={406}
              height={116}
              className="object-cover w-full h-full"
            />
          </div>
       
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6">
              Easy Way to Rent a <br /> Car at a Low Price
            </h1>
            <p className="text-lg lg:text-xl text-white text-center mb-8">
              Providing cheap car rentals with amazing services and customer satisfaction.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-600 transition">
              Rent a Car
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
