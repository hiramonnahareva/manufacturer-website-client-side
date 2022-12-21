import React, { useEffect } from 'react';
import image from '../../Assets/banner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
useEffect(() => {
  AOS.init({duration: 1000});
}, [])

    return (
     
 <div className="relative">
  <img src={image} className='w-full lg:h-full h-64' alt="computer" />
  <div data-aos="fade-up" className="absolute top-5 lg:top-40 lg:left-20 lg:w-1/2 left-5 right-5">
    <h2 className="text-2xl lg:text-5xl font-bold text-primary"> PARTS <span className='text-gray-200'>Manufacturing Industry</span></h2>
    <p className="py-6 text-gray-200 text-[16px] lg:text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    <button className="btn btn-primary lg:px-10">Purchase</button>
  </div>
</div>
    );
};

export default Banner;