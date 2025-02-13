import React from 'react';

const Finance = () => {
    return (
        <div className='bg-slate-100 mt-7 w-11/12 mx-auto p-7 rounded-xl'>
            <h2 className='text-4xl font-semibold text-center mb-10'>Transform Your Financial Future</h2>
            <div className='grid grid-cols-3 gap-3'>
                <div className="card bg-base-100 w-96">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/sdcr0Gz1/post-08.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline bg-slate-300 font-medium">FOR INDIVIDUALS</div>
                        </div>
                        <h2 className="card-title text-2xl font-normal">
                            Achieve Your Goals With Customized Financial Solutions
                        </h2>

                    </div>
                </div>
                <div className="card bg-base-100 w-96">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/YFTS91Hp/post-10.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline font-medium bg-slate-300">FOR STARTUPS</div>
                        </div>
                        <h2 className="card-title text-2xl font-normal">
                            Fuel Your Growth With Expert Financial Planning
                        </h2>

                    </div>
                </div>
                <div className="card bg-base-100 w-96">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/JWN9CJKD/post-06.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline bg-slate-300 font-medium">FOR BUSINESS OWNERS</div>
                        </div>
                        <h2 className="card-title text-2xl font-normal">
                            Elevate Your Business Performance With Our Guidance
                        </h2>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Finance;