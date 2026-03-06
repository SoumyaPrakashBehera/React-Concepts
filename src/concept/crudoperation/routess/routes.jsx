import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Help from "../pages/Help";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

export const routes=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
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
      path:"/help",
      element:<Help/>
      },
      {
      path:"/login",
      element:<Login/>
      },
      {
         path:"/register",
      element:<Register/>
      }
      ,
      {
         path:"/dashboard",
      element:<Dashboard/>
      }

    ]
  }
])