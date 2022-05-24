import React from 'react';
import image from '../../Assets/computer-1.png'

const Banner = () => {
    return (
     
             <div className="hero min-h-screen bg-accent">
  <div className="hero-content flex-col lg:flex-row-reverse gap-x-20">
    <img src={image} className="lg:h-[100vh]  pb-20 lg:w-[50%]  shrink-0" alt='' />
    <div className=' lg:w-50%'>
      <h1 className="text-5xl font-bold">PARTS <span className='text-secondary'>Manufacturing Industry</span></h1>
      <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
      <button className="btn btn-primary px-10">Purchase</button>
    </div>
  </div>
</div> 
    );
};

export default Banner;