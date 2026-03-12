import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Help from "../pages/Help";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRouting from "../privaterouting/PrivateRouting";
import Profile from "../pages/dashboardpages/Profile";
import UpdateProfile from "../pages/dashboardpages/UpdateProfile";
import DashBoardHome from "../pages/dashboardpages/DashBoardHome";
import UpdateStatus from "../privaterouting/UpdateStatus";
import AddNotes from "../pages/dashboardpages/AddNotes";
import AllNotes from "../pages/dashboardpages/AllNotes";
import UpdateNotes from "../pages/dashboardpages/UpdateNotes";

export const routes=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
      element:<UpdateStatus><Home/></UpdateStatus>
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
      element:<PrivateRouting><Dashboard/></PrivateRouting>,
      children:[
        {
          path:"/dashboard/profile/:userid",
          element:<Profile/>
        },
        {
          path:"/dashboard",
          element:<DashBoardHome/>
        },
        {
          path:"/dashboard/updateprofile/:userid",
          element:<UpdateProfile/>
        },{
           path:"/dashboard/addnotes",
          element:<AddNotes/>
        },{
           path:"/dashboard/allnotes",
          element:<AllNotes/>
        }
        ,{
           path:"/dashboard/updatenotes/:userid/:notesid",
          element:<UpdateNotes/>
        }
      ]
      }

    ]
  }
])