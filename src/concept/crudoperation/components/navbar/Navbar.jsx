import React, { useContext } from 'react'
import { CiCircleAlert } from 'react-icons/ci';
import { HiArrowPathRoundedSquare } from 'react-icons/hi2';
import { IoMdContact } from 'react-icons/io';
import { IoHome } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { userContext } from '../../context/GlobalContext';

const Navbar = () => {

const { currentUser,setCurrentUser } = useContext(userContext)

  const navlist = [
    { text: "Home", path: "/", icon: <IoHome /> },
    { text: "About", path: "/about", icon: <CiCircleAlert /> },
    { text: "Contact", path: "/contact", icon: <IoMdContact/> },
    { text: "Help", path: "/help", icon: <HiArrowPathRoundedSquare /> }
  ];

  console.log(currentUser);
  const Logout=()=>{
  localStorage.removeItem('jwt_token')
  setCurrentUser(null)
  navigate('/')
  toast.success("Logged Out Succesfully")
}
  return (
    <nav className="w-full bg-teal-50 border-b border-teal-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-teal-700 tracking-wide">
          Soumya
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">

          {navlist.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-teal-100 hover:text-teal-700 cursor-pointer transition"
            >
              {item.icon}
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}

        </ul>
            <div>
              {
                currentUser? 
                <button className="bg-red-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-700 transition shadow-sm">
         <Link to="/" onClick={Logout}>Logout</Link>
        </button>:<button className="bg-teal-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-teal-700 transition shadow-sm">
         <Link to="/login">Login</Link>
        </button>
              }
            </div>
        {/* Login Button */}
        

      </div>

    </nav>
  )
}

export default Navbar