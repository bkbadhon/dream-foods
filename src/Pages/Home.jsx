import React from 'react';
import Banner from '../component/Banner/Banner';
import Brands from '../component/Brands/Brands';
import Offer from '../component/Offer/Offer';
import Gallery from '../component/Gallery/Gallery';
import Service from '../component/Services/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <Brands></Brands>
                <Offer></Offer>
                <Gallery></Gallery>
                <Service></Service>
            </div>
        </div>
    );
};

export default Home;