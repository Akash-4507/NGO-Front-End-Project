import React, { useEffect } from 'react';
import Login from '../pages/Login';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any user authentication data here if needed
    // For example, clear token from localStorage: localStorage.removeItem('authToken');

    // Redirect to the login page after a short delay
    const timeout = setTimeout(() => {
      <Login />
    }, 2000); // Redirect after 2 seconds

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Logout</h1>
      <p>You have successfully logged out. Thank you for being part of our organization.</p>
      <p className="text-gray-500 mt-2">Redirecting to login...</p>
    </div>
  );
};

export default Logout;
