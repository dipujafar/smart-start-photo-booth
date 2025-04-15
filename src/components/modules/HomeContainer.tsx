import React from 'react';
import Hero from './Hero';
import BorderIcon from '../ui/border-icon';
import PhotoBoothExperience from './PhotoBoothExperience/PhotoBoothExperience';
import EventRentals from './EventRentals/EventRentals';
import OurDedication from './OurDedication/OurDedication';
import CustomersReviews from './CustomersReviews/CustomersReviews';

const HomeContainer = () => {
    return (
        <div className='xl:space-y-16 md:space-y-10 space-y-8'>
            <Hero></Hero>
            <BorderIcon></BorderIcon>
            <PhotoBoothExperience></PhotoBoothExperience>
            <BorderIcon></BorderIcon>
            <EventRentals></EventRentals>
            <BorderIcon></BorderIcon>
            <OurDedication></OurDedication>
            <BorderIcon></BorderIcon>
            <CustomersReviews></CustomersReviews>
        </div>
    );
};

export default HomeContainer;