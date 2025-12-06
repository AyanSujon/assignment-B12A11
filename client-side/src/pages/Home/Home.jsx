import React from 'react';
import Hero from './Hero';
import UpcomingEvents from './UpcomingEvents';
import FeaturedClubs from './FeaturedClubs';


const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <UpcomingEvents></UpcomingEvents>
           <FeaturedClubs></FeaturedClubs>

        </div>
    );
};

export default Home;


