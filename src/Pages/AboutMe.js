import React from 'react';
import image from '../Assets/doctor.png'

const AboutMe = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-around my-20'>
             <div>
             <h2 className='text-3xl font-semibold'>Hiramon Nahar <span className='text-secondary'>Eva</span></h2>
            <span>I am Studying in Netrakona Govt Collage at Islamic History</span>
            <p>I am Studying in Netrakona Govt Collage in Hours first year at Islamic History . I am student of arts background.But I interested is learn new things so I have chosen to the learn coding</p>
             </div>
             <img className='w-80 h-38 border-secondary  lg:border-l-4' src={image} alt="" />
        </div>
    );
};

export default AboutMe;