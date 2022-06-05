import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { img, _id, name, price, description, minQuentity, availableQuentity} = service;
    return (
        <div className={'p-5 text-center m-5 px-16  border-[1px] border-gray-200 hover:border-0 hover:shadow-lg rounded-lg' }>
            <div className='flex justify-center'>
            <img className='w-100 rounded-lg' src={img} alt="" />
            </div>
            <h2 className='text-2xl pt-5 font-bold'>{name}</h2>
            <h3 className='text-2xl font-bold text-primary py-2'>{price}</h3>
            <p className='text-xl text-secondary '>Par Box Parts Quentity <small>{minQuentity}</small></p>
            <p className='text-xl text-secondary '>Available options <small>{availableQuentity.length}</small></p>
            <p className='text-justify'>{description}</p>
            <button className='btn btn-outline btn-primary my-4'><Link to={`/service/${_id}`}>Purchase</Link></button>
            
        </div>
    );
};

export default Service;