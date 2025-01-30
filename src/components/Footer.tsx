import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaDiscord, FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 lg:py-16 text-gray-800 shadow-lg">
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        {/* Brand Section */}
        <div className="text-left flex-1 mb-8 lg:mb-0">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-4 transition-transform duration-500 transform hover:scale-105">
              MORENT
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-500 max-w-xs">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16 text-lg">
          {/* About */}
          <div className="flex-1">
            <h3 className="font-semibold text-blue-600 text-xl mb-4 hover:text-blue-800 transition-colors duration-300">
              About
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                How it works
              </li>
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                Featured
              </li>
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                Partnership
              </li>
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                Business Relation
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="flex-1">
            <h3 className="font-semibold text-blue-600 text-xl mb-4 hover:text-blue-800 transition-colors duration-300">
              Community
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                Events
              </li>
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                Blog
              </li>
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                Podcast
              </li>
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                Invite a friend
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex-1">
            <h3 className="font-semibold text-blue-600 text-xl mb-4 hover:text-blue-800 transition-colors duration-300">
              Socials
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mr-2 text-blue-600 hover:text-blue-800"
                >
                  <FaDiscord /> Discord
                </a>
              </li>
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mr-2 text-blue-600 hover:text-blue-800"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mr-2 text-blue-600 hover:text-blue-800"
                >
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mr-2 text-blue-600 hover:text-blue-800"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                <a
                  href="https://www.linkedin.com/in/fiza-nazz-b86437318/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mr-2 text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                <a
                  href="https://github.com/Fiza-Qureshi22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mr-2 text-blue-600 hover:text-blue-800"
                >
                  <FaGithub /> GitHub
                </a>
              </li>
              <li className="hover:text-blue-800 cursor-pointer transform transition-all hover:scale-105 duration-300">
                <a
                  href="https://app.netlify.com/teams/fiza-qureshi22/sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mr-2 text-blue-600 hover:text-blue-800"
                >
                  <FaExternalLinkAlt /> Netlify
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between mt-12 text-base lg:text-lg text-gray-600 border-t pt-4">
        <p className="opacity-80 hover:opacity-100 transition-opacity duration-500">
          ©2022 MORENT. All rights reserved
        </p>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <a
            href="#"
            className="hover:text-blue-600 opacity-80 hover:opacity-100 transition-opacity duration-500"
          >
            Privacy & Policy
          </a>
          <a
            href="#"
            className="hover:text-blue-600 opacity-80 hover:opacity-100 transition-opacity duration-500"
          >
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
