import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    dob: "",
    city: "",
    gender: ""
  });
  const {username,age,email,password,dob,city,gender}=formData

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);

    //! send this data to backend for registration purpose 
    //!if registration done successfully then navigate to login page
   try {
    if(!username|| !age || !email || !password || !dob || !city || !gender){
      toast.error("Every field is required",{position:'top-center'})
      return
    }
    const {data}=await axios.post("http://localhost:3000/users",formData)
    toast.success("Registered Successfully",{position:'top-right'})
    setFormData({
    username: "",
    age: "",
    email: "",
    password: "",
    dob: "",
    city: "",
    gender: ""
  });
    navigate("/login")
   } catch (error) {
    console.log(error);
   }

    

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-50">

  <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-teal-100">

    <h2 className="text-2xl font-bold text-center mb-6 text-teal-700">
      Register
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Username */}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none"
      />

      {/* Age */}
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none"
      />

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none"
      />

      {/* Date of Birth */}
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none"
      />

      {/* City Dropdown */}
      <select
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none"
      >
        <option value="">Select City</option>
        <option value="Delhi">Delhi</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      {/* Gender */}
      <div className="flex gap-6 text-gray-700">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
            checked={formData.gender === "Male"}
            className="accent-teal-600"
          /> Male
        </label>

        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
            checked={formData.gender === "Female"}
            className="accent-teal-600"
          /> Female
        </label>

        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={formData.gender === "Other"}
            onChange={handleChange}
            className="accent-teal-600"
          /> Other
        </label>
      </div>

      {/* Submit Button */}
      <button
        className="w-full py-2 text-white font-semibold rounded-md 
        bg-teal-600 hover:bg-teal-700 transition shadow-sm"
      >
       Register
      </button>

    </form>

  </div>

</div>
  );
};

export default Register;