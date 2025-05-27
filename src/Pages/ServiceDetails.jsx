import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const { id } = useParams()
    const service = data.find(service => service.id === id)
    console.log(service)

    const [comments, setComments] = useState([])

    const handleComment = (e) => {
        e.preventDefault()
        const comment = e.target.comment.value
        // console.log(comment)
        setComments(comment)
    }
    return (
        <div className='w-11/12 mx-auto flex justify-center'>
            <Helmet>
                <title>Services | {id}</title>
            </Helmet>
            <div className="card shadow-sm mt-7">
                <figure>
                    <img
                        src={service.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{service.service_name}</h2>
                    <p className='text-base'>{service.brief_description}</p>
                    <div className="flex flex-col gap-2">
                        <form onSubmit={handleComment}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base"></span>
                                </label>
                                <input name='comment' type="text" placeholder="Add a Comment" className="input input-bordered" required />
                            </div>
                            <button className="btn btn-primary btn-block mt-2">Comment</button>
                        </form>
                    </div>
                    <p className='font-semibold text-center mt-2'>{comments}</p>
                </div>
                <div className="divider"></div>
                <h3 className='font-semibold text-xl text-center mb-2'>Submitted Comments</h3>
                <p className='font-semibold text-center'>Review-1: 10/10 service</p>
                <p className='font-semibold text-center'>Review-2: Ami age gorib chilam ei counseling er por borolok hoe gesi</p>
            </div>
        </div>
    );
};

export default ServiceDetails;