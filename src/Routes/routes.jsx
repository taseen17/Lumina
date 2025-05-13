import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRoutes from "./PrivateRoutes";
import MyProfile from "../Pages/MyProfile";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/myprofile",
                element: (
                    <PrivateRoutes>
                        <MyProfile></MyProfile>
                    </PrivateRoutes>
                )
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/services/:id",
                element: (
                    <PrivateRoutes>
                        <ServiceDetails></ServiceDetails>
                    </PrivateRoutes>
                ),
                loader:() => fetch('/services.json')
            }
        ],
    },
    
])

export default routes;