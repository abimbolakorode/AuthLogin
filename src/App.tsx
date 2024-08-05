import React, { useState } from 'react';
import './index.css';

const App: React.FC = () => {
  const [view, setView] = useState<'register' | 'login' | 'verify' | 'forgot' | 'reset'>('register'); // State to control which view to show

  return (
    

    <div className="min-h-screen flex items-center justify-center bg-blue-700">
      <section className="bg-white p-8 rounded-lg shadow-lg w-96">
        {view === 'register' && (
          <>
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
              </div>
              <button type="submit" className="w-full bg-[#cc6699] text-white py-2 rounded-lg hover:bg-[#cc6699]">
                Register
              </button>
              <p className="text-gray-600 mt-4 text-center">
                Already have an account? <a onClick={() => setView('login')} className="text-[#cc6699] hover:underline cursor-pointer">Login</a>
              </p>
            </form>
          </>
        )}
        
        {view === 'login' && (
          <>
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4 flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="/forgot-password" className="text-[#cc6699] hover:underline">Forgot Password?</a>
              </div>
              <button type="submit" className="w-full bg-[#cc6699] text-white py-2 rounded-lg hover:bg-[#cc6699]">
                Login
              </button>
              <p className="text-gray-600 mt-4 text-center">
                Don't have an account? <a onClick={() => setView('register')} className="text-[#cc6699] hover:underline cursor-pointer">Register</a>
              </p>
            </form>
          </>
        )}
        
        {view === 'verify' && (
          <>
            <h2 className="text-2xl font-bold mb-6">Verify Your OTP</h2>
            <form className="space-y-4">
              <div className="flex space-x-2 justify-center">
                {Array(5).fill(null).map((_, index) => (
                  <input key={index} type="text" maxLength={1} className="p-2 w-12 border border-gray-300 text-center rounded-lg" />
                ))}
              </div>
              <button type="submit" className="w-full bg-[#cc6699] text-white py-2 rounded-lg hover:bg-[#cc6699]">
                Verify
              </button>
              <p className="text-center text-gray-600">
                Didn't receive an OTP? <button onClick={() => console.log('Resend OTP')} className="text-[#cc6699] hover:underline">Resend OTP</button>
              </p>
              <p className="text-center text-gray-600">OTP expires in 00:30</p>
            </form>
          </>
        )}
        
        {view === 'forgot' && (
          <>
            <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
              </div>
              <button type="submit" className="w-full bg-[#cc6699] text-white py-2 rounded-lg hover:bg-[#cc6699]">
                Send Reset Link
              </button>
              <p className="text-gray-600 mt-4 text-center">
                Remembered your password? <a onClick={() => setView('login')} className="text-[#cc6699] hover:underline cursor-pointer">Login</a>
              </p>
            </form>
          </>
        )}

        {view === 'reset' && (
          <>
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
              <button type="submit" className="w-full bg-[#cc6699] text-white py-2 rounded-lg hover:bg-[#cc6699]">
                Reset Password
              </button>
              <p className="text-gray-600 mt-4 text-center">
                Back to <a onClick={() => setView('login')} className="text-[#cc6699] hover:underline cursor-pointer">Login</a>
              </p>
            </form>
          </>
        )}
      </section>
    </div>
  );
};

export default App;