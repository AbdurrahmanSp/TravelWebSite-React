import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import { HeroSectioin } from '../HeroSectioin';

const Home = () => {
    return (
        <>
           <HeroSectioin />
           <Cards />
           <Footer />
        </>

    );
};

export default Home;