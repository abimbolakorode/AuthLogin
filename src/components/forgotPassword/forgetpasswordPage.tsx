import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router

const ForgotPasswordPage: React.FC = () => (
  <>
  <section className="w-full h-screen bg-gray-100">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input 
          type="email" 
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg" 
          placeholder="Enter your email" // Added placeholder for user guidance
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
      ><Link to="/resetpassword" className="text-white hover:underline cursor-pointer">
     Send Reset Link
    </Link>
       </button>
      <p className="text-gray-600 mt-4 text-center">
        Remembered your password?{' '}
        <Link to="/login" className="text-[#cc6699] hover:underline cursor-pointer">
          Login
        </Link>
      </p>
    </form>
    </div>
    </div>
    </section>
    
  </>
);

export default ForgotPasswordPage;