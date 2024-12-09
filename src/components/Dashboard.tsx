'use client';

import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaCar, FaCalendarAlt, FaCogs, FaHome, FaPowerOff, FaMoon, FaSun } from 'react-icons/fa';


ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard: React.FC = () => {

  const [darkMode, setDarkMode] = useState<boolean>(false);

 
  const pieData = {
    labels: ['Sport Car', 'SUV', 'Coupe', 'Hatchback', 'MPV'],
    datasets: [
      {
        data: [17439, 9478, 18977, 12510, 14406],
        backgroundColor: [
          '#3b82f6',
          '#60a5fa',
          '#93c5fd',
          '#bfdbfe',
          '#dbeafe',
        ],
        hoverBackgroundColor: [
          '#2563eb',
          '#3b82f6',
          '#60a5fa',
          '#93c5fd',
          '#bfdbfe',
        ],
      },
    ],
  };

 
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setDarkMode(JSON.parse(storedMode));
    }
  }, []);

 
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode)); 
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen flex transition-all`}>
   
      <aside className={`${darkMode ? 'bg-gray-800' : 'bg-white'} w-full md:w-72 shadow-xl rounded-lg md:h-screen p-4 md:p-6 transition-all`}>
        <div className="flex flex-col h-full justify-between">
          <div>
            <h2 className="text-lg font-bold">Main Menu</h2>
            <nav className="mt-6 space-y-4">
              <a href="#" className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-lg">
                <FaHome />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-lg">
                <FaCar />
                <span>Car Rent</span>
              </a>
              <a href="#" className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-lg">
                <FaCogs />
                <span>Insight</span>
              </a>
              <a href="#" className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-lg">
                <FaCalendarAlt />
                <span>Calendar</span>
              </a>
            </nav>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-bold">Preferences</h3>
            <a href="#" className="flex items-center space-x-3 hover:text-blue-600 mt-4 p-3 rounded-lg">
              <span>Settings</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-blue-600 p-3 rounded-lg">
              <span>Help & Center</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-blue-600 p-3 rounded-lg">
              <span>Dark Mode</span>
            </a>
          </div>

          <div className="mt-16">
            <a href="#" className="flex items-center space-x-3 hover:text-red-600 p-3 rounded-lg">
              <FaPowerOff />
              <span>Log Out</span>
            </a>
          </div>
        </div>
      </aside>

    
      <main className="flex-1 p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
          <section className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-lg p-6 transform transition-all hover:scale-105">
            <h3 className="text-lg font-bold">Details Rental</h3>
            <div className="mt-4">
              {/* Map Placeholder */}
              <div className="h-48 bg-blue-100 rounded-lg mb-6"></div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold">Nissan GT - R</h4>
                  <p className="text-sm">Sport Car</p>
                </div>
                <div className="text-lg font-semibold">#9761</div>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-sm font-semibold">Pick-Up</h5>
                  <p className="text-sm">Kota Semarang</p>
                  <p className="text-sm">20 July 2022</p>
                  <p className="text-sm">07:00</p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Drop-Off</h5>
                  <p className="text-sm">Kota Semarang</p>
                  <p className="text-sm">21 July 2022</p>
                  <p className="text-sm">01:00</p>
                </div>
              </div>
              <div className="mt-6 text-xl font-bold">Total Rental Price: $80.00</div>
            </div>
          </section>

        
          <aside className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold">Top 5 Car Rentals</h3>
            <div className="mt-4">
              <Pie data={pieData} />
            </div>
          </aside>
        </div>

       
        <div className="mt-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold">Recent Transactions</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex justify-between items-center">
                <span>Nissan GT - R</span>
                <span>$80.00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Koenigsegg</span>
                <span>$99.00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Rolls Royce</span>
                <span>$96.00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>CR-V</span>
                <span>$80.00</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

   
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-600"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Dashboard;
