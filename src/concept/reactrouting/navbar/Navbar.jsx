import React from 'react'
import { FaHome, FaUserGraduate } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { IoFileTrayFull } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const listData = [
    {
      id: 1,
      item: "Home",
      icon: <FaHome />,
      path: "/home"
    },
    {
      id: 2,
      item: "About",
      icon: <FaUserGraduate />,
      path: "/about"
    },
    {
      id: 3,
      item: "Projects",
      icon: <IoFileTrayFull />,
      path: "/projects"
    },
    {
      id: 4,
      item: "Contact",
      icon: <IoIosCall />,
      path: "/contact"
    }
  ]
 return (
  <div className="h-[78px] w-full bg-white/80 backdrop-blur-md shadow-md flex items-center justify-between px-10 border-b border-gray-200">
    
    <p className="text-2xl font-bold text-indigo-600 tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300">
      <Link to="/home">Logo</Link>
    </p>

    <ul className="h-full w-[40%] flex items-center justify-center gap-10 text-gray-700 font-medium">
      {
        listData.map((ele)=>{
          return (
            <li 
              className="cursor-pointer relative group transition-all duration-300" 
              key={ele.id}
            >
              <NavLink to={ele.path} className="group-hover:text-indigo-600">
                {ele.item}
              </NavLink>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          )
        })
      }
    </ul>

    <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-md">
      <Link to="/login">Login</Link>
    </button>

  </div>
)
}

export default Navbar