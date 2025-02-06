'use client';

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCalendarAlt, FaCar, FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CalendarPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setDarkMode(JSON.parse(storedMode));
    }
  }, []);

  return (
    <div
      className={`${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      } min-h-screen flex items-center justify-center p-6 transition-all`}
      style={{ background: darkMode ? '#0a192f' : '#F8FAFC' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8 border-t-4 border-blue-500 relative overflow-hidden"
        style={{
          background: darkMode ? '#1B2A41' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Dark Mode Toggle */}
        <button
          className="absolute top-6 left-6 text-xl text-blue-500 focus:outline-none"
          onClick={() => {
            setDarkMode(!darkMode);
            localStorage.setItem('darkMode', JSON.stringify(!darkMode));
          }}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Decorative Car Icon */}
        <div className="absolute top-5 right-6 text-blue-500 text-5xl opacity-10">
          <FaCar />
        </div>
        
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center space-x-2 text-blue-600">
          <FaCalendarAlt className="text-blue-500" />
          <span>Select Your Rental Date</span>
        </h2>

        {/* Calendar Component */}
        <div className="mt-6 flex flex-col items-center">
          <Calendar
            onChange={(value) => setSelectedDate(value as Date)}
            value={selectedDate}
            className="rounded-lg border-none shadow-md w-full p-4"
          />
          {selectedDate && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }}
              className="mt-4 text-lg font-medium text-blue-500"
            >
              Selected Date: {selectedDate.toDateString()}
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CalendarPage;
