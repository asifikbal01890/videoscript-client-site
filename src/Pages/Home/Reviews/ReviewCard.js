import React from 'react';
import StarRatings from 'react-star-ratings';

const ReviewCard = ({info}) => {
    const { name, header, describe, rate } = info;
    return (
        <div className='w-full font-[Heebo] mx-auto border p-6 cursor-pointer duration-500 hover:scale-[1.06] hover:shadow-lg'>
        <div className='flex justify-between gap-6 items-start'>
            <h3 className='text-xl font-semibold'>{header}</h3>
            <div>
            <p className='w-32'>
            <StarRatings
                rating={rate}
                starRatedColor="orange"
                starDimension="20px"
                starSpacing="2px"   
            />
            </p>
            </div>
        </div>
        <div>
            <p className='py-3'>{describe}</p>
            <small>Review by {name}</small>
        </div>
    </div>
    );
};

export default ReviewCard;