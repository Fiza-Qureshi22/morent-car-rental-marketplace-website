// components/Checkout.tsx
'use client';
import { useState } from 'react';

const Checkout = () => {
  const [shippingRates, setShippingRates] = useState(null);

  const handleShippingCalculation = async () => {
    const response = await fetch('/api/shipping', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: { country: 'US', postal_code: '10001' },
        to: { country: 'US', postal_code: '90001' },
        weight: 20
      })
    });

    const data = await response.json();
    setShippingRates(data);
  };

  return (
    <div className="p-4">
      <button
        onClick={handleShippingCalculation}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Calculate Shipping
      </button>
      {shippingRates && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Shipping Rates:</h3>
          <pre>{JSON.stringify(shippingRates, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Checkout;
