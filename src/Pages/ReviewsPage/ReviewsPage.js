import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import AddReview from './AddReview';
import ReviewPage from './ReviewPage';


const ReviewsPage = () => {

    const { user } = useContext(AuthContext)

    const currentDate = format(new Date, 'PPpp');

    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch("https://videoscript-server-site-new.vercel.app/reviews")
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    const ratingSum = reviews.reduce((sum, review) => sum + review.rate, 0);
    const ratingCount = reviews.length;
    const averageRating = ratingSum / ratingCount;
    console.log(averageRating)

    return (
        <div className='pt-28 ml-16 mr-4'>
            <div className='text-center'>
                <h3 className='font-[Oswald] text-4xl font-semibold'>What our user say</h3>
                <p className='mt-4 font-[Heebo]'>Rated <span className=' font-semibold'>Excellent {averageRating.toFixed(1)}/5</span> based on {reviews.length} reviews</p>
            </div>
            <div className='my-10'>
                {
                    reviews.map(review => <ReviewPage
                        key={review._id}
                        review={review}
                    ></ReviewPage>)
                }
            </div>
            <div className='flex justify-center'>
                <a href="#my-modal-2" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-purple-600 duration-500 hover:scale-[1.06] rounded-md text-white mt-6 px-7 pt-3 pb-2 text-lg mb-16 font-[Heebo] uppercase'>Add Review</a>
            </div>
            <AddReview
                user={user}
                currentDate={currentDate}
                refetch={refetch}
            ></AddReview>
        </div>
    );
};

export default ReviewsPage;