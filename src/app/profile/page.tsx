'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      setUser(JSON.parse(savedUserData));
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#001F3F] via-[#0074D9] to-[#001F3F]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative p-8 bg-white rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row items-center gap-8"
      >
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-40 h-40 md:w-56 md:h-56 bg-cover bg-center rounded-full border-4 border-teal-600 shadow-lg"
          style={{
            backgroundImage:
              'url(image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></motion.div>

        {/* Profile Information Section */}
        <div className="flex flex-col items-center md:items-start w-full text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 mb-6 tracking-wide">
            Morent
          </h1>
          <h2 className="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-800 to-black mb-6 tracking-wide">
            Your Profile
          </h2>

          {user ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-gray-700">
    <div className="flex items-center gap-2 p-4 bg-gray-50 shadow-md rounded-xl">
      <p className="font-medium text-indigo-500">Name:</p>
      <p className="font-semibold text-gray-900">{user.name}</p>
    </div>
    <div className="flex items-center gap-2 p-4 bg-gray-50 shadow-md rounded-xl">
      <p className="font-medium text-indigo-500">Email:</p>
      <p className="font-semibold text-gray-900">{user.email}</p>
    </div>
    <div className="flex items-center gap-2 p-4 bg-gray-50 shadow-md rounded-xl">
      <p className="font-medium text-indigo-500">Phone:</p>
      <p className="font-semibold text-gray-900">{user.phone}</p>
    </div>
    <div className="flex items-center gap-2 p-4 bg-gray-50 shadow-md rounded-xl">
      <p className="font-medium text-indigo-500">Address:</p>
      <p className="font-semibold text-gray-900">{user.address}</p>
    </div>
    <div className="flex items-center gap-2 p-4 bg-gray-50 shadow-md rounded-xl">
      <p className="font-medium text-indigo-500">License Number:</p>
      <p className="font-semibold text-gray-900">{user.licenseNumber}</p>
    </div>
  </div>
) : (
  <p className="text-gray-400">Loading...</p>
)}

          {/* Edit Profile Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Edit Profile Feature Coming Soon!')}
            className="mt-8 py-4 px-8 text-white text-lg font-semibold bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full shadow-lg hover:from-teal-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-300"
          >
            Edit Profile
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
