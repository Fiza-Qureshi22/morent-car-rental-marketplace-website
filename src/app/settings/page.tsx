'use client';

import React, {
  useState,
  useEffect,
  Fragment,
  ChangeEvent,
  ReactNode,
} from 'react';
import {
  FaUser,
  FaBell,
  FaCreditCard,
  FaCarSide,
  FaPlus,
  FaEdit,
  FaTrash,
  FaUpload,
  FaLock,
  FaHistory,
  FaCcVisa,
  FaCcMastercard,
  FaSortAmountDown,
} from 'react-icons/fa';
import { Dialog, Transition } from '@headlessui/react';
import { HiX } from 'react-icons/hi';
import Image from 'next/image';

// ========================================================
//                       TYPE DEFINITIONS
// ========================================================

interface Car {
  id: number;
  model: string;
  plate: string;
  price: number;
  image: string;
  status: 'Available' | 'Rented';
  trips: number;
  rating: number;
}

interface Payment {
  id: number;
  type: 'Visa' | 'MasterCard';
  last4: string;
  expiry: string;
}

interface RentalRecord {
  id: number;
  model: string;
  start: string;
  end: string;
  cost: number;
}

// ========================================================
//                     MAIN COMPONENT
// ========================================================

const Settings: React.FC = () => {
  // -----------------------------
  // Global Tab State
  // -----------------------------
  const [activeTab, setActiveTab] = useState('profile');

  // -----------------------------
  // Profile States
  // -----------------------------
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Driver',
    email: 'john.driver@example.com',
    phone: '123-456-7890',
    image: '/profiles.png',
    rating: 4.9,
    achievements: ['Top Host', 'Rider Favorite'],
    bio: 'Passionate about providing the best car rental experience. Always on the move and ready for your next adventure!',
  });
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [profileForm, setProfileForm] = useState(profile);

  // -----------------------------
  // Vehicle States
  // -----------------------------
  const [cars, setCars] = useState<Car[]>([
    {
      id: 1,
      model: 'Tesla Model S',
      plate: 'ABC-1234',
      price: 99,
      image: '/orange.png',
      status: 'Available',
      trips: 12,
      rating: 4.8,
    },
    {
      id: 2,
      model: 'BMW X5',
      plate: 'XYZ-5678',
      price: 89,
      image: '/yellow.png',
      status: 'Rented',
      trips: 24,
      rating: 4.5,
    },
    {
      id: 3,
      model: 'Audi A8',
      plate: 'AUD-2023',
      price: 110,
      image: '/white.png',
      status: 'Available',
      trips: 8,
      rating: 4.7,
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editVehicleOpen, setEditVehicleOpen] = useState(false);
  const [vehicleForm, setVehicleForm] = useState<Car | null>(null);
  const [fleetFilter, setFleetFilter] = useState<'All' | 'Available' | 'Rented'>(
    'All'
  );

  // -----------------------------
  // Payment & Notification States
  // -----------------------------
  const [payments, setPayments] = useState<Payment[]>([
    { id: 1, type: 'Visa', last4: '1234', expiry: '12/24' },
    { id: 2, type: 'MasterCard', last4: '5678', expiry: '10/23' },
  ]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const [rentalHistory, setRentalHistory] = useState<RentalRecord[]>([
    { id: 1, model: 'Tesla Model S', start: 'Jan 10, 2025', end: 'Jan 15, 2025', cost: 495 },
    { id: 2, model: 'BMW X5', start: 'Feb 01, 2025', end: 'Feb 05, 2025', cost: 356 },
    { id: 3, model: 'Audi A8', start: 'Mar 03, 2025', end: 'Mar 08, 2025', cost: 580 },
  ]);

  // -----------------------------
  // Tab Definitions
  // -----------------------------
  const tabs = [
    { id: 'profile', icon: <FaUser />, label: 'Profile' },
    { id: 'security', icon: <FaLock />, label: 'Security' },
    { id: 'notifications', icon: <FaBell />, label: 'Notifications' },
    { id: 'payment', icon: <FaCreditCard />, label: 'Payment' },
    { id: 'vehicles', icon: <FaCarSide />, label: 'My Fleet' },
    { id: 'history', icon: <FaHistory />, label: 'Rental History' },
  ];

  // ========================================================
  //                 VEHICLE MANAGEMENT FUNCTIONS
  // ========================================================

  // Use Omit<Car, 'id'> so that an id is auto-assigned
  const handleAddCar = (newCar: Omit<Car, 'id'>) => {
    setCars([...cars, { ...newCar, id: cars.length + 1 }]);
    setModalOpen(false);
  };

  const handleDeleteCar = (carId: number) => {
    setCars(cars.filter(car => car.id !== carId));
  };

  const handleUpdateCar = (updatedCar: Car) => {
    setCars(cars.map(car => (car.id === updatedCar.id ? updatedCar : car)));
    setEditVehicleOpen(false);
  };

  // ========================================================
  //                     PAYMENT FUNCTIONS
  // ========================================================

  const handleAddPayment = (payment: Payment) => {
    setPayments([...payments, { ...payment, id: payments.length + 1 }]);
    setShowPaymentModal(false);
  };

  // ========================================================
  //                NOTIFICATION TOGGLE FUNCTION
  // ========================================================

  const handleToggleNotification = (type: 'email' | 'sms' | 'push') => {
    setNotificationSettings({
      ...notificationSettings,
      [type]: !notificationSettings[type],
    });
  };

  // ========================================================
  //                   PROFILE EDIT HANDLERS
  // ========================================================

  const openEditProfile = () => {
    setProfileForm(profile);
    setEditProfileOpen(true);
  };

  const handleProfileFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    setProfile(profileForm);
    setEditProfileOpen(false);
  };

  // ========================================================
  //           VEHICLE FILTER & SORTING FUNCTIONS
  // ========================================================

  const filteredCars = cars.filter(car =>
    fleetFilter === 'All' ? true : car.status === fleetFilter
  );
  const sortedCars = [...filteredCars].sort((a, b) => b.rating - a.rating);

  useEffect(() => {
    console.log(`Fleet filter: ${fleetFilter}, Cars count: ${cars.length}`);
  }, [fleetFilter, cars]);

  // ========================================================
  //                      RENDERING
  // ========================================================

  return (
    <div className="bg-gradient-to-br from-teal-200 via-blue-100 to-white text-blue-900 min-h-screen flex transition-colors duration-300">
      {/* Sidebar Navigation */}
      <div className="w-80 p-6 bg-white border-r border-blue-200">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            AutoVoyage
          </h1>
        </div>
        <nav className="space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center p-3 rounded-xl transition-colors ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}
            >
              <span className="mr-3 text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* ---------------- Profile Section ---------------- */}
        {activeTab === 'profile' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h2 className="text-3xl font-bold">Driver Profile</h2>
              <button
                onClick={openEditProfile}
                className="mt-4 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <FaEdit /> Edit Profile
              </button>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-blue-100">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="relative group">
                  <Image
                    src={profile.image}
                    alt="Profile"
                    width={140}
                    height={140}
                    className="rounded-full border-4 border-white shadow-xl"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaUpload className="text-white text-2xl" />
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-8">
                  <h3 className="text-2xl font-semibold">
                    {profile.firstName} {profile.lastName}
                  </h3>
                  <p className="text-blue-600 mt-1">{profile.email}</p>
                  <p className="text-blue-600">{profile.phone}</p>
                  <div className="flex items-center mt-3 gap-2">
                    <span className="bg-teal-100 text-teal-600 text-sm px-3 py-1 rounded-full">
                      ⭐ {profile.rating}
                    </span>
                    {profile.achievements.map((ach, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                        {ach}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-blue-600">{profile.bio}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- Profile Edit Modal ---------------- */}
        <Transition appear show={editProfileOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setEditProfileOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/50" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <Dialog.Title className="text-2xl font-bold text-blue-600">
                      Edit Profile
                    </Dialog.Title>
                    <button onClick={() => setEditProfileOpen(false)}>
                      <HiX className="text-2xl text-blue-600" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        value={profileForm.firstName}
                        onChange={handleProfileFormChange}
                        placeholder="First Name"
                        className="p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={profileForm.lastName}
                        onChange={handleProfileFormChange}
                        placeholder="Last Name"
                        className="p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={profileForm.email}
                      onChange={handleProfileFormChange}
                      placeholder="Email"
                      className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={profileForm.phone}
                      onChange={handleProfileFormChange}
                      placeholder="Phone Number"
                      className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                    />
                  </div>
                  <div className="mt-6 flex justify-end gap-4">
                    <button
                      onClick={() => setEditProfileOpen(false)}
                      className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={saveProfile}
                      className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* ---------------- Security Section ---------------- */}
        {activeTab === 'security' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold mb-8">Security Settings</h2>
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100 space-y-6">
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Update Password
                </button>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Two-Factor Authentication</h3>
                <p className="mt-2 text-blue-600">
                  Enhance your account security by enabling 2FA.
                </p>
                <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Enable 2FA
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- Notifications Section ---------------- */}
        {activeTab === 'notifications' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold mb-4">Notification Settings</h2>
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-blue-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50">
                  <div className="flex items-center gap-4">
                    <FaBell className="text-2xl text-blue-600" />
                    <span className="font-semibold text-blue-900">Email Notifications</span>
                  </div>
                  <label htmlFor="email-toggle" className="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      id="email-toggle"
                      className="sr-only peer"
                      checked={notificationSettings.email}
                      onChange={() => handleToggleNotification('email')}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50">
                  <div className="flex items-center gap-4">
                    <FaBell className="text-2xl text-blue-600" />
                    <span className="font-semibold text-blue-900">SMS Notifications</span>
                  </div>
                  <label htmlFor="sms-toggle" className="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      id="sms-toggle"
                      className="sr-only peer"
                      checked={notificationSettings.sms}
                      onChange={() => handleToggleNotification('sms')}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50">
                  <div className="flex items-center gap-4">
                    <FaBell className="text-2xl text-blue-600" />
                    <span className="font-semibold text-blue-900">Push Notifications</span>
                  </div>
                  <label htmlFor="push-toggle" className="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      id="push-toggle"
                      className="sr-only peer"
                      checked={notificationSettings.push}
                      onChange={() => handleToggleNotification('push')}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Save Settings
              </button>
            </div>
          </div>
        )}

        {/* ---------------- Payment Section ---------------- */}
        {activeTab === 'payment' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold mb-4">Payment Methods</h2>
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100 space-y-4">
              {payments.map(pay => (
                <div key={pay.id} className="flex items-center justify-between p-4 border-b border-blue-200 last:border-b-0">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">
                      {pay.type === 'Visa' ? <FaCcVisa /> : <FaCcMastercard />}
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">{pay.type} **** {pay.last4}</p>
                      <p className="text-sm text-blue-600">Expires {pay.expiry}</p>
                    </div>
                  </div>
                  <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                    Edit
                  </button>
                </div>
              ))}
              <button
                onClick={() => setShowPaymentModal(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Add Payment Method
              </button>
            </div>
          </div>
        )}

        {/* ---------------- My Fleet Section ---------------- */}
        {activeTab === 'vehicles' && (
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h2 className="text-3xl font-bold">Vehicle Fleet Management</h2>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <button
                  onClick={() => setFleetFilter('All')}
                  className={`px-4 py-2 rounded-lg transition-colors ${fleetFilter === 'All' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                >
                  All
                </button>
                <button
                  onClick={() => setFleetFilter('Available')}
                  className={`px-4 py-2 rounded-lg transition-colors ${fleetFilter === 'Available' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                >
                  Available
                </button>
                <button
                  onClick={() => setFleetFilter('Rented')}
                  className={`px-4 py-2 rounded-lg transition-colors ${fleetFilter === 'Rented' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                >
                  Rented
                </button>
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                  <FaSortAmountDown /> Sort
                </button>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <FaPlus /> Add New Vehicle
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedCars.map(car => (
                <div key={car.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-blue-100 relative group">
                  <div className="relative">
                    <Image
                      src={car.image}
                      alt={car.model}
                      width={400}
                      height={300}
                      className="rounded-xl mb-4 object-cover h-48 w-full"
                    />
                    <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm ${car.status === 'Available' ? 'bg-teal-100 text-teal-600' : 'bg-red-100 text-red-600'}`}>
                      {car.status}
                    </span>
                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition-colors rounded-xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{car.model}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>License Plate:</span>
                      <span className="font-mono">{car.plate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Daily Rate:</span>
                      <span className="font-bold">${car.price}/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trips:</span>
                      <span>{car.trips}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rating:</span>
                      <span className="flex items-center">⭐ {car.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => {
                        setVehicleForm(car);
                        setEditVehicleOpen(true);
                      }}
                      className="flex-1 py-2 px-4 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center"
                    >
                      <FaEdit className="mr-2" /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCar(car.id)}
                      className="flex-1 py-2 px-4 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center"
                    >
                      <FaTrash className="mr-2" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- Edit Vehicle Modal ---------------- */}
        <Transition appear show={editVehicleOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setEditVehicleOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/50" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <Dialog.Title className="text-2xl font-bold text-blue-600">
                      Edit Vehicle
                    </Dialog.Title>
                    <button onClick={() => setEditVehicleOpen(false)}>
                      <HiX className="text-2xl text-blue-600" />
                    </button>
                  </div>
                  {vehicleForm && (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={vehicleForm.model}
                        onChange={(e) =>
                          setVehicleForm({ ...vehicleForm, model: e.target.value })
                        }
                        placeholder="Car Model"
                        className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                      />
                      <input
                        type="text"
                        value={vehicleForm.plate}
                        onChange={(e) =>
                          setVehicleForm({ ...vehicleForm, plate: e.target.value })
                        }
                        placeholder="License Plate"
                        className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                      />
                      <input
                        type="number"
                        value={vehicleForm.price}
                        onChange={(e) =>
                          setVehicleForm({ ...vehicleForm, price: Number(e.target.value) })
                        }
                        placeholder="Price per Day"
                        className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                      />
                      <select
                        value={vehicleForm.status}
                        onChange={(e) =>
                          setVehicleForm({
                            ...vehicleForm,
                            status: e.target.value as 'Available' | 'Rented',
                          })
                        }
                        className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                      >
                        <option value="Available">Available</option>
                        <option value="Rented">Rented</option>
                      </select>
                      <div className="flex gap-4">
                        <button
                          onClick={() => {
                            if (vehicleForm) handleUpdateCar(vehicleForm);
                          }}
                          className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={() => setEditVehicleOpen(false)}
                          className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* ---------------- Rental History Section ---------------- */}
        {activeTab === 'history' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Rental History</h2>
            <div className="relative border-l-2 border-blue-200 pl-6">
              {rentalHistory.map(record => (
                <div key={record.id} className="mb-8 relative">
                  <div className="absolute -left-3 top-0 bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-white">
                    <FaHistory />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100">
                    <h3 className="font-semibold text-blue-900">{record.model}</h3>
                    <p className="text-sm text-blue-600">
                      {record.start} - {record.end}
                    </p>
                    <p className="text-sm text-blue-600">Total Cost: ${record.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- Payment Modal ---------------- */}
        <Transition appear show={showPaymentModal} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setShowPaymentModal(false)}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/50" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <Dialog.Title className="text-2xl font-bold text-blue-600">
                      Add Payment Method
                    </Dialog.Title>
                    <button onClick={() => setShowPaymentModal(false)}>
                      <HiX className="text-2xl text-blue-600" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <select className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50">
                      <option value="Visa">Visa</option>
                      <option value="MasterCard">MasterCard</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Expiry Date (MM/YY)"
                        className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                      />
                    </div>
                    <button
                      onClick={() =>
                        handleAddPayment({
                          type: 'Visa',
                          last4: '0000',
                          expiry: '01/26',
                          id: 0, // This id is overwritten inside handleAddPayment
                        })
                      }
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Add Payment Method
                    </button>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* ---------------- Add Vehicle Modal ---------------- */}
        <Transition appear show={modalOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setModalOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/50" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <Dialog.Title className="text-2xl font-bold text-blue-600">
                      Add New Vehicle
                    </Dialog.Title>
                    <button onClick={() => setModalOpen(false)}>
                      <HiX className="text-2xl text-blue-600" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Car Model"
                      className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                    />
                    <input
                      type="text"
                      placeholder="License Plate"
                      className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                    />
                    <input
                      type="number"
                      placeholder="Price per Day"
                      className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50"
                    />
                    <div className="border-2 border-dashed border-blue-200 rounded-lg p-6 text-center bg-blue-50 relative">
                      <p className="text-blue-600 mb-2">Upload Vehicle Photos (max 5)</p>
                      <input
                        type="file"
                        multiple
                        className="opacity-0 absolute inset-0 cursor-pointer"
                        id="vehiclePhotos"
                        accept="image/*"
                      />
                      <label
                        htmlFor="vehiclePhotos"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors inline-flex items-center"
                      >
                        <FaUpload className="mr-2" /> Choose Images
                      </label>
                    </div>
                    <button
                      onClick={() =>
                        handleAddCar({
                          model: 'New Car',
                          plate: 'NEW-0000',
                          price: 0,
                          image: '/default-car.jpg',
                          status: 'Available',
                          trips: 0,
                          rating: 0,
                        })
                      }
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Add Vehicle
                    </button>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>
      </main>
    </div>
  );
};

export default Settings;
