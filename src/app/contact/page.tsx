"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    carName: "",
    price: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you could send the form data to an API or email service
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      carName: "",
      price: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-12 px-6 sm:px-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-700">
          Have any questions or need assistance? We are here to help with our luxurious cars!
        </p>
      </header>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-6">
        {formSubmitted ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-green-600">Thank you for reaching out!</h2>
            <p className="mt-4 text-gray-600">We will get back to you with the details shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="carName" className="block text-sm font-semibold text-gray-700">
                Car Model Name
              </label>
              <input
                type="text"
                id="carName"
                name="carName"
                value={formData.carName}
                onChange={handleInputChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-semibold text-gray-700">
                Car Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                rows={5}
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full hover:bg-blue-500 focus:ring-2 focus:ring-blue-300"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Our Contact Info</h3>
        <p className="mt-4 text-lg text-gray-600">MoRenT</p>
        <p className="mt-2 text-gray-600">karachi pakistan </p>
        <p className="mt-4 text-lg text-gray-600">Phone: +92 3123632197</p>
        <p className="mt-2 text-lg text-gray-600">Email: FizaNaazz32@gmail.com</p>
      </div>

      {/* Request a Quote CTA */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Interested in a Quote?</h3>
        <p className="mt-4 text-lg text-gray-600">
          If you’re interested in purchasing or renting one of our cars, please fill out the form or get in touch for a personalized quote!
        </p>
        <button
          className="mt-6 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-500 focus:ring-2 focus:ring-green-300"
          onClick={() => alert("Request a Quote functionality coming soon!")}
        >
          Request a Quote
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
