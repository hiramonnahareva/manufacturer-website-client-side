import React from 'react';

import Banner from './Banner';
import Summary from './BusinessSummary/Summary';
import Categories from './Categories/Categories';
import OthersInfo from './OthersInfo/OthersInfo';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Summary></Summary>
           <Reviews></Reviews>
           <Categories></Categories>
           <OthersInfo></OthersInfo>
          
        </div>
    );
};

export default Home;