import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import Reviews from './Reviews/Reviews';
import WhyChoose from './WhyChoose/WhyChoose';
import Pricing from './Pricing/Pricing';
import TotalUser from './TotalUser/TotalUser';

const Home = () => {
    const reviewsInfo = useLoaderData();
    return (
        <div>
           <Banner></Banner>
           <WhyChoose></WhyChoose>
           <Pricing></Pricing>
           <TotalUser></TotalUser>
           <Reviews
            reviewsInfo={reviewsInfo}
           ></Reviews>
           <Faq></Faq>
        </div>
    );
};

export default Home;