// src/components/LoginPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <section className='bg-gray-100 min-h-screen flex items-center justify-center'>
     {/* login container  */}
      <div className="max-w-3x1 p-5 min-h-screen flex items-center justify-center bg-gray-100">
      {/* form container */}
     <div className="px-16 bg-white p-8 rounded-lg shadow-lg w-96">
     <h2 className="font-bold text-2xl mb-6">Login</h2>
     <p className=" text-sm mt-4 text-{#002D74}">If you already have an account, easily login</p>
     
     <form className="flex flex-col gap-4">
      <input
        className="p-2 mt-8 rounded-xl border hover:bg-blue-200"
        type="email" name="Email" placeholder="email" id="email"  
      />
      <div className="relative">
        <input
          className="p-2 rounded-xl border w-full hover:bg-blue-200"
          type="password" name="password" placeholder="password"  id="password"
        />
      </div>
      <button className="bg-[#002374] rounded-xl text-white py-2 hover:scale-105 hover:bg-blue-500">Login</button>
    </form>
     
    <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
       <hr className="border-gray-400" />
         <p className="text-center">OR</p>
       <hr className="border-gray-400" />
     </div>
     <button className="bg-white border p-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:bg-gray-200">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
        alt="" 
        className="w-5 h-5 mr-2"
      />
      Login with Google
    </button>
    <p className="mt-5 text-sm border-b py-6">
    <Link to="/forgotpassword" className="underline">
    Forgot your password
  </Link></p>

    <div className=" mt-3 text-sm flex justify-between items-center">
      <p>If you don't have an account...</p>
      <Link to="/register">
        <button className="py-2 px-5 bg-white border rounded-xl hover:scale-105">
          Register
        </button>
      </Link>
      <div>
      <Link to="/Dashboard">
        <button className="py-2 px-6 bg-blue-200 rounded-xl hover:scale-105">
          Dashboard
        </button></Link>
        </div>
    </div>
    </div>
   </div>
  </section>
  )
}

export default LoginPage;

