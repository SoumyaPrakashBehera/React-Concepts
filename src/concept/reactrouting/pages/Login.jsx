import React, { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";

const Login = () => {
  const navigate = useNavigate()
  // const eyeRef = useRef()

  const [passwordIcon, setPasswordIcon] = useState(false)


  const handleIcon = () => {
    setPasswordIcon(!passwordIcon);
  }
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
    // localStorage.setItem("userDetails", JSON.stringify(data))
    const userdata = JSON.parse(localStorage.getItem("userDetails"));


    if(data.email !== userdata.email || data.password !== userdata.password){
      console.log("Invalid Details");
      toast.error("Invalid credentials")
      return 
    }
    localStorage.setItem("jwt_token",JSON.stringify("abcd"))
    toast.success("Login Sucessful")
    navigate("/dashboard")
    // console.log("Login Sucess");
    

    // console.log(userdata);
    
    
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
    
    <form 
      className="bg-white/80 backdrop-blur-lg border border-white/40 p-10 rounded-2xl shadow-2xl w-full max-w-sm transition-all duration-300 hover:shadow-purple-300/40"
      onSubmit={handleSubmit}
    >
      
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700 tracking-wide">
        Welcome Back
      </h1>

      <input type="email" placeholder="Email" className="w-full p-3 rounded-lg mb-5 bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all" onChange={handleInput} name="email" value={data.email}
      />

<div className="relative">
        <input type={passwordIcon ? "text" : "password"} placeholder="Password" className="w-full p-3 rounded-lg mb-6 bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all pr-12" onChange={handleInput}
        name="password" value={data.password}
        />

        {
          passwordIcon ? <AiOutlineEye className="absolute right-4 top-4 text-gray-600 cursor-pointer hover:text-purple-600 transition" onClick={handleIcon} />: <AiOutlineEyeInvisible className="absolute right-4 top-4 text-gray-600 cursor-pointer hover:text-purple-600 transition" onClick={handleIcon}/>
        }
</div>

      <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg font-semibold tracking-wide hover:scale-105 transition-transform duration-300">
        Login
      </button>

      <p className="text-sm text-center mt-6 text-gray-600">
        Don’t have an account?{" "}
        <span className="text-purple-600 font-medium hover:underline cursor-pointer">
          <Link to="/register">Register</Link>
        </span>
      </p>

    </form>
  </div>
);
};
export default Login;