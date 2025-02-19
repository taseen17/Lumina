import React from 'react';
import Slider from '../components/Slider';
import Finance from '../components/Finance';
import Faq from '../components/Faq';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Finance></Finance>
            <Services></Services>
            <Faq></Faq>
        </div>
    );
};

export default Home;