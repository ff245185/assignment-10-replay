import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Home from "../component/HOME/Home"
import Blog from "../component/HOME/Blog/Blog"
import About from "../component/HOME/About/About"
import Course from "../component/HOME/Course/Course"
import Login from "../shardpage/Footer/Login/Login";
import Siningup from "../shardpage/Footer/siningup/Siningup";

export const router = createBrowserRouter ([

    {
        path:'/',
        element:<Root></Root>,
        children: [
         
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/course',
            element:<Course></Course>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/aboute',
            element:<About></About>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/siningup',
            element:<Siningup></Siningup>
        }


        ]
    }
])