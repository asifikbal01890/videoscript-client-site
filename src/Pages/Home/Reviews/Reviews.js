import React from 'react';
import { MdArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsInfo}) => {
  console.log(reviewsInfo)
  return (
    <div className='ml-16 mt-28 mr-4'>
      <div >
       <h1 className='font-[Oswald] text-4xl font-semibold text-center'> What our user say</h1>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16 max-w-[1200px] mx-auto'>
        {
          reviewsInfo.map(info => <ReviewCard
            key={info._id}
            info={info}
          ></ReviewCard>)
        }
      </div>
      <div className='text-center mt-8'>
        <Link to={'/review'} className='flex justify-center items-center hover:scale-[1.06] duration-500 hover:text-primary'><p className='font-[Heebo] mr-1'>See all reviews</p><MdArrowRight></MdArrowRight></Link>
      </div>
    </div>
  );
};

export default Reviews;