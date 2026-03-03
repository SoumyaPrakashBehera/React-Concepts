import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import MainPage from './navbar/MainPage'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import PrivateRouting from './privaterouting/PrivateRouting'

//routing means navigatoing from one component to another component.
const RouterLayout = () => {
  const routes=createBrowserRouter([
   {
    path:"/",
    element:<MainPage/>,
    children:[
       {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },   
    {
      path:"/contact",
      element:<Contact/>
    },  
    {
      path:"/projects",
      element:<Projects/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/dashboard",
      element:<PrivateRouting><Dashboard/></PrivateRouting>
    }
    ,
    {
      path:"/register",
      element:<Register/>
    }
    ]
   }
  ])
  return <RouterProvider router={routes}/>
}

export default RouterLayout