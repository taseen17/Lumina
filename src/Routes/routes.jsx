import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default routes;