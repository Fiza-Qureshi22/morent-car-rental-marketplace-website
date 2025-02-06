'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiClock, 
  FiCheckCircle, 
  FiUser, 
  FiCalendar 
} from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaCar, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

// Type definitions
type FormState = 'idle' | 'submitting' | 'submitted';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  icon: React.ReactNode;
}

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const ContactPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    carModel: '',
    rentalDate: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormState('submitted');
    setFormData({
      name: '',
      email: '',
      carModel: '',
      rentalDate: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact MoRenT Luxury Rentals</h1>
          <p className="text-xl text-blue-100">Experience Premium Service & Support</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Enquiry Form</h2>
            
            {formState === 'submitted' ? (
              <div className="text-center p-8 space-y-4">
                <FiCheckCircle className="text-6xl text-green-500 mx-auto" />
                <h3 className="text-xl font-semibold">Message Sent Successfully!</h3>
                <p className="text-gray-600">Our team will contact you within 24 hours</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <InputField
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    icon={<FiUser className="text-gray-400" />}
                  />
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    icon={<FiMail className="text-gray-400" />}
                  />
                  <InputField
                    label="Car Model Interest"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleInputChange}
                    icon={<FaCar className="text-gray-400" />}
                  />
                  <InputField
                    label="Preferred Rental Date"
                    name="rentalDate"
                    type="date"
                    value={formData.rentalDate}
                    onChange={handleInputChange}
                    icon={<FiCalendar className="text-gray-400" />}
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                      placeholder="Specify your requirements..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  {formState === 'submitting' ? (
                    <>
                      <Spinner />
                      Sending...
                    </>
                  ) : (
                    'Send Enquiry'
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <ContactInfoItem
                icon={<FiMapPin className="text-blue-600" />}
                title="Headquarters"
                content="MoRenT Luxury Rentals, Karachi, Pakistan"
              />
              <ContactInfoItem
                icon={<FiPhone className="text-blue-600" />}
                title="24/7 Support"
                content="+92 312 363 2197"
                href="tel:+923123632197"
              />
              <ContactInfoItem
                icon={<FiMail className="text-blue-600" />}
                title="Email"
                content="FizaNaazz32@gmail.com"
                href="mailto:FizaNaazz32@gmail.com"
              />
              <ContactInfoItem
                icon={<FiClock className="text-blue-600" />}
                title="Working Hours"
                content="Mon-Sun: 24/7 Availability"
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <SocialIcon
                    icon={<FaWhatsapp className="text-2xl" />}
                    href="https://wa.me/923123632197"
                  />
                  <SocialIcon
                    icon={<FaLinkedinIn className="text-2xl" />}
                    href="https://www.linkedin.com/in/fiza-nazz-b86437318/"
                  />
                  <SocialIcon
                    icon={<FaFacebookF className="text-2xl" />}
                    href="https://facebook.com/morent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Instant Quote</h3>
              <p className="mb-6">Get immediate pricing for your selected vehicle and duration</p>
              <button
                onClick={() => router.push('/quote')}
                className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Instant Quote
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components with TypeScript
const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  icon 
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <div className="absolute left-3 top-3.5 text-xl">{icon}</div>
    </div>
  </div>
);

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content, href }) => (
  <div className="flex gap-4 mb-6">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      {href ? (
        <a href={href} className="text-gray-600 hover:text-blue-600 transition-colors">
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors text-blue-600"
  >
    {icon}
  </a>
);

const Spinner = () => (
  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
);

export default ContactPage;