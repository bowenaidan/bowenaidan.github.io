import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import About from '../About';
import Footer from '../Footer';

function Home () {
    return(
        <>
            <HeroSection />
            <Cards />
            <About />
            <Footer />
        </>
    )
}

export default Home;