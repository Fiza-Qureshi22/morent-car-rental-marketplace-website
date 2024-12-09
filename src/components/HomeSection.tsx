'use client';

import React from 'react';

const HomeSection = () => {
  return (
    <section className="relative bg-white py-10 px-6 sm:px-12 md:px-16">

      {/* Up and Down Arrow Button */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-10 sm:top-[40%] sm:translate-y-[-60%]">
        <div className="w-16 h-16 bg-blue-600 text-white flex flex-col items-center justify-center rounded-full sm:w-20 sm:h-20 lg:w-24 lg:h-24 shadow-lg">
          <span className="text-2xl sm:text-3xl transform rotate-180 mb-1">&uarr; &darr;</span>
        </div>
      </div>

      {/* Main Section Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-24 lg:mt-16">

        {/* Pick-Up Section */}
        <div className="bg-white shadow-lg rounded-lg border-l-4 border-blue-600 w-full max-w-[90%] lg:max-w-[45%] mx-auto lg:mx-0 hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4 flex items-center">
              <span className="mr-2 w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                ✓
              </span>
              Pick-Up (Selected)
            </h3>

            <div className="flex flex-col sm:flex-row justify-between gap-6 mb-6">
              {/* Location */}
              <div className="w-full sm:w-1/3 text-center">
                <p className="text-sm font-medium text-gray-700">Location</p>
                <div className="mt-2">
                  <select className="p-2 text-gray-600 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-600">
                    <option>Select your location</option>
                    <option>Location 1</option>
                    <option>Location 2</option>
                    <option>Location 3</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="w-full sm:w-1/3 text-center">
                <p className="text-sm font-medium text-gray-700">Date</p>
                <div className="mt-2">
                  <input type="date" className="p-2 text-gray-600 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-600" />
                </div>
              </div>

              {/* Time */}
              <div className="w-full sm:w-1/3 text-center">
                <p className="text-sm font-medium text-gray-700">Time</p>
                <div className="mt-2">
                  <input type="time" className="p-2 text-gray-600 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Drop-Off Section */}
        <div className="bg-white shadow-lg rounded-lg border-r-4 border-green-600 w-full max-w-[90%] lg:max-w-[45%] mx-auto lg:mx-0 hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4 flex items-center">
              <span className="mr-2 w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                ✓
              </span>
              Drop-Off (Selected)
            </h3>

            <div className="flex flex-col sm:flex-row justify-between gap-6 mb-6">
              {/* Location */}
              <div className="w-full sm:w-1/3 text-center">
                <p className="text-sm font-medium text-gray-700">Location</p>
                <div className="mt-2">
                  <select className="p-2 text-gray-600 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-600">
                    <option>Select your location</option>
                    <option>Location A</option>
                    <option>Location B</option>
                    <option>Location C</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="w-full sm:w-1/3 text-center">
                <p className="text-sm font-medium text-gray-700">Date</p>
                <div className="mt-2">
                  <input type="date" className="p-2 text-gray-600 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-600" />
                </div>
              </div>

              {/* Time */}
              <div className="w-full sm:w-1/3 text-center">
                <p className="text-sm font-medium text-gray-700">Time</p>
                <div className="mt-2">
                  <input type="time" className="p-2 text-gray-600 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-600" />
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
