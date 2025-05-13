import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const {setUser, createNewUser, updateUserProfile} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const pass = e.target.password.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        
        // console.log(photo)

        createNewUser(email,pass)
        .then((result) => {
            const user = result.user
            console.log(user)
            setUser(user)
            updateUserProfile({displayName:name, photoURL:photo})
            .then(() => {
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
            })
            toast("SignUp successful!")
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
                        <h1 className="text-5xl font-bold mb-4">Register</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Photo Url</span>
                                </label>
                                <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary mb-3">Register</button>
                                <p className="label-text-alt text-center font-medium">Already have an account?  <Link to="/login" className="label-text-alt link link-hover text-center font-medium">Login</Link></p>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;