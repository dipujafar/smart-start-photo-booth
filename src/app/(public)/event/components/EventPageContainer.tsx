import BorderIcon from '@/components/ui/border-icon';
import React from 'react';
import Pricing from './Pricing';

const EventPageContainer = () => {
    return (
        <div className="xl:space-y-16 md:space-y-10 space-y-8">
            <BorderIcon></BorderIcon>
            <Pricing></Pricing>
            <BorderIcon></BorderIcon>
        </div>
    );
};

export default EventPageContainer;