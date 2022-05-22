import React from 'react';

const Service = ({service}) => {
    const { img, name, price, description, minQuentity, availableQuentity} = service;
    return (
        <div className={'p-5 text-center m-5 px-16  border-[1px] border-gray-200' }>
            <div className='flex justify-center'>
            <img className='w-28' src={img} alt="" />
            </div>
            <h2 className='text-2xl pt-5 font-bold'>{name}</h2>
            <h3 className='text-2xl font-bold text-primary py-2'>{price}</h3>
            <p className='text-xl text-secondary '>Quentity <small>(Minimun{minQuentity}, Available {availableQuentity})</small></p>
            {/* <p className='text-xl'> Quentity:<span>{availableQuentity}</span></p> */}
            <p className='text-justify'>{description}</p>
            <button className='btn btn-outline btn-primary my-4'>purchase</button>
            
        </div>
    );
};

export default Service;