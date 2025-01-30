'use client';

import { useState } from 'react';

const ShippingCalculator = () => {
  const [shippingData, setShippingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchShippingRates = async () => {
    setLoading(true);
    setError(null); // Reset error before new request

    const fromAddress = document.getElementById("from-address") as HTMLInputElement;
    const toAddress = document.getElementById("to-address") as HTMLInputElement;
    const weight = document.getElementById("weight") as HTMLInputElement;

    if (!fromAddress.value || !toAddress.value || !weight.value) {
      setError('All fields are required!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/shipEngine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: {
            address_line_1: fromAddress.value,
            city: "New York",
            postal_code: "10001",
            country_code: "US"
          },
          to: {
            address_line_1: toAddress.value,
            city: "Los Angeles",
            postal_code: "90001",
            country_code: "US"
          },
          weight: { value: parseFloat(weight.value), unit: "pound" },
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setShippingData(data);
      } else {
        setError(data.errors ? data.errors[0].message : 'Something went wrong!');
      }
    } catch (err) {
      setError('Failed to fetch shipping rates.');
    }

    setLoading(false);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center p-8">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Shipping Rate Calculator</h2>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="text-lg text-gray-700">From Address</label>
            <input 
              id="from-address"
              type="text"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-3/4"
              placeholder="123 Main St"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-lg text-gray-700">To Address</label>
            <input 
              id="to-address"
              type="text" 
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-3/4"
              placeholder="456 Another St"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-lg text-gray-700">Weight (lbs)</label>
            <input 
              id="weight"
              type="number" 
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-3/4"
              placeholder="5"
            />
          </div>

          <div className="text-center">
            <button
              onClick={fetchShippingRates}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              {loading ? 'Fetching Rates...' : 'Get Shipping Rates'}
            </button>
          </div>
          
          {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        </div>

        <div className="mt-6">
          {loading && (
            <div className="text-center text-gray-500">Loading...</div>
          )}
          {shippingData && !loading && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600">Shipping Details</h3>
              <pre className="mt-2 text-sm text-gray-700 whitespace-pre-wrap">{JSON.stringify(shippingData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShippingCalculator;
