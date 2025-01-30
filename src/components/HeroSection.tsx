'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();

  const handleButtonClick = (type: string) => {
    router.push(`/car-rent?type=${type}`);
  };

  useEffect(() => {
    // This effect ensures that your component is only rendered client-side
    // and avoids potential issues related to server-side rendering.
  }, []);

  return (
    <section className="relative bg-[#F6F7F9] py-10 px-6 sm:px-12 md:px-16">
      <div className="flex flex-col lg:flex-row justify-between gap-8 mt-8 lg:mt-0">
        {/* Left Box - Light button on dark box */}
        <div className="bg-[#54A6FF] shadow-md rounded-tl-3xl rounded-br-3xl relative overflow-hidden w-full lg:w-[45%] h-[350px] lg:h-[520px] flex flex-col justify-center items-center p-6 group">
          {/* Dark Reflective Corners */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-[30px] h-[30px] bg-gradient-to-br from-black/80 to-transparent rounded-full animate-reflect"></div>
            <div className="absolute top-0 right-0 w-[30px] h-[30px] bg-gradient-to-bl from-black/80 to-transparent rounded-full animate-reflect"></div>
            <div className="absolute bottom-0 left-0 w-[30px] h-[30px] bg-gradient-to-tr from-black/80 to-transparent rounded-full animate-reflect"></div>
            <div className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-gradient-to-tl from-black/80 to-transparent rounded-full animate-reflect"></div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[300px] h-[90px]">
            <Image
              src="/image 7.png"
              alt="Left Box Image"
              width={406}
              height={116}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              The Best Platform <br /> For Car Rental
            </h1>
            <p className="text-lg lg:text-xl text-white mb-8">
              Ease of doing a car rental safely and reliably. Of course, at a low price.
            </p>
            <button
              onClick={() => handleButtonClick('MoRenT Website')}
              className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-4 rounded-lg font-medium text-lg hover:scale-110 transform transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl hover:opacity-90 hover:bg-blue-600"
            >
              Rental Car
            </button>
          </div>
        </div>

        {/* Right Box - Dark button on light box */}
        <div className="bg-[#3563E9] shadow-md rounded-tl-3xl rounded-br-3xl relative overflow-hidden w-full lg:w-[45%] h-[350px] lg:h-[520px] flex flex-col justify-center items-center p-6 group">
          {/* Dark Reflective Corners */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-[30px] h-[30px] bg-gradient-to-br from-black/80 to-transparent rounded-full animate-reflect"></div>
            <div className="absolute top-0 right-0 w-[30px] h-[30px] bg-gradient-to-bl from-black/80 to-transparent rounded-full animate-reflect"></div>
            <div className="absolute bottom-0 left-0 w-[30px] h-[30px] bg-gradient-to-tr from-black/80 to-transparent rounded-full animate-reflect"></div>
            <div className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-gradient-to-tl from-black/80 to-transparent rounded-full animate-reflect"></div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[300px] h-[90px]">
            <Image
              src="/image 8.png"
              alt="Right Box Image"
              width={406}
              height={116}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Easy Way to Rent <br /> Car at Low Price
            </h1>
            <p className="text-lg lg:text-xl text-white mb-8">
              Providing cheap car rentals with amazing services and customer satisfaction.
            </p>
            <button
              onClick={() => handleButtonClick('Easy Rent')}
              className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:scale-110 transform transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl hover:opacity-90 hover:bg-blue-400"
            >
              Rent a Car
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes reflectMove {
          0% {
            transform: scale(1) translateX(0) translateY(0);
          }
          25% {
            transform: scale(1.3) translateX(20px) translateY(-20px);
          }
          50% {
            transform: scale(1) translateX(0) translateY(0);
          }
          75% {
            transform: scale(1.3) translateX(-20px) translateY(20px);
          }
          100% {
            transform: scale(1) translateX(0) translateY(0);
          }
        }

        .animate-reflect {
          animation: reflectMove 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
