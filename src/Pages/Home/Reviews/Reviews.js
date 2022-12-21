import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Loading from '../../Shared/Loading';
import Review from './Review';


const Reviews = () => {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const [reviews, setreviews] = useState([]);
    useEffect(()=> {
        fetch('https://assignment-12-server.onrender.com/reviews')
        .then(res => res.json())
        .then(data => setreviews(data))
    }, [])
    
    return (   
       <>
       {
        reviews ? 
        <div className='bg-white lg:mx-20 py-5'>
        <h2 className='text-3xl my-5 text-center font-bold text-primary'>Reviews</h2>
        <Slider {...settings}>
        {/* <div>
        <div className="grid lg:grid-cols-3"> */}
        {
            reviews.map((review) => <Review key={review._id} review={review}></Review>
            )
       }
{/* </div>
   </div> */}

   </Slider>
      </div> : <Loading></Loading>
       }
       </>
    );
};

export default Reviews;