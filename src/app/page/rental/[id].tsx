"use client";

import { useRouter } from "next/router";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";

async function getCarDetails(id: string) {
  const fetchData = await client.fetch(
    `*[_type=="car" && _id == $id]{
      name,
      type,
      pricePerDay,
      fuelCapacity,
      seatingCapacity,
      transmission,
      tags,
      "imageUrl": image.asset->url
    }`,
    { id }
  );
  return fetchData[0]; // Fetch the first result
}

export default function CarDetail() {
  const router = useRouter();
  const { id } = router.query; // Get car ID from the route
  const [car, setCar] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getCarDetails(id as string).then((data) => setCar(data));
    }
  }, [id]);

  if (!car) return <div>Loading...</div>;

  return (
    <div className="w-full min-h-screen p-5 bg-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#3563E9] to-[#54A6FF]">
        {car.name} - Rent Details
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <Image
          src={car.imageUrl}
          alt={car.name}
          width={500}
          height={300}
          className="rounded-lg"
        />
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">{car.name}</h2>
          <p className="text-sm text-gray-600">Type: {car.type}</p>
          <p className="text-sm text-gray-600">Price: {car.pricePerDay}</p>
          <p className="text-sm text-gray-600">Fuel Capacity: {car.fuelCapacity}L</p>
          <p className="text-sm text-gray-600">Seating Capacity: {car.seatingCapacity}</p>
          <p className="text-sm text-gray-600">Transmission: {car.transmission}</p>
        </div>
        <button
          onClick={() => alert("You have rented this car!")}
          className="mt-4 w-full bg-gradient-to-r from-[#3563E9] to-[#54A6FF] hover:from-[#3563E9] hover:to-[#54A6FF] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
        >
          Confirm Rental
        </button>
      </div>
    </div>
  );
}
