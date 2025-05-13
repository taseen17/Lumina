import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)

    const handleChanges = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        updateUserProfile({displayName:name, photoURL:photo})
    }
    return (
        <div className='mt-7 w-11/12 mx-auto'>
            <div className='flex justify-center items-center'>
                <img className='w-60 rounded-full' src={user.photoURL} alt="" />
            </div>
            <div>
                <h3 className='text-center font-semibold text-2xl mt-3 capitalize'>{user.displayName}</h3>
                <p className='text-center mt-2 font-medium text-xl'>{user.email}</p>
                <p className='text-center mt-2 font-medium text-xl'>{user.photoURL}</p>
            </div>
            <div className='mt-5'>
                <form onSubmit={handleChanges} className="fieldset border-base-300 rounded-box border p-4 flex justify-center flex-col">
                    <legend className="fieldset-legend text-center font-medium text-xl">Edit Name & PhotoURL</legend>
                    <label className="label justify-center font-medium text-xl">Name</label>
                    <input name='name' type="text" className="p-3 rounded-lg w-3/4 mx-auto" placeholder="Name" />

                    <label className="label justify-center font-medium text-xl">PhotoURL</label>
                    <input name='photo' type="text" className="p-3 rounded-lg w-3/4 mx-auto" placeholder="PhotoURL" />

                    <button className="btn btn-neutral mt-4 w-3/4 mx-auto">Save Changes</button>
                </form>
            </div>
            
        </div>
    );
};

export default MyProfile;