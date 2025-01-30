"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCar, FaCalendarAlt, FaUserCircle } from "react-icons/fa";

const Dashboard: React.FC = () => {
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [userDetails, setUserDetails] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const savedBooking = localStorage.getItem("bookingDetails");
    const savedUser = localStorage.getItem("userDetails");

    if (savedBooking) setBookingDetails(JSON.parse(savedBooking));
    if (savedUser) setUserDetails(JSON.parse(savedUser));
  }, []);

  const goToPage = (path: string) => {
    router.push(path);
  };

  // Fake Upcoming Rentals Data
  const upcomingRentals = [
    { model: "BMW X5", pickUpDate: "10 Feb 2025", price: "$250.00" },
    { model: "Audi A6", pickUpDate: "15 Feb 2025", price: "$200.00" },
  ];

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex justify-center items-center p-6 bg-blue-600 text-white shadow-md">
        <h1 className="text-3xl font-bold">User Dashboard</h1>
      </div>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Booking Details */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Booking Details</h2>
            {bookingDetails ? (
              <div>
                <p className="mb-2"><strong>Car:</strong> {bookingDetails.name}</p>
                <p className="mb-2"><strong>Price:</strong> {bookingDetails.price}</p>
                <p className="mb-2"><strong>Booking Date:</strong> {bookingDetails.date}</p>
                    <Image src={bookingDetails.image} alt="Car" width={360} height={160} className="rounded-lg" />
                    <Image src={bookingDetails.image} alt="Car" className="w-90 h-40 rounded-lg" />
              </div>
            ) : (
              <p className="text-gray-500">No booking details available.</p>
            )}
          </div>

          {/* User Details */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">User Information</h2>
            {userDetails ? (
              <div>
                <p className="mb-2"><strong>Name:</strong> {userDetails.fullName}</p>
                <p className="mb-2"><strong>Email:</strong> {userDetails.email}</p>
                <p className="mb-2"><strong>Phone:</strong> {userDetails.phone}</p>
                <p className="mb-2"><strong>Address:</strong> {userDetails.address}</p>
              </div>
            ) : (
              <p className="text-gray-500">No user details available.</p>
            )}
          </div>

          {/* Upcoming Rentals */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Upcoming Rentals</h2>
            <ul>
              {upcomingRentals.map((rental, index) => (
                <li key={index} className="mb-4 p-4 border rounded-lg bg-gray-100">
                  <p><strong>Model:</strong> {rental.model}</p>
                  <p><strong>Pick-Up Date:</strong> {rental.pickUpDate}</p>
                  <p><strong>Price:</strong> {rental.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <button onClick={() => goToPage("/my-bookings")} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md w-full md:w-1/3">
            View Bookings
          </button>
          <button onClick={() => goToPage("/rent-a-car")} className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md w-full md:w-1/3">
            Rent a Car
          </button>
          <button onClick={() => goToPage("/")} className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md w-full md:w-1/3 mt-4">
            Go to Home
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
