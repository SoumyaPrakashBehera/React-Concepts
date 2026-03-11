import React, { useContext } from 'react'
import { userContext } from '../../context/GlobalContext'
import { AiOutlineUser } from "react-icons/ai"
import { Outlet } from 'react-router-dom'

const DashBoardHome = () => {

const { currentUser } = useContext(userContext)
// console.log(currentUser);

if(!currentUser){
  return <div className="p-6">Loading...</div>
}

return (
  <div className="h-full w-full bg-teal-50 p-10">

    {/* Welcome Banner */}
    <div className="bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-3xl p-8 mb-10 shadow-lg">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
      <p className="mt-2 text-teal-100">
        Manage your profile, projects, and activities all in one place.
      </p>
    </div>

    {/* Stats Cards */}
    <div className="grid md:grid-cols-4 gap-6 mb-10">

      <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100 hover:scale-105 transition">
        <h2 className="text-teal-600 font-semibold text-lg">Users</h2>
        <p className="text-3xl font-bold text-gray-800 mt-2">1,240</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100 hover:scale-105 transition">
        <h2 className="text-teal-600 font-semibold text-lg">Projects</h2>
        <p className="text-3xl font-bold text-gray-800 mt-2">82</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100 hover:scale-105 transition">
        <h2 className="text-teal-600 font-semibold text-lg">Followers</h2>
        <p className="text-3xl font-bold text-gray-800 mt-2">13.4K</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100 hover:scale-105 transition">
        <h2 className="text-teal-600 font-semibold text-lg">Tasks</h2>
        <p className="text-3xl font-bold text-gray-800 mt-2">27</p>
      </div>

    </div>

    {/* Quick Actions */}
    <div className="grid md:grid-cols-3 gap-6 mb-10">

      <button className="bg-teal-500 text-white p-4 rounded-xl shadow hover:bg-teal-600 transition">
        Update Profile
      </button>

      <button className="bg-white border border-teal-200 p-4 rounded-xl shadow hover:bg-teal-100 transition">
        View Profile
      </button>

      <button className="bg-white border border-teal-200 p-4 rounded-xl shadow hover:bg-teal-100 transition">
        Manage Projects
      </button>

    </div>

    {/* Main Dashboard Section */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* Nested Routes Area */}
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-teal-100">
        <h2 className="text-xl font-semibold text-teal-700 mb-4">
          Dashboard Content
        </h2>

        <div className="bg-teal-50 p-6 rounded-xl">
          <Outlet />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-teal-100">
        <h2 className="text-xl font-semibold text-teal-700 mb-6">
          Recent Activity
        </h2>

        <ul className="space-y-4 text-gray-600">

          <li className="border-b pb-2">
            ✔ Profile updated successfully
          </li>

          <li className="border-b pb-2">
            ✔ New project created
          </li>

          <li className="border-b pb-2">
            ✔ Password changed
          </li>

          <li>
            ✔ Account login from new device
          </li>

        </ul>
      </div>

    </div>

  </div>
);
}

export default DashBoardHome