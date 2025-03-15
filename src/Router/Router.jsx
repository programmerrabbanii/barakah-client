import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Registion from "../Pages/Registion";
import Login from "../Pages/Login";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/register",
                element:<Registion></Registion>
            },
            {
                path:"/login",
                element:<Login></Login>

            },
            {
                path:"/history",
                element:<History></History>
            }
        ]
        
    },

])
export default router