import React from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeSection from "@/components/HomeSection";
import Cars from "./Cars/page";
import CarsSelector from "@/components/CarsSelector";
import Dashboard from "@/components/Dashboard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Car from "@/sanity/schemaTypes/car";





const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HomeSection />
      <Cars />
     <CarsSelector/>
      <Dashboard />
      <Contact />
      <Footer />
     
    </div>
  )
}

export default page
