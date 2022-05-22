import React from 'react';

import Banner from './Banner';
import Summary from './BusinessSummary/Summary';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Summary></Summary>
           <Reviews></Reviews>
          
        </div>
    );
};

export default Home;