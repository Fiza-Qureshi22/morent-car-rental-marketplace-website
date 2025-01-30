"use client";

import { client } from "@/sanity/lib/client";
import { useRouter } from "next/router";
import Image from "next/image";

// Fetch car details based on carId (slug)
export async function getStaticPaths() {
  const cars = await client.fetch(`*[_type=="car"]{ slug }`);
  const paths = cars.map((car: any) => ({
    params: { carId: car.slug.current },
  }));

  return { paths, fallback: false }; // 'false' for fully static pages
}

export async function getStaticProps({ params }: { params: { carId: string } }) {
  const { carId } = params;
  const car = await client.fetch(`*[_type=="car" && slug.current == $carId][0]`, {
    carId,
  });

  return {
    props: {
      car,
    },
  };
}

export default function CarDetail({ car }: { car: any }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen p-5 bg-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#3563E9] to-[#54A6FF]">
        {car.name} - Rent Details
      </h1>
      <div className="flex justify-center">
        <div className="max-w-lg bg-white border border-[#3563E9] rounded-lg shadow-lg">
          <Image
            className="p-4 rounded-t-lg"
            src={car.imageUrl}
            alt={`${car.name} image`}
            width={500}
            height={300}
          />
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{car.name} - {car.type}</h2>
            <p className="text-sm text-gray-600">Seating Capacity: {car.seatingCapacity}</p>
            <p className="text-sm text-gray-600">Transmission: {car.transmission}</p>
            <p className="text-sm text-gray-600">Fuel Capacity: {car.fuelCapacity}L</p>
            <p className="text-lg font-bold text-gray-800">{car.pricePerDay}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
