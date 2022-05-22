import React from 'react';
import {MdOutlineDeliveryDining, MdPayment} from 'react-icons/md'
import {AiOutlineTransaction} from 'react-icons/ai'
import {GoGift} from 'react-icons/go'

const OthersInfo = () => {
    const benifits = [
        {_id: 1, icon: <MdOutlineDeliveryDining/>, name:'FREE DELIVERY' , info: 'Worldwide from $75'},
        {_id: 2, icon: <AiOutlineTransaction/>, name:'EASY RETURNS', info: '365 days for free returns'},
        {_id: 3, icon: <MdPayment/>, name:'COMFORT PAYMENTS', info: 'Credit Cards Available'},
        {_id: 4, icon: <GoGift/>, name:'FREE GIFTS', info: 'Get gifts and discounts'},
    ]

    
    return (
        <div className='mx-20'>
             <div class="divider"></div> 
       
        <div className='lg:flex justify-evenly'>
            {
                benifits.map( benifit => <div key={benifit._id}>
                   <div className="flex">
                   <span className='text-5xl text-secondary'>{benifit.icon}</span>
                    <div className='mx-4'>
                        <p className='text-xl'>{benifit.name}</p>
                        <span className=' text-gray-400'>{benifit.info}</span>
                    </div>
                   </div>
               </div>)
            }
            {/* <div>
                 <span className='text-6xl text-secondary'><AiOutlineTransaction/></span>
                 <div className='flex'>
                     <p>FREE DELIVERY</p>
                     <small>Worldwide from $75</small>
                 </div>
            </div>
            <div>
                 <span className='text-6xl text-secondary'><MdPayment/></span>
            </div>
            <div>
                 <span className='text-6xl text-secondary'><GoGift/></span>
            </div> */}
        </div>
        <div class="divider"></div> 
        </div>
    );
};

export default OthersInfo;