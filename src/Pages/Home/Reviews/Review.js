import React from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

const Review = ({review}) => {
    const {reviewer, img, description} = review;
    
    return (
        <div className={'p-5 text-center mx-4 mt-5 mb-5 px-8 shadow-lg' }>
            <div className='flex justify-center'>
            <img className='w-20 border-4 rounded-full' src={img} alt="" />
            </div>
            <h2 className='text-2xl pt-5 font-bold pb-4'>{reviewer}</h2>
            <p className='text-justify'>{description}</p>
            <p className='text-orange-400 text-center flex my-3 text-xl'><span><AiFillStar/></span> <span><AiFillStar/></span> <span><AiFillStar/></span> <span><AiFillStar/></span> <span><AiOutlineStar/></span></p>
            
        </div>
    );
};

export default Review;