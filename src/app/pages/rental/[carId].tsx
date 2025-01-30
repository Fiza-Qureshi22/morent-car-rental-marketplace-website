'use client';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const CarDetailPage = () => {
  const router = useRouter();
  const { carId } = router.query;

  interface Car {
    name: string;
    description: string;
    price: number;
    originalPrice: number;
    imageUrl: string;
    thumbnails: string[];
  }

  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    if (carId) {
      const carData: { [key: number]: Car } = {
        1: {
          name: 'Nissan GT - R',
          description: 'NISMO has become the embodiment of Nissan’s outstanding performance...',
          price: 80,
          originalPrice: 100,
          imageUrl: '/car (9).png',
          thumbnails: ['/car (3).png', '/car (8).png', '/car (4).png']
        },
        2: {
          name: 'Toyota Supra',
          description: 'The Toyota Supra is a well-known sports car...',
          price: 85,
          originalPrice: 120,
          imageUrl: '/car (10).png',
          thumbnails: ['/car (2).png', '/car (7).png', '/car (5).png']
        },
        3: {
          name: 'BMW M4',
          description: 'BMW’s M4 offers superb performance and sleek design...',
          price: 95,
          originalPrice: 130,
          imageUrl: '/car (11).png',
          thumbnails: ['/car (6).png', '/car (12).png', '/car (13).png']
        }
      };

      const id = Array.isArray(carId) ? carId[0] : carId;
      setCar(carData[Number(id)]);
    }
  }, [carId]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">{car.name}</h1>
      <Image src={car.imageUrl} alt={car.name} width={600} height={400} />
      <p>{car.description}</p>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">${car.price}.00/day</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-500">Rent Now</button>
      </div>
    </div>
  );
};

export default CarDetailPage;
