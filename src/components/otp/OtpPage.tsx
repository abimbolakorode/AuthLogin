import React from 'react';

const OtpPage: React.FC = () => (
  <>
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
   <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h2 className="text-2xl font-bold mb-6">Verify Your OTP</h2>
    <form className="space-y-4">
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
    </form>
    </div>
    </div>
  </>
  
);

export default OtpPage;