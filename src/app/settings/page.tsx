'use client';
import React, { useState } from 'react';
import { FaUser, FaBell, FaCreditCard, FaCar, FaMoon, FaSun } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import { HiX } from 'react-icons/hi';
import Image from 'next/image'; // Import Image component

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [profilePicture, setProfilePicture] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen p-8 transition-all`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-blue-600">Settings</h2>
        <button className="p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-110" onClick={toggleDarkMode}>
          {darkMode ? <FaSun className="text-yellow-400 text-2xl" /> : <FaMoon className="text-gray-600 text-2xl" />}
        </button>
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <section className="shadow-xl rounded-xl p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all hover:scale-105">
          <h3 className="text-xl font-semibold flex items-center mb-4">
            <FaUser className="mr-2 text-blue-600" /> Profile
          </h3>
          <div className="text-center mb-4">
            <label htmlFor="profilePicture" className="relative cursor-pointer transition-transform transform hover:scale-110">
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                {/* Updated to use Image component */}
                <Image 
                  src={profilePicture || '/default-profile.png'} 
                  alt="Profile" 
                  width={96} 
                  height={96} 
                  className="object-cover border-2 border-blue-500 shadow-lg"
                />
              </div>
              <input type="file" id="profilePicture" className="hidden" onChange={handleProfilePictureChange} />
            </label>
          </div>
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded mb-3 text-black dark:bg-gray-700 dark:text-white" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded mb-3 text-black dark:bg-gray-700 dark:text-white" />
          <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-all">Save Changes</button>
        </section>

        {/* Notifications */}
        <section className="shadow-xl rounded-xl p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all hover:scale-105">
          <h3 className="text-xl font-semibold flex items-center mb-4">
            <FaBell className="mr-2 text-blue-600" /> Notifications
          </h3>
          <label className="flex items-center mb-2">
            <input type="checkbox" checked={emailNotifications} onChange={() => setEmailNotifications(!emailNotifications)} className="mr-2" />
            Email Notifications
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={smsNotifications} onChange={() => setSmsNotifications(!smsNotifications)} className="mr-2" />
            SMS Notifications
          </label>
        </section>

        {/* Payment Settings */}
        <section className="shadow-xl rounded-xl p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all hover:scale-105">
          <h3 className="text-xl font-semibold flex items-center mb-4">
            <FaCreditCard className="mr-2 text-blue-600" /> Payment
          </h3>
          <select className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Bank Transfer</option>
          </select>
        </section>

        {/* Rent a Car Feature */}
        <section className="shadow-xl rounded-xl p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all hover:scale-105">
          <h3 className="text-xl font-semibold flex items-center mb-4">
            <FaCar className="mr-2 text-blue-600" /> Rent a Car
          </h3>
          <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-all" onClick={() => setModalOpen(true)}>Add New Car</button>
        </section>
      </div>

      {/* Modal for Adding Car */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-all">
        <Dialog.Panel className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full relative">
          <button className="absolute top-2 right-2 text-gray-600 dark:text-gray-300" onClick={() => setModalOpen(false)}><HiX className="text-2xl" /></button>
          <h2 className="text-2xl font-semibold mb-4">Add New Car</h2>
          <input type="text" placeholder="Car Model" className="w-full p-3 border rounded mb-3 text-black dark:bg-gray-700 dark:text-white" />
          <input type="text" placeholder="License Plate" className="w-full p-3 border rounded mb-3 text-black dark:bg-gray-700 dark:text-white" />
          <input type="number" placeholder="Price per Day" className="w-full p-3 border rounded mb-3 text-black dark:bg-gray-700 dark:text-white" />
          <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-all" onClick={() => setModalOpen(false)}>Add Car</button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Settings;
