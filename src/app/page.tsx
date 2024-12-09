import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HomeSection from '@/components/HomeSection';
import RentCars from '@/components/RentCars';
import CarDetails from '@/components/CarsSelector';
import Contact from '@/components/Contact';
import Dashboard from '@/components/Dashboard';
import Footer from '@/components/Footer';




const HomePage = () => {
    return (
        <div className="bg-gradient-to-r from-[#2B3A42] via-[#40514E] to-[#A4B3B6]">
            <Header />
            <HeroSection />
            <HomeSection />
            <RentCars />
             <CarDetails />
            < Contact />
             < Dashboard />
             <Footer />
        
        </div>
    );
};

export default HomePage;
