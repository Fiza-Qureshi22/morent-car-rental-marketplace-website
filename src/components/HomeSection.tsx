'use client';

import React from 'react';

const HomeSection = () => {
  const scrollPage = (direction: 'up' | 'down') => {
    const scrollAmount = direction === 'down' ? window.innerHeight : -window.innerHeight;
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative bg-[#F6F7F9] py-16 sm:py-20 px-8 sm:px-12 md:px-16">
      {/* Up and Down Arrow Button */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 sm:top-[40%] sm:translate-y-[-20%] animate-pulse space-y-4">
        <button
          className="w-10 h-10 bg-[#3563E9] text-white flex items-center justify-center rounded-full sm:w-24 sm:h-24 lg:w-28 lg:h-28 shadow-2xl transition-all duration-300 transform hover:scale-125 cursor-pointer"
          onClick={() => scrollPage('up')}
          aria-label="Scroll Up"
        >
          <span className="text-3xl font-bold">&uarr;</span>
        </button>
        <button
          className="w-10 h-10 bg-[#3563E9] text-white flex items-center justify-center rounded-full sm:w-24 sm:h-24 lg:w-28 lg:h-28 shadow-2xl transition-all duration-300 transform hover:scale-125 cursor-pointer"
          onClick={() => scrollPage('down')}
          aria-label="Scroll Down"
        >
          <span className="text-3xl font-bold">&darr;</span>
        </button>
      </div>

      {/* Main Section Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10 mt-24 lg:mt-16">

        {/* Pick-Up Section */}
        <div className="bg-gradient-to-r from-[#3563E9] to-[#54A6FF] shadow-xl rounded-[30px] border-t-8 border-b-8 border-teal-600 w-full max-w-[90%] lg:max-w-[45%] mx-auto lg:mx-0 hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:translate-y-4">
          <div className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center transition-all duration-300">
              <span className="mr-3 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                ✓
              </span>
              Pick-Up (Selected)
            </h3>

            <div className="flex flex-col sm:flex-row justify-between gap-6 mb-8">
              {/* Location */}
              <div className="w-full sm:w-1/3 text-center">
                <p className="text-lg font-medium text-white">Location</p>
                <div className="mt-2">
                  <select className="p-3 text-gray-600 border border-gray-300 rounded-xl w-full focus:ring-2 focus:ring-teal-600 hover:ring-2 transition-all ease-in-out">
                    <option>Select your location</option>
                    <option>Karachi</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                    <option>Rawalpindi</option>
                    <option>Peshawar</option>
                    <option>Multan</option>
                    <option>Quetta</option>
                    <option>Faisalabad</option>
                    <option>Sialkot</option>
                    <option>Hyderabad</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="w-full sm:w-1/3 text-center">
                <p className="text-lg font-medium text-white">Date</p>
                <div className="mt-2">
                  <input type="date" className="p-3 text-gray-600 border border-gray-300 rounded-xl w-full focus:ring-2 focus:ring-teal-600 hover:ring-2 transition-all ease-in-out" />
                </div>
              </div>

              {/* Time */}
              <div className="w-full sm:w-1/3 text-center">
                <p className="text-lg font-medium text-white">Time</p>
                <div className="mt-2">
                  <input type="time" className="p-3 text-gray-600 border border-gray-300 rounded-xl w-full focus:ring-2 focus:ring-teal-600 hover:ring-2 transition-all ease-in-out" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Drop-Off Section */}
        <div className="bg-gradient-to-r from-[#54A6FF] to-[#3563E9] shadow-xl rounded-[30px] border-t-8 border-b-8 border-teal-600 w-full max-w-[90%] lg:max-w-[45%] mx-auto lg:mx-0 hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:translate-y-4">
          <div className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center transition-all duration-300">
              <span className="mr-3 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                ✓
              </span>
              Drop-Off (Selected)
            </h3>

            <div className="flex flex-col sm:flex-row justify-between gap-6 mb-8">
              {/* Location */}
              <div className="w-full sm:w-1/3 text-center">
                <p className="text-lg font-medium text-white">Location</p>
                <div className="mt-2">
                  <select className="p-3 text-gray-600 border border-gray-300 rounded-xl w-full focus:ring-2 focus:ring-teal-600 hover:ring-2 transition-all ease-in-out">
                    <option>Select your location</option>
                    <option>Karachi</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                    <option>Rawalpindi</option>
                    <option>Peshawar</option>
                    <option>Multan</option>
                    <option>Quetta</option>
                    <option>Faisalabad</option>
                    <option>Sialkot</option>
                    <option>Hyderabad</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="w-full sm:w-1/3 text-center">
                <p className="text-lg font-medium text-white">Date</p>
                <div className="mt-2">
                  <input type="date" className="p-3 text-gray-600 border border-gray-300 rounded-xl w-full focus:ring-2 focus:ring-teal-600 hover:ring-2 transition-all ease-in-out" />
                </div>
              </div>

              {/* Time */}
              <div className="w-full sm:w-1/3 text-center">
                <p className="text-lg font-medium text-white">Time</p>
                <div className="mt-2">
                  <input type="time" className="p-3 text-gray-600 border border-gray-300 rounded-xl w-full focus:ring-2 focus:ring-teal-600 hover:ring-2 transition-all ease-in-out" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeSection;
