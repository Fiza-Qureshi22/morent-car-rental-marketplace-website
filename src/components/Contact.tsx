'use client';
import React, { useState } from 'react';
import { FaCcVisa, FaCcPaypal, FaBitcoin } from 'react-icons/fa';
import { MdOutlineDirectionsCar } from 'react-icons/md';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [paymentOption, setPaymentOption] = useState<string>(''); // State to manage selected payment option
  const [accountNumber, setAccountNumber] = useState<string>(''); // State to manage account number input
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [discountMessage, setDiscountMessage] = useState<string | null>(null); // Discount message state

  // Function to generate a random token
  const generateToken = (): string => {
    return 'TOKEN-' + Math.random().toString(36).substring(2, 15); // Random token format
  };

  // Function to handle the "Rent Now" form submission
  const handleRentNow = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if all fields are filled
    const inputs = document.querySelectorAll('input[required], select[required]');
    let isValid = true;
    inputs.forEach((input) => {
      if ((input as HTMLInputElement).value === '') {
        isValid = false;
      }
    });

    if (!isValid) {
      setErrorMessage('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Generate token on Rent Now button click
    const newToken = generateToken();
    setToken(newToken);

    // Simulate API call or processing
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage('🚗 Thank you for booking! Our team will contact you soon. 🚗'); // Success message
      setTimeout(() => setMessage(null), 5000); // Remove message after 5 seconds
    }, 2000); // Simulating a 2-second delay
  };

  // Function to handle payment option selection
  const handlePaymentOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = e.target.value;
    setPaymentOption(selectedOption);
    setAccountNumber(''); // Reset account number when payment method changes

    // Update token when payment method is selected
    const newToken = generateToken();
    setToken(newToken);

    // Check for discount
    if (selectedOption === 'paypal') {
      setDiscountMessage('💰 Special discount applied with PayPal payment! Enjoy 10% off!');
    } else if (selectedOption === 'bitcoin') {
      setDiscountMessage('💰 Special discount applied with Bitcoin payment! Enjoy 15% off!');
    } else {
      setDiscountMessage(null); // Reset discount message if no payment option selected
    }
  };

  // Function to handle account number input change
  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountNumber(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 px-6 pt-6">
          Rental Information
        </h2>

        <form onSubmit={handleRentNow} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Billing Info */}
            <section className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Billing Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
  type="text"
  placeholder="Name"
  required
  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-visible min-w-[100%]"
/>

                <input
                  type="text"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Address"
                  required
                  className="w-full col-span-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Town / City"
                  required
                  className="w-full col-span-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </section>

            {/* Rental Info */}
            <section className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Rental Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 mb-1 flex items-center">
                    <MdOutlineDirectionsCar className="mr-2 text-blue-500" />
                    Pick-Up
                  </label>
                  <select required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your location</option>
                    {/* Pakistan Cities */}
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Sukkur">Sukkur</option>
                  </select>
                  <input
                    type="date"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1 flex items-center">
                    <MdOutlineDirectionsCar className="mr-2 text-blue-500" />
                    Drop-Off
                  </label>
                  <select required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your location</option>
                    {/* Pakistan Cities */}
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Sukkur">Sukkur</option>
                  </select>
                  <input
                    type="date"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Payment Method</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="paypal"
                    onChange={handlePaymentOptionChange}
                    checked={paymentOption === 'paypal'}
                  />
                  <label htmlFor="paypal" className="ml-2 flex items-center">
                    <FaCcPaypal className="mr-2 text-blue-600" />
                    PayPal
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="bitcoin"
                    onChange={handlePaymentOptionChange}
                    checked={paymentOption === 'bitcoin'}
                  />
                  <label htmlFor="bitcoin" className="ml-2 flex items-center">
                    <FaBitcoin className="mr-2 text-orange-600" />
                    Bitcoin
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="visa"
                    onChange={handlePaymentOptionChange}
                    checked={paymentOption === 'visa'}
                  />
                  <label htmlFor="visa" className="ml-2 flex items-center">
                    <FaCcVisa className="mr-2 text-blue-500" />
                    Visa
                  </label>
                </div>
              </div>
              {paymentOption && (
                <div>
                  {discountMessage && <p className="text-green-500 mt-2">{discountMessage}</p>}
                  {paymentOption !== 'visa' && (
                    <input
                      type="text"
                      value={accountNumber}
                      onChange={handleAccountNumberChange}
                      placeholder="Enter your account number"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                </div>
              )}
            </section>

            {/* Error and Success Messages */}
            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
            {message && (
              <p className="text-green-500 mt-4">{message}</p>
            )}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Rent Now'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* Payment Summary or Other Information */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
