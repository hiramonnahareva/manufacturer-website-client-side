import React from 'react';
import CpuPart from './CpuPart';
import image1 from '../../../Assets/case.jpg';
import image2 from '../../../Assets/motherboard.jpg';
import image3 from '../../../Assets/processor.jpg';
import image4 from '../../../Assets/download.jpg';
import image5 from '../../../Assets/ram.jpg';
import image6 from '../../../Assets/fan.jpg';

const Categories = () => {
    const cpuParts = [
        {_id: 1, img: image1, name:'case' , description: "The computer's central processing unit (CPU) is the portion of a computer that retrieves and executes instructions. The CPU is essentially the brain of a CAD system. It consists of an arithmetic and logic unit (ALU), a control unit, and various registers. The CPU is often simply referred to as the processor."},
        {_id: 2, img: image2, name:'Motherboard', description: "The computer's central processing unit (CPU) is the portion of a computer that retrieves and executes instructions. The CPU is essentially the brain of a CAD system. It consists of an arithmetic and logic unit (ALU), a control unit, and various registers. The CPU is often simply referred to as the processor."},
        {_id: 3, img: image3,name:'Processors', description: "The computer's central processing unit (CPU) is the portion of a computer that retrieves and executes instructions. The CPU is essentially the brain of a CAD system. It consists of an arithmetic and logic unit (ALU), a control unit, and various registers. The CPU is often simply referred to as the processor."},
        {_id: 4, img: image4, name:'CGA Card', description: "The computer's central processing unit (CPU) is the portion of a computer that retrieves and executes instructions. The CPU is essentially the brain of a CAD system. It consists of an arithmetic and logic unit (ALU), a control unit, and various registers. The CPU is often simply referred to as the processor."},
        {_id: 5, img: image5, name:'RAM', description: "The computer's central processing unit (CPU) is the portion of a computer that retrieves and executes instructions. The CPU is essentially the brain of a CAD system. It consists of an arithmetic and logic unit (ALU), a control unit, and various registers. The CPU is often simply referred to as the processor."},
        {_id: 6, img: image6, name:'CPU Fan', description: "The computer's central processing unit (CPU) is the portion of a computer that retrieves and executes instructions. The CPU is essentially the brain of a CAD system. It consists of an arithmetic and logic unit (ALU), a control unit, and various registers. The CPU is often simply referred to as the processor."},
    ]
    return (
       
        <div className='bg-white p-2 lg:mx-20'>
        <h2 className='text-3xl font-bold text-center mt-20 mb-5'>CPU PARTS <span className='text-primary'> CATAGORIES</span></h2>
       <div className='grid lg:grid-cols-3 grid-cols-1  justify-evenly'>
       {
            cpuParts.map(cpuPart => <CpuPart key={cpuPart._id} cpuPart= {cpuPart}></CpuPart>)

        }
       </div>
    </div>
    );
};

export default Categories;