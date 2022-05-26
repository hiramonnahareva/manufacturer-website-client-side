import React, { useEffect, useState } from 'react';
import Review from './Review';
const Reviews = () => {
    const [reviews, setreviews] = useState([]);
    useEffect(()=> {
        fetch('https://assignment-12-server.onrender.com/reviews')
        .then(res => res.json())
        .then(data => setreviews(data))
    }, [])
    return (   
            <div className='bg-white lg:mx-20 py-5'>
                <h2 className='text-3xl my-5 text-center font-bold text-primary'>Reviews</h2>
                <div>
                <div className="grid lg:grid-cols-3">
                {
                    reviews.map((review) => <Review key={review._id} review={review}></Review>)
               }
    </div> 
           </div>
    
              </div>
    );
};

export default Reviews;