'use client';

import { useRouter } from 'next/navigation';
import { FaPowerOff } from 'react-icons/fa';

const Logout: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear any user session or data (for example, removing a token)
    localStorage.removeItem('userToken');
    
    // Redirect user to the login page
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full text-center">
        <FaPowerOff className="text-4xl text-red-600 mb-6 mx-auto" />
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Are you sure you want to log out?</h2>
        <p className="text-gray-600 mb-6">You will be logged out and redirected to the login page.</p>
        <div className="space-x-4">
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-500 transition-all"
          >
            Logout
          </button>
          <button
            onClick={() => router.push('/dashboard')}
            className="px-6 py-3 bg-gray-300 text-gray-900 rounded-full hover:bg-gray-200 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
