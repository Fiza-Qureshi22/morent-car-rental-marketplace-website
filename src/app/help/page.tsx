'use client';
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle, FaCommentDots } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const HelpCenter: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('faq');
  const router = useRouter();

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 text-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center">Help & Support Center</h1>
        <p className="mt-2 text-sm text-center">Get assistance with your rental or ask us anything. We are here to help!</p>
      </header>

      {/* Help Center Navigation */}
      <div className="flex justify-center gap-6 p-4 bg-gray-100 shadow-lg">
        <button
          className={`p-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeTab === 'faq' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={() => handleTabChange('faq')}
        >
          <FaQuestionCircle className="inline-block mr-2" /> FAQ
        </button>
        <button
          className={`p-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeTab === 'contact' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={() => handleTabChange('contact')}
        >
          <FaPhoneAlt className="inline-block mr-2" /> Contact Us
        </button>
        <button
          className={`p-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeTab === 'chat' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={() => handleTabChange('chat')}
        >
          <FaCommentDots className="inline-block mr-2" /> Live Chat
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex-1">
        {activeTab === 'faq' && (
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
                <h3 className="font-semibold text-lg">How can I rent a car?</h3>
                <p className="mt-2 text-sm">You can rent a car by selecting your desired model, pick-up location, and drop-off details on our rental page.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
                <h3 className="font-semibold text-lg">What are the payment options?</h3>
                <p className="mt-2 text-sm">We accept all major credit cards and PayPal for secure payments.</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contact Us</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out">
                Submit
              </button>
            </form>
          </section>
        )}

        {activeTab === 'chat' && (
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Live Chat</h2>
            <button
              onClick={toggleChat}
              className="w-full p-3 mt-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
            >
              {isChatOpen ? 'Close Chat' : 'Start Chat'}
            </button>
            {isChatOpen && (
              <div className="mt-4 p-4 bg-white shadow-lg rounded-lg space-y-4">
                <div className="text-sm text-gray-600">You are now connected to an agent.</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-semibold text-blue-600">Agent:</div>
                    <div className="text-sm">Hello! How can I assist you today?</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-semibold text-blue-600">You:</div>
                    <div className="text-sm">I need help with my rental.</div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => router.push('/dashboard')}
        className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
      >
        <FaEnvelope className="text-xl" />
      </button>
    </div>
  );
};

export default HelpCenter;
