import React from 'react';
import { FaCcVisa, FaCcPaypal, FaBitcoin } from 'react-icons/fa';
import { MdOutlineDirectionsCar } from 'react-icons/md';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 px-6 pt-6">
          Rental Information
        </h2>

        
        <form className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 py-8">
        
          <div className="lg:col-span-2 space-y-6">
          
            <section className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Billing Info
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full col-span-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Town / City"
                  className="w-full col-span-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </section>

            
            <section className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Rental Info
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               
                <div>
                  <label className="block text-gray-600 mb-1 flex items-center">
                    <MdOutlineDirectionsCar className="mr-2 text-blue-500" />
                    Pick-Up
                  </label>
                  <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your location</option>
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
                  <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your location</option>
                  </select>
                  <input
                    type="date"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </section>

          
            <section className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Payment Method
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="radio" name="payment" id="creditCard" />
                  <label htmlFor="creditCard" className="ml-2 flex items-center">
                    <FaCcVisa className="mr-2 text-blue-600" />
                    Credit Card
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Expiration Date"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Card Holder"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center">
                  <input type="radio" name="payment" id="paypal" />
                  <label htmlFor="paypal" className="ml-2 flex items-center">
                    <FaCcPaypal className="mr-2 text-blue-500" />
                    PayPal
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="payment" id="bitcoin" />
                  <label htmlFor="bitcoin" className="ml-2 flex items-center">
                    <FaBitcoin className="mr-2 text-orange-500" />
                    Bitcoin
                  </label>
                </div>
              </div>
            </section>

        
            <section className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Confirmation
              </h3>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  I agree with sending me marketing and promotional emails.
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  I agree with terms and conditions.
                </label>
              </div>
            </section>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
            >
              Rent Now
            </button>
          </div>

        
          <div className="bg-gray-50 p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Rental Summary
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$80.00</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Rental Price</span>
                <span>$80.00</span>
              </div>
              <button className="w-full py-2 bg-blue-500 text-white rounded-md">
                Apply Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
