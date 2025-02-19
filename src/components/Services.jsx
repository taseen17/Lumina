import React, { useEffect, useState } from 'react';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='w-11/12 mx-auto p-7 bg-emerald-50 rounded-lg mt-10'>
            <h2 className='text-4xl text-center font-semibold mb-7'>Our Services</h2>
            <div className='grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    services.map(service =>
                        <div className="card card-compact w-96 shadow-xl">
                            <figure>
                                <img className='w-full h-52'
                                    src={service.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body bg-emerald-50">
                                <h2 className="card-title">{service.service_name}</h2>
                                <p className='font-medium text-base'>Category: {service.category}</p>
                                <p className='font-medium text-base'>Price: {service.pricing}</p>
                                <p className='font-medium text-base'>Counselor: {service.counselor}</p>
                                <div className="card-actions justify-end mt-2">
                                    <button className="btn bg-emerald-600 text-white">Learn More</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Services;