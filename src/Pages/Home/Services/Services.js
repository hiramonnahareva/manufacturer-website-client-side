import React, { useEffect, useState } from 'react';
import UseServices from '../../../Hooks/UseServices';
import Service from './Service';

const Services = () => {
      const [services] = UseServices();
    return (
        <div className='bg-white p-2 lg:mx-20'>
            <h2 className='text-3xl font-bold text-center mt-20 mb-5'>Our Awesome <span className='text-primary'> Services</span></h2>
           <div className='grid lg:grid-cols-3 grid-cols-1  justify-evenly'>
           {
                services.map(service => <Service key={service._id} service= {service}></Service>)

            }
           </div>
        </div>
    );
};

export default Services;