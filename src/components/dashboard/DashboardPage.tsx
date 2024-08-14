import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold text-center">Welcome back</h2>
        <p>Please enter your details to sign in</p>

        <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
          <hr className="border-gray-400" />
          <p className="text-center">or</p>
          <hr className="border-gray-400" />
        </div>
        
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email address</label>
            <input id="email" type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-lg hover:bg-blue-200" placeholder="Enter your email" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input id="password" type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg hover:bg-blue-200" placeholder="Enter your password" />
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
