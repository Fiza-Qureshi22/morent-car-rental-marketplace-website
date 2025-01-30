'use client';

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState, Suspense } from "react";

export default function BookingNowPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}

function BookingContent() {
  const searchParams = useSearchParams();

  const name = searchParams?.get("name") || "Car Name";
  const price = searchParams?.get("price") || "Price";
  const imageUrl = searchParams?.get("imageUrl") || ""; // Get imageUrl from query parameters

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Save booking details to localStorage
  useEffect(() => {
    const bookingDetails = { name, price, imageUrl, date: new Date().toLocaleDateString() };
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
  }, [name, price, imageUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userDetails = { ...userInfo, bookingDetails: { name, price, imageUrl, date: new Date().toLocaleDateString() } };
    localStorage.setItem("userDetails", JSON.stringify(userDetails)); // Save user details to localStorage
    alert("Booking Confirmed! Details saved successfully.");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4 sm:p-6 lg:p-8">
      {/* Booking Confirmation Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
          Booking Confirmed
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mt-2">Your car rental is confirmed!</p>
      </header>

      {/* Booking Details */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-8">
        {/* Car Image */}
        {imageUrl ? (
          <div className="relative h-32 sm:h-50 w-80 rounded-lg overflow-hidden mb-6">
            <Image
              src={imageUrl}
              alt={`${name} image`}
              layout="fill"
            />
          </div>
        ) : (
          <div className="h-28 sm:h-30 w-full bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
            <span className="text-xl text-gray-700">No Image Available</span>
          </div>
        )}

        <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 mb-4">
          You have successfully booked {name}!
        </h2>
        <p className="text-xl sm:text-2xl text-gray-700 mb-6">Your rental price is {price}.</p>

        {/* User Information Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">Enter Your Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              value={userInfo.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="p-4 border rounded-lg text-lg"
              required
            />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="p-4 border rounded-lg text-lg"
              required
            />
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="p-4 border rounded-lg text-lg"
              required
            />
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="p-4 border rounded-lg text-lg"
            />
            <input
              type="text"
              name="message"
              value={userInfo.message}
              onChange={handleInputChange}
              placeholder="Additional Message"
              className="p-4 border rounded-lg text-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
          >
            Confirm Booking
          </button>
        </form>

        {/* Booking Confirmation Message */}
        <div className="text-lg sm:text-xl text-gray-600 mb-8">
          <p>You will receive a confirmation email soon.</p>
          <p className="mt-4 text-gray-700 font-semibold">Thank you for choosing Morent!</p>
        </div>

        {/* Booking Actions */}
        <div className="text-center mt-8">
          <button
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
            onClick={() => window.location.href = '/dashboard'} // Redirect to dashboard page
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
