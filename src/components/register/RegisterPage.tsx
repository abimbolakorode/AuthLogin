import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  return (
    <section className="w-full h-screen bg-gray-100">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
              <input id="fullName" type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-lg hover:bg-blue-200" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input id="email" type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-lg hover:bg-blue-200" />
            </div>
           
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input id="password" type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg hover:bg-blue-200" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
              <input id="confirmPassword" type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg hover:bg-blue-200" />
            </div>
          
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">
              Register
            </button>
            
            <p className="text-gray-600 mt-4 text-center">
              Already have an account? 
              <Link to="/login" className="text-[#d43585] hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;