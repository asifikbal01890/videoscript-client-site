import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import Reviews from './Reviews/Reviews';
import WhyChoose from './WhyChoose/WhyChoose';

const Home = () => {
    const reviewsInfo = useLoaderData();
    return (
        <div>
           <Banner></Banner>
           <WhyChoose></WhyChoose>
           <Reviews
            reviewsInfo={reviewsInfo}
           ></Reviews>
           <Faq></Faq>
        </div>
    );
};

export default Home;