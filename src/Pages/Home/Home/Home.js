import React from 'react';
import Register from '../../Register/Register';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Blog></Blog>
        </div>
    );
};

export default Home;