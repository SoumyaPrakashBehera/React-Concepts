import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddNote = () => {
  const [formdata,setformdata]=useState({
    title:"",
    description:"",
    tags:""
  })
  const navigate=useNavigate()
  const handleinput=(e)=>{
    const {name,value}=e.target
    setformdata({...formdata,[name]:value})
  }
  const handleform=async(e)=>{
    e.preventDefault()
    console.log(formdata);

    try {
      const {data}=await axios.post("http://localhost:3000/notes",formdata)
      toast.success("notes added")
      setformdata({
        title:"",
       description:"",
        tags:""
      })
      navigate("/dashboard/allnotes")
    } catch (error) {
      toast.error("Something Went Wrong")
      console.log(error.message);
      
    }
    
  }
  return (
<div className="h-full w-full flex items-center justify-center"> 
   <div className=" h-[500px] w-[400px]  p-6 bg-white shadow-lg rounded-xl">
  <h2 className="text-2xl font-semibold mb-4 text-teal-700">Add New Note</h2>
  
  <form className="space-y-4" onSubmit={handleform}>
    {/* Note Title */}
    <div>
      <label className="block text-gray-700 mb-1" htmlFor="title">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={formdata.title}
        onChange={handleinput}
        placeholder="Enter note title"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>

    {/* Note Description */}
    <div>
      <label className="block text-gray-700 mb-1" htmlFor="description">
        Description
      </label>
      <textarea
        id="description"
         name="description"
        value={formdata.description}
        onChange={handleinput}
        placeholder="Enter note description"
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
      ></textarea>
    </div>

    {/* Tags */}
    <div>
      <label className="block text-gray-700 mb-1" htmlFor="tags">
        Tags
      </label>
      <input
        type="text"
        name="tags"
        value={formdata.tags}
        onChange={handleinput}
        id="tags"
        placeholder="Enter tags separated by commas"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>

    {/* Buttons */}
    <div className="flex justify-end space-x-3">
      <button
        type="button"
        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-semibold"
      >
        Add Note
      </button>
    </div>
  </form>
</div>
</div>
  );
};

export default AddNote;