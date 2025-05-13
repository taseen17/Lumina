import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";


const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContext)

    const handleLogout = () => {
        logoutUser()
            .then(console.log("Logged out"))
        toast("Logout successful!")
            .catch((error) => {
                console.log(error)
            })
    }
    console.log(user)
    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><a>My Profile</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-semibold">L U<span className="text-amber-400"> M I </span>N A</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/myprofile">My Profile</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {
                        user ?
                            <div className="flex gap-2">
                                <img className="w-10 rounded-full" src={user.photoURL} alt="" />
                                <Link onClick={handleLogout} className="btn">Logout</Link>
                            </div>
                            :
                            <Link to="/login" className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;