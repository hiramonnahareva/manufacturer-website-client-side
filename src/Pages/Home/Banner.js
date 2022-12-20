import React from 'react';
import image from '../../Assets/Rectangle 1934.png'

const Banner = () => {
    return (
     
//              <div className="hero min-h-screen bg-accent">
//   <div className="hero-content flex-col lg:flex-row-reverse gap-x-20">
//     <img src={image} className=" pb-20 w-full shrink-0" alt='' />
//     <div className=' lg:w-50%'>
//       <h1 className="text-5xl font-bold">PARTS <span className='text-secondary'>Manufacturing Industry</span></h1>
//       <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
//       <button className="btn btn-primary px-10">Purchase</button>
//     </div>
//   </div>
// </div> 
 <div className="relative">
  <img src={image} className='w-full background-' alt="computer" />
  <div className="absolute top-40 left-20 w-1/2">
    <h2 className="text-5xl font-bold text-primary">PARTS <span className='text-gray-200'>Manufacturing Industry</span></h2>
    <p className="py-6 text-gray-200 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    <button className="btn btn-primary px-10">Purchase</button>
  </div>
</div>
// {/* <div className="hero min-h-screen" style="background-image: url(https://techstory.in/wp-content/uploads/2020/11/19433ece30d82debd86ccdb9aa9f83ce.jpg)" >
//   <div className="hero-overlay bg-opacity-60"></div>
//   <div className="hero-content text-center text-neutral-content">
//     <div className="max-w-md">
//       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//       <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//       <button className="btn btn-primary">Get Started</button>
//     </div>
//   </div>
// </div> */}
    );
};

export default Banner;