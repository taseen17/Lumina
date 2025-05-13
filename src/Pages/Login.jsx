import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from "react-toastify";

const Login = () => {
    const { setUser, loginUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        loginUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                toast("Login successful!");
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="hero bg-emerald-50 min-h-screen ">
                <div className="hero-content flex-col w-11/12 mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-medium">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary mb-3">Login</button>
                                <Link to="/register" className="label-text-alt link link-hover text-center font-medium">Create an account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;