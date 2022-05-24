import React from 'react';
import Review from './Review';
import person1 from '../../../Assets/reviewer/people1.png'
import person2 from '../../../Assets/reviewer/people2.png'
import person3 from '../../../Assets/reviewer/people3.png'

const Reviews = () => {
    const reviews = [
        {_id: 1, img: person1, name:'Haley Salomans', description: 'User-generated content puts your customers’ experiences front and center. Although they’re not exactly traditional reviews, prospective customers can see how happy others are with your products. It helps build authenticity—something millennials love.'},
        {_id: 2, img: person2, name:'Anna Boyer',  description: 'User-generated content puts your customers’ experiences front and center. Although they’re not exactly traditional reviews, prospective customers can see how happy others are with your products. It helps build authenticity—something millennials love. '},
        {_id: 3, img: person3, name:'Anina Watt', description: 'User-generated content puts your customers’ experiences front and center. Although they’re not exactly traditional reviews, prospective customers can see how happy others are with your products. It helps build authenticity—something millennials love. '},
    ]
    return (   
            <div className='bg-white mx-20 py-5'>
                <h2 className='text-3xl my-5 text-center font-bold text-primary'>Reviews</h2>
                <div>
                <div className="grid lg:grid-cols-3">
                {
                    reviews.map((review) => <Review review={review}></Review>)
               }
    </div> 
           </div>
    
              </div>
    );
};

export default Reviews;