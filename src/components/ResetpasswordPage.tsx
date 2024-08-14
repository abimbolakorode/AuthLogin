import React from 'react';
import { Link } from 'react-router-dom';
const ResetPasswordPage: React.FC = () => (
  <> 
  <div className='min-h-screen flex items-center justify-center bg-gray-100 '>
  <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700">New Password</label>
        <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Confirm New Password</label>
        <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-900">
        Reset Password
      </button>
      <p className="text-gray-600 mt-4 text-center">
        Back to <Link to="/login" className="text-[#cc6699] hover:underline cursor-pointer">
          Login
        </Link>
      </p>
  
        
    <h2 className="text-2xl font-bold mt-5 mb-6">Verify Your OTP</h2>
    <div className="space-y-4">
      <div className="flex space-x-2 justify-center">
        {Array(5).fill(null).map((_, index) => (
          <input key={index} type="text" maxLength={1} className="p-2 w-12 border border-gray-300 text-center rounded-lg" />
        ))}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-900">
        Verify
      </button>
      <p className="text-center text-gray-600">
        Didn't receive an OTP? <button onClick={() => console.log('Resend OTP')} className="text-[#cc6699] hover:underline">Resend OTP</button>
      </p>
      <p className="text-center text-gray-600">OTP expires in 00:30</p>
      </div>
    </form>
    </div>
    </div>
  </>
);

export default ResetPasswordPage;