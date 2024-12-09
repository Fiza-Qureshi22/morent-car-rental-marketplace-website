import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 lg:py-16">
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between">
     
        <div className="text-left flex-1 mb-8 lg:mb-0">
          <div className="flex flex-col items-start">
            <h1 className="text-blue-600 text-4xl font-bold mb-4">MORENT</h1> 
            <p className="text-gray-500 text-lg max-w-xs leading-relaxed">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>
        </div>

      
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16 text-gray-500 text-lg">
         
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 text-xl mb-4">About</h3>
            <ul>
              <li className="mb-2 hover:text-blue-600 cursor-pointer">How it works</li>
              <li className="mb-2 hover:text-blue-600 cursor-pointer">Featured</li>
              <li className="mb-2 hover:text-blue-600 cursor-pointer">Partnership</li>
              <li className="hover:text-blue-600 cursor-pointer">Business Relation</li>
            </ul>
          </div>

       
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 text-xl mb-4">Community</h3>
            <ul>
              <li className="mb-2 hover:text-blue-600 cursor-pointer">Events</li>
              <li className="mb-2 hover:text-blue-600 cursor-pointer">Blog</li>
              <li className="mb-2 hover:text-blue-600 cursor-pointer">Podcast</li>
              <li className="hover:text-blue-600 cursor-pointer">Invite a friend</li>
            </ul>
          </div>

      
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 text-xl mb-4">Socials</h3>
            <ul>
              <li className="mb-2 hover:text-blue-600 cursor-pointer">Discord</li>
              <li className="mb-2 hover:text-blue-600 cursor-pointer">Instagram</li>
              <li className="mb-2 hover:text-blue-600 cursor-pointer">Twitter</li>
              <li className="hover:text-blue-600 cursor-pointer">Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between mt-12 text-base lg:text-lg text-gray-600 border-t pt-4">
        <p>©2022 MORENT. All rights reserved</p>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <a href="#" className="hover:text-blue-600">
            Privacy & Policy
          </a>
          <a href="#" className="hover:text-blue-600">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
