import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate()

  const [data, setData] = useState(
    {
      email: "",
      password: ""
    }
  );

  const handleInput = (e) => {
    const {name, value}= e.target;
    setData({...data, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    localStorage.setItem("userDetails", JSON.stringify(data))

    toast.success("Registration Sucessful")
    navigate("/login")
    
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
    
    <form className="w-full max-w-sm bg-white/80 backdrop-blur-lg border border-white/40 p-10 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-purple-300/40"
      onSubmit={handleSubmit}
    >
      
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700 tracking-wide">
        Create Account
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 rounded-lg mb-5 bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
        onChange={handleInput}
        name="email"
        value={data.email}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 rounded-lg mb-6 bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
        onChange={handleInput}
        name="password"
        value={data.password}
      />

      <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-md">
        Register
      </button>

      <p className="text-sm text-center mt-6 text-gray-600">
        Already have an account?{" "}
        <span className="text-purple-600 font-medium hover:underline cursor-pointer">
          <Link to="/login">Login</Link>
        </span>
      </p>

    </form>
  </div>
);
};

export default Register;