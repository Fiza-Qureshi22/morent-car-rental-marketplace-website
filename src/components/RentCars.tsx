/**
 * The `RentCars` component in this TypeScript React code fetches car data from Sanity, displays a list
 * of cars with rent options, and allows users to book a selected car by filling out a form.
 * @returns The `RentCars` component is being returned, which contains the JSX structure for a car
 * rental application. The component fetches car data from Sanity, displays a list of available cars,
 * allows users to select a car for rental, and provides a form for users to input their rental details
 * and confirm the booking. The component also includes animations and styling for a visually appealing
 * user experience.
 */
// "use client";

// import React, { useState, useEffect } from "react";
// import { FaGasPump, FaUsers, FaCogs, FaCheck } from "react-icons/fa";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// // Fetch car data from Sanity
// async function getData() {
//   const fetchData = await client.fetch(`*[_type=="car"]{
//     name,
//     type,
//     pricePerDay,
//     fuelCapacity,
//     seatingCapacity,
//     transmission,
//     tags,
//     "imageUrl": image.asset->url
//   }`);
//   return fetchData;
// }

// const RentCars = () => {
//   const [selectedCar, setSelectedCar] = useState<any | null>(null);
//   const [data, setData] = useState<any[]>([]); // For storing dynamic car data from Sanity
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     location: "",
//     rentalDays: 1,
//     paymentMethod: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     async function fetchCars() {
//       const cars = await getData();
//       setData(cars);
//     }
//     fetchCars();
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     if (
//       formData.name &&
//       formData.contact &&
//       formData.location &&
//       formData.rentalDays &&
//       formData.paymentMethod
//     ) {
//       setIsSubmitting(true);
//       console.log("Rental Details:", { ...formData, car: selectedCar });
//       alert(
//         `Thank you! Your booking for ${selectedCar.name} is confirmed. Payment Method: ${formData.paymentMethod}`
//       );
//       setSelectedCar(null);
//       setIsSubmitting(false);
//     } else {
//       alert("Please fill all the fields.");
//     }
//   };

//   return (
//     <section className="relative bg-white p-4 lg:p-8 flex flex-col lg:flex-row min-h-screen">
//       {/* Left-side: Car Selection */}
//       <div className="bg-white shadow-md border-r border-gray-300 w-full lg:w-1/4 p-4 lg:sticky lg:top-0 lg:h-screen">
//         <h3 className="text-lg font-semibold mb-4">Selected Cars</h3>
//         <ul className="space-y-2">
//           {data.map((car, index) => (
//             <li
//               key={index}
//               onClick={() => setSelectedCar(car)}
//               className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${
//                 selectedCar === car ? "bg-blue-50 border-l-4 border-blue-600" : ""
//               }`}
//             >
//               <span>{car.name}</span>
//               {selectedCar === car && <FaCheck className="text-blue-600" />}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Content: Car List */}
//       <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
//         <h2 className="text-2xl font-semibold mb-6">Popular Cars</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
//           {data.map((car, index) => (
//             <motion.div
//               key={index}
//               className="bg-white shadow-md border rounded-lg p-4 flex flex-col items-center"
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="w-full flex justify-center">
//                 <Image
//                   src={car.imageUrl}
//                   alt={car.name}
//                   width={200}
//                   height={150}
//                   className="w-full h-32 object-contain mb-4"
//                 />
//               </div>
//               <h3 className="text-lg font-semibold">{car.name}</h3>
//               <p className="text-sm text-gray-600">{car.type}</p>
//               <div className="flex space-x-4 mt-2">
//                 <FaGasPump /> {car.fuelCapacity}L
//                 <FaUsers /> {car.seatingCapacity} people
//                 <FaCogs /> {car.transmission}
//               </div>
//               <button
//                 onClick={() => setSelectedCar(car)}
//                 className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//               >
//                 Rent Now
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Modal: Rent Car Form */}
//       {selectedCar && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <motion.div
//             className="bg-white rounded-lg p-8 w-96 shadow-lg relative"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <button
//               onClick={() => setSelectedCar(null)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//             >
//               ×
//             </button>
//             <h2 className="text-2xl font-bold mb-4 text-light-blue-500">
//               Rent {selectedCar.name}
//             </h2>
//             <div className="space-y-6">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 className="block w-full p-4 border-2 border-light-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue-400 transition duration-300"
//                 onChange={handleInputChange}
//                 value={formData.name}
//               />
//               <input
//                 type="text"
//                 name="contact"
//                 placeholder="Contact Info"
//                 className="block w-full p-4 border-2 border-light-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue-400 transition duration-300"
//                 onChange={handleInputChange}
//                 value={formData.contact}
//               />
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Pickup Location"
//                 className="block w-full p-4 border-2 border-light-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue-400 transition duration-300"
//                 onChange={handleInputChange}
//                 value={formData.location}
//               />
//               <input
//                 type="number"
//                 name="rentalDays"
//                 min="1"
//                 placeholder="Rental Days"
//                 className="block w-full p-4 border-2 border-light-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue-400 transition duration-300"
//                 onChange={handleInputChange}
//                 value={formData.rentalDays}
//               />
//               <input
//                 type="text"
//                 name="paymentMethod"
//                 placeholder="Payment Method (e.g., Credit Card)"
//                 className="block w-full p-4 border-2 border-light-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-blue-400 transition duration-300"
//                 onChange={handleInputChange}
//                 value={formData.paymentMethod}
//               />
//               <button
//                 onClick={handleSubmit}
//                 className={`w-full bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white py-3 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Processing..." : "Confirm Rental"}
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default RentCars;
