import React from 'react';

const CpuPart = ({cpuPart}) => {
    const {img, name, description} = cpuPart;
    return (
        <div className={'p-5 text-center shadow-md m-3 rounded-lg border-gray-200' }>
        <div className='flex justify-center'>
        <img className='w-full h-[250px]' src={img} alt="" />
        </div>
        <h2 className='text-2xl pt-5 font-bold'>{name}</h2>
        <p className='text-justify'>{description}</p>       
    </div>
    );
};

export default CpuPart;