import React, { useEffect, useState } from 'react';
import Review from './Review';
const Reviews = () => {
    const [reviews, setreviews] = useState([]);
    useEffect(()=> {
        fetch('https://assignment-12-server.onrender.com/reviews')
        .then(res => res.json())
        .then(data => setreviews(data))
    }, [])
    // const reviews = [
    //     {_id: 1, img: person1, name:'Haley Salomans', description: 'User-generated content puts your customers’ experiences front and center. Although they’re not exactly traditional reviews, prospective customers can see how happy others are with your products. It helps build authenticity—something millennials love.'},
    //     {_id: 2, img: person2, name:'Anna Boyer',  description: 'User-generated content puts your customers’ experiences front and center. Although they’re not exactly traditional reviews, prospective customers can see how happy others are with your products. It helps build authenticity—something millennials love. '},
    //     {_id: 3, img: person3, name:'Anina Watt', description: 'User-generated content puts your customers’ experiences front and center. Although they’re not exactly traditional reviews, prospective customers can see how happy others are with your products. It helps build authenticity—something millennials love. '},
    // ]
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