import React from 'react';
import Slider from '../components/Slider';
import Finance from '../components/Finance';
import Faq from '../components/Faq';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Finance></Finance>
            <Faq></Faq>
        </div>
    );
};

export default Home;