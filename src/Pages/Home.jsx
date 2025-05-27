import React from 'react';
import Slider from '../components/Slider';
import Finance from '../components/Finance';
import Faq from '../components/Faq';
import Services from '../components/Services';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>L U M I N A | Home</title>
            </Helmet>
            <Slider></Slider>
            <Finance></Finance>
            <Services></Services>
            <Faq></Faq>
        </div>
    );
};

export default Home;