import React, { useState } from 'react';  
import { MdAttachMoney } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { FaTools } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
const Summary = () => {
    const [counterOn, setCounterOn] = useState(false);
    const summary = [
        {_id: 1, icon:<FaTools />, countStart: '0', countEnd:'50', countSpan: '+' , info: 'Parts'},
        {_id: 2, icon:<MdAttachMoney />, countStart: '0', countEnd:'120', countSpan: 'M+', info: 'Annual revenue'},
        {_id: 3, icon:<IoIosPeople />, countStart: '0', countEnd:'33', countSpan: 'K+', info: 'customers'},
        {_id: 4, icon:<AiOutlineLike />, countStart: '0', countEnd:'100',  countSpan: '+',info: 'Reviews'},
    ]


    return (
        <div>
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
<div className='flex justify-center text-center'>
<div>

<h2 className='text-4xl font-bold text-primary mt-10 text-center'>MILLIONS BUSINESS TRUST US</h2>
<h3 className='pt-4 pb-20 text-center text-xl'>TRY TO UNDERSTAND USERS EXPECTATION</h3>
<div className='lg:grid grid-cols-4 gap-5 justify-center'>
    {
        summary.map(summary => <div key={summary._id} className='mx-5 '>
        <h3 className='text-6xl text-primary mx-20'>{summary.icon}</h3>
        <h4 className='text-3xl font-semibold my-2'>
            { counterOn &&  <CountUp start={summary.countStart} end={summary.countEnd} duration={2} delay={0} />   
            }<span>{summary.countSpan}</span></h4>
        <p className='text-2xl font-semibold text-primary'>{summary.info}</p>
        </div>)
    }


</div>
</div>
</div>

<div className='flex justify-center my-20'>
<div className="card w-[800px] bg-blue-100 shadow-xl mx-5">
  <div className="card-body">
    <h2 className="card-title text-secondary text-3xl font-bold font-sans">Have any question about us or get a projects request ?</h2>
    <p className='text-2xl my-2'>Don't hesitate to contact us</p>
    <div className="card-actions justify-end">
     <div>
     <button className="btn btn-primary my-2 mr-4">Request For Quote</button>
     <button className="btn btn-secondary my-2 text-white">Contact Us</button>
     </div>
    </div>
  </div>
</div>
</div>
</ScrollTrigger>
</div>

       
    );
};

export default Summary;