import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formdata,setformdata]=useState({
    email:"",
    password:""
  })
  const handleInput=(e)=>{
  const {name,value}=e.target
  setformdata({...formdata,[name]:value})
  }
  const handleform=(e)=>{
    e.preventDefault()
    console.log(formdata);
    setformdata({
      email:"",
      password:""
    })
  }
  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center">

      <div className="bg-white w-[380px] p-8 rounded-xl shadow-lg border border-teal-100">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
          Login
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleform}>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-teal-500"
            name='email'
            value={formdata.email}
            onChange={handleInput}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-teal-500"
             name='password'
            value={formdata.password}
            onChange={handleInput}
          />

          {/* Login Button */}
          <button
            type="submit"
            className="bg-teal-600 text-white py-2 rounded-lg font-medium hover:bg-teal-700 transition"
          >
            Login
          </button>

        </form>

        {/* Extra Links */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account? 
          <span className="text-teal-600 cursor-pointer ml-1 hover:underline">
            <Link to="/register">Register</Link>
          </span>
        </p>

      </div>

    </div>
  );
};

export default Login;