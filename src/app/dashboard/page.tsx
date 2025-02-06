'use client';
import React, { useEffect, useState } from "react";
import { FaUserCircle, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdOutlineEdit } from "react-icons/md";
import Image from "next/image";

export default function DashboardPage() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Retrieve the user details from localStorage
    const user = localStorage.getItem("user");
    if (user) {
      setUserData(JSON.parse(user));
    }
  }, []);

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-500">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-blue-500 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Dashboard Header */}
        <div className="bg-white p-8 rounded-xl shadow-xl mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              {userData.carImage ? (
                <Image
                  src={userData.carImage}
                  alt={userData.carName}
                  width={100}
                  height={60}
                  className="rounded-md object-cover"
                />
              ) : (
                <FaUserCircle className="text-6xl text-blue-600" />
              )}
              <div>
                <h2 className="text-4xl font-extrabold text-blue-600">
                  Welcome, {userData.fullName}!
                </h2>
                <h3 className="text-xl text-gray-600">
                  {userData.carName ? `Your Car: ${userData.carName} - $${Number(userData.carPrice).toFixed(2)}/day` : "Your Profile Information"}
                </h3>
              </div>
            </div>
            <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 border border-blue-600 rounded-lg shadow-md transition duration-300">
              <MdOutlineEdit className="mr-2" />
              Edit Profile
            </button>
          </div>

          {/* User Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <p className="text-lg text-gray-700">
                  <strong>Email:</strong> {userData.email}
                </p>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <FaPhoneAlt className="text-blue-600 text-2xl" />
                <p className="text-lg text-gray-700">
                  <strong>Phone:</strong> {userData.phone}
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <p className="text-lg text-gray-700">
                  <strong>License:</strong> {userData.license}
                </p>
              </div>
              {/* Agar address, city, zip code available hon to inhe bhi display kar sakte hain */}
              {userData.address && (
                <div className="flex items-center space-x-4 mb-4">
                  <HiOutlineClipboardList className="text-blue-600 text-2xl" />
                  <p className="text-lg text-gray-700">
                    <strong>Address:</strong> {userData.address}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Optional: Additional Sections like Activities or Booking History */}
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Your Activities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300">
              <h4 className="text-xl text-blue-600">Total Rentals</h4>
              <p className="text-3xl font-extrabold text-gray-800">5</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300">
              <h4 className="text-xl text-blue-600">Upcoming Bookings</h4>
              <p className="text-3xl font-extrabold text-gray-800">2</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300">
              <h4 className="text-xl text-blue-600">Total Spend</h4>
              <p className="text-3xl font-extrabold text-gray-800">$4,250</p>
            </div>
          </div>
        </div>

        {/* Booking History Section */}
        <div className="bg-white p-8 rounded-xl shadow-xl mt-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Booking History</h3>
          <div className="space-y-6">
            {userData.bookings?.length > 0 ? (
              userData.bookings.map((booking: any, index: number) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl text-blue-600">Booking #{index + 1}</h4>
                  <p><strong>Car:</strong> {booking.car}</p>
                  <p><strong>Rental Date:</strong> {booking.rentalDate}</p>
                  <p><strong>Status:</strong> {booking.status}</p>
                </div>
              ))
            ) : (
              <p className="text-lg text-gray-700">No booking history available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
