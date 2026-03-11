import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { data, Link, useNavigate, useParams } from 'react-router-dom'
import { userContext } from '../../context/GlobalContext'

const Profile = () => {
  const {setCurrentUser}=useContext(userContext)
  const navigate=useNavigate()
  const {userid}=useParams()
  const [user,setUser]=useState("")
  const fdata=async()=>{
    const {data}=await axios.get(`http://localhost:3000/users/${userid}`)
    setUser(data)
  }
  console.log(user);
  
  useEffect(()=>{
    fdata()
  },[])

  const deleteuser=async()=>{
    const {data}=axios.delete(`http://localhost:3000/users/${userid}`)
    navigate("/")
    localStorage.removeItem("jwt_token")
    setCurrentUser(null)
  }
 return (
 <div className='h-full w-full flex items-center justify-center'>
      {/* <p>{user.username}</p> */}
      <div className='h-100 w-100 flex flex-col items-center justify-evenly  shadow-2xl rounded-lg'>
        <div className='h-25 w-25 rounded-full flex items-center justify-center border-2 border-blue-300'>
          <p>{user.username}</p>
        </div>
        <p className='text-lg font-bold'>{user.username}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <div className='w-full gap-10 text-white flex items-center  justify-center'>
          <button className='px-4 py-2 bg-green-400 rounded-lg cursor-pointer'>
            <Link to={`/dashboard/updateprofile/${userid}`}>Update Profile</Link>
          </button>
          <button className='px-4 py-2 bg-red-400 rounded-lg cursor-pointer' onClick={deleteuser}>Delete Profile</button>
        </div>
      </div>
    </div>
)
}

export default Profile