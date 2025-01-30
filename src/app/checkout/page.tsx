// src/app/checkout/page.tsx
'use client'; // Client-side code for useState, useEffect, etc.

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
  const [shippingRates, setShippingRates] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    // Retrieve shipping rates from the URL query
    const query = new URLSearchParams(window.location.search);
    const rates = query.get('shippingRates');
    if (rates) {
      setShippingRates(JSON.parse(rates));
    }
  }, []);

  const handlePlaceOrder = () => {
    // Handle order placement logic here
    console.log('Placing order with shipping rates:', shippingRates);
    // Redirect to order confirmation page or other necessary steps
  };

  return (
    <div>
      <h1>Checkout</h1>
      {shippingRates ? (
        <div>
          <h2>Shipping Rates</h2>
          <p>Rate: {shippingRates.rate}</p>
          {/* You can add more details from shippingRates here */}
        </div>
      ) : (
        <p>No shipping rates available</p>
      )}

      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};
export default CheckoutPage;
