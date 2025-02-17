import React from 'react';

const Faq = () => {
    return (
        <div className='w-11/12 mx-auto bg-pink-50 p-7 mt-10 rounded-lg'>
            <h2 className='text-4xl font-medium text-green-950 text-left mb-5'>Key Informations about our Services and Processes</h2>
            <div className="badge badge-outline font-medium bg-slate-300 p-4 mb-3">Explore Common Questions</div>

            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">How do you ensure personalized financial advice?</div>
                <div className="collapse-content">
                    <p>We start with a thorough understanding of your financial situation, goals, and preferences. Our team then customizes strategies and recommendations based on this detailed analysis, ensuring that the advice you receive is tailored to your unique needs</p>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">How do you handle conflicts of interest?</div>
                <div className="collapse-content">
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                </div>
            </div>
            <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">What are your fees for financial consulting services?</div>
                <div className="collapse-content">
                    <p>Please visit our service section for prices.</p>
                </div>
            </div>

        </div>
    );
};

export default Faq;