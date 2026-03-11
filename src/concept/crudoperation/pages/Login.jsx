import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const Login = () => {
  const navigate=useNavigate()
  const [formdata,setformdata]=useState({
    email:"",
    password:""
  })
  const handleInput=(e)=>{
  const {name,value}=e.target
  setformdata({...formdata,[name]:value})
  }
  const handleform=async(e)=>{
    e.preventDefault()
    // console.log(formdata);
    const {data}=await axios.get("http://localhost:3000/users")
    console.log(data);
    const currentuser=data.find((ele)=> ele.email===formdata.email )
    console.log(currentuser);
    if(!currentuser){
      toast.error("Email Id is Not Registered")
      return
    }
    if(currentuser.password!==formdata.password){
      toast.error("Password Invalid")
      return
    }
    const token="shgvdasvgdsy.svdhsvddsdvjj."+currentuser.id
    localStorage.setItem("jwt_token",JSON.stringify(token))
    navigate("/dashboard")
    
    // if(!formdata.email || !formdata.password){
    //   toast.error("Enter Your Credentials");
    //   return
    // }
    // else{
    //   navigate('/dashboard')
    //   toast.success("Login Successfully");
    // }
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