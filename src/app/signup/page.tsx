'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    licenseNumber: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Local storage saving only after the component is mounted
  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      setFormData(JSON.parse(savedUserData));
    }
  }, []); // This will only run once when the component is mounted

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // Saving formData to localStorage after form submission
    localStorage.setItem('userData', JSON.stringify(formData));

    // Mock signup flow
    setTimeout(() => {
      alert('Signup successful!');
      router.push('/profile'); // Redirect to the profile page after signup
    }, 500); // Reduced delay for a smoother experience
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
        className="p-10 bg-white rounded-2xl shadow-2xl w-full max-w-2xl"
      >
        <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-4">
          Morent
        </h1>
        <p className="text-center text-gray-500 mb-2 italic">
          Your Gateway to Renting Luxury Cars
        </p>
        <hr className="my-6 border-t border-gray-300" />

        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 mb-8">Sign up to book your dream car for rent!</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block text-gray-600 font-medium mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block text-gray-600 font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block text-gray-600 font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block text-gray-600 font-medium mb-1" htmlFor="address">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block text-gray-600 font-medium mb-1" htmlFor="licenseNumber">
              License Number
            </label>
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              placeholder="Enter your license number"
              value={formData.licenseNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block text-gray-600 font-medium mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter a strong password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
          >
            Sign Up
          </motion.button>
        </form>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 mt-6"
        >
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in here
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
