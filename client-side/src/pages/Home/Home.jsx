import React from 'react';
import Hero from './Hero';
import UpcomingEvents from './UpcomingEvents';
import FeaturedClubs from './FeaturedClubs';
import HowClubSphereWorks from './HowClubSphereWorks';
import WhyJoinClub from './WhyJoinClub';
import PopularCategories from './PopularCategories';
import Newsletter from '../../components/shared/Newsletter';


const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <UpcomingEvents></UpcomingEvents>
           <PopularCategories></PopularCategories>
           <FeaturedClubs></FeaturedClubs>
           <HowClubSphereWorks></HowClubSphereWorks>
           <WhyJoinClub></WhyJoinClub>
           <Newsletter></Newsletter>

        </div>
    );
};

export default Home;


