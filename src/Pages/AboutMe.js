import React from 'react';

const AboutMe = () => {
    return (
        <div class=" flex justify-center my-14 mx-5">
        <div class="card bg-accent shadow-xl">
        <div className=' my-5 lg:px-40 px-5'>
             <div>
             <h2 className='text-3xl font-semibold'>Hiramon Nahar <span className='text-secondary'>Eva</span></h2>
            <span>Email Address: hiramonnahareva@gmail.com</span>
            <h2 className='text-2xl font-semibold mt-6 mb-2'>EDUCATIONAL BACKGROUND</h2>
            <p>study at Netrakona GOVT Collage</p>
            <p>subject: Islamic History.</p>
            <p>Year : 1st(Honors)</p>
            <p>Group: ARTS</p>
             </div>
             <div>
             <h2 className='text-2xl font-semibold uppercase mt-6 mb-2'>my projects</h2>
                 <p>https://elegant-melba-17c1b9.netlify.app/</p>
                 <p>https://assignment-10-9be48.web.app/</p>
                 <p>https://spice-warehouse.web.app/</p>
             </div>
             <div>
             <h2 className='text-2xl font-semibold uppercase mt-6 mb-2'>tecnologis</h2>
                
                 <span>HTML, CSS, and JavaScript,node.js.</span>
             </div>
        </div>
        </div>
        </div>
    );
};

export default AboutMe;