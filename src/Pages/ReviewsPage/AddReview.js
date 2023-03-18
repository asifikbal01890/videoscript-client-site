import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import StarRatings from 'react-star-ratings';

const AddReview = ({ user, currentDate, refetch }) => {

    const [rating, setRating] = useState(1);


    const handleAddReview = event => {
        event.preventDefault();

        const form = event.target;
        const headline = form.headline.value;
        const description = form.description.value;

        const reviewInfo = {

            header: headline,
            describe: description,
            name: user?.displayName,
            date: currentDate,
            rate: rating
        }
        console.log(reviewInfo)

        if (!user) {
            return toast.error("Login First");
        }

        fetch('https://videoscript-server-site-new.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
               toast.success('Successful');
                form.reset();
                refetch();
            }
        })
        .catch(e => console.error(e));
    }

    return (
        <div className="modal" id="my-modal-2">
            <form onSubmit={handleAddReview} action="">
                <div className="modal-box ml-16 mr-4 w-96">
                    <div>
                        <h2 className="text-gray-900 text-xl mb-1 font-semibold title-font font-[Heebo]">Feedback</h2>
                        <p className="leading-relaxed mb-3 text-gray-600 font-[Heebo]">We value your feedback and would appreciate hearing your thoughts on your experience using our service.</p>
                        <div className='flex justify-between items-center mb-2'>
                            <p className='font-semibold font-[Heebo]'>Give Ratings</p>
                            <StarRatings
                                rating={rating}
                                starRatedColor="orange"
                                starHoverColor="orange"
                                changeRating={setRating}
                                numberOfStars={5}
                                name='rating'
                                required
                                starDimension="30px"
                                starSpacing="2px"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Headline</label>
                            <input type="text" name="headline" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Describe</label>
                            <textarea name="description" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                    <div className="modal-action">
                        <a href="#" className="btn btn-secondary">Cancel</a>
                        <a href="#" className="btn btn-primary"><button type="submit">Submit</button></a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddReview;