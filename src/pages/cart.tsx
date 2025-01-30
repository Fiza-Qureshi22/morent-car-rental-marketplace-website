"use client";

import { useState } from "react";
import { useRouter } from "next/router";

export default function Cart() {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold text-center mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cart.length > 0 ? (
          cart.map((car, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <h2>{car.name}</h2>
              <p>{car.type}</p>
              {/* More details about the car can be displayed here */}
            </div>
          ))
        ) : (
          <p>No items in cart!</p>
        )}
      </div>
    </div>
  );
}
