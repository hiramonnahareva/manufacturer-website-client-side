import React from 'react';  
import { MdAttachMoney } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { FaTools } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';

const Summary = () => {
    const summary = [
        {_id: 1, icon:<FaTools />, count:'50+' , info: 'Parts'},
        {_id: 2, icon:<MdAttachMoney />, count:'120M+', info: 'Annual revenue'},
        {_id: 3, icon:<IoIosPeople />, count:'33K+', info: 'customers'},
        {_id: 4, icon:<AiOutlineLike />, count:'100+', info: 'Reviews'},
    ]

    return (
    <div>
<div className='flex justify-center text-center'>
<div>

<h2 className='text-4xl font-bold text-primary mt-10 text-center'>MILLIONS BUSINESS TRUST US</h2>
<h3 className='pt-4 pb-20 text-center text-xl'>TRY TO UNDERSTAND USERS EXPECTATION</h3>
<div className='lg:grid grid-cols-4 gap-5 justify-center'>
    {
        summary.map(summary => <div key={summary._id} className='mx-5 '>
        <h3 className='text-6xl text-orange-400 mx-20'>{summary.icon}</h3>
        <h4 className='text-3xl font-semibold my-2'>{summary.count}</h4>
        <p className='text-2xl font-semibold text-orange-400'>{summary.info}</p>
        </div>)
    }


</div>
</div>
</div>

<div className='flex justify-center my-20'>
<div class="card w-[800px] bg-accent shadow-xl mx-5">
  <div class="card-body">
    <h2 class="card-title text-primary text-3xl font-bold font-sans">Have any question about us or get a projects request ?</h2>
    <p className='text-2xl my-2'>Don't hesitate to contact us</p>
    <div class="card-actions justify-end">
     <div>
     <button class="btn btn-secondary my-2 mr-4 text-white">Request For Quote</button>
     <button class="btn btn-primary my-2">Contact Us</button>
     </div>
    </div>
  </div>
</div>
</div>
</div>


       
    );
};

export default Summary;