import React, { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FiEdit, FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineUpdate } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import axios from "axios";
import { userContext } from "../context/GlobalContext";
import { toast } from "react-toastify";

const Dashboard = () => {
const { currentUser, setCurrentUser } = useContext(userContext);
// const idd=JSON.parse(localStorage.getItem("jwt_token")).split(".")[2]
// console.log(idd);
const id=JSON.parse(localStorage.getItem("jwt_token")).split(".")[2]
  console.log(id);
  const sidebarItems = [
    { id: 1, title: "Dashboard", icon: <IoHomeOutline/>, path: "/dashboard" },
    { id: 5, title: "Profile", icon: <AiOutlineUser />, path: `/dashboard/profile/${id}` },
    { id: 3, title: "AddNotes", icon: <FaNoteSticky />, path: "/addnotes" },
    { id: 4, title: "UpdateNotes", icon: <FiEdit />, path: "/updatenotes" }
  ];
  const navigate=useNavigate()
  
  console.log(currentUser);
  
  
  const fdata=async(params)=>{
    const {data}=await axios.get(`http://localhost:3000/users/${id}`)
    setCurrentUser(data)
  }
// fdata()
useEffect(()=>{
  fdata()
},[])



  

  return (
    <div className="flex h-screen bg-[#f4f9f8]">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">

        <nav className="p-4">

          {/* Menu List */}
          <ul className="space-y-3">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-teal-100 text-gray-700"
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logout Button (outside ul) */}
          

        </nav>

      </div>
   <Outlet/>
    </div>
  );
};

export default Dashboard;