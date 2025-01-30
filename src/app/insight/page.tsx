'use client';

import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { FaCar, FaDollarSign, FaChartLine, FaClock } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Insight: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setDarkMode(JSON.parse(storedMode));
    }
  }, []);

  // Sample Data for Insights
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue ($)',
        data: [12000, 15000, 14000, 17000, 19000, 22000],
        backgroundColor: '#3b82f6',
      },
    ],
  };

  const carRentalData = {
    labels: ['SUV', 'Sedan', 'Hatchback', 'Convertible', 'Luxury'],
    datasets: [
      {
        label: 'Cars Rented',
        data: [340, 290, 310, 180, 260],
        backgroundColor: ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'],
      },
    ],
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen p-6 transition-all`}>
      <h1 className="text-2xl font-bold">Rental Insights</h1>
      <p className="text-sm text-gray-500">Analyze rental trends, revenue, and car popularity.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Revenue Stats */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <FaDollarSign className="text-3xl text-blue-500" />
          <h3 className="text-lg font-bold">Total Revenue</h3>
          <p className="text-xl font-semibold">$98,000</p>
          <Bar data={revenueData} />
        </div>

        {/* Popular Car Types */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <FaCar className="text-3xl text-blue-500" />
          <h3 className="text-lg font-bold">Popular Car Types</h3>
          <Doughnut data={carRentalData} />
        </div>

        {/* Average Rental Duration */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <FaClock className="text-3xl text-blue-500" />
          <h3 className="text-lg font-bold">Avg. Rental Duration</h3>
          <p className="text-xl font-semibold">3.5 Days</p>
        </div>
      </div>
    </div>
  );
};

export default Insight;