import React from 'react';
import AboutPageHeader from './AboutPageHeader';
import CapturingMemories from './CapturingMemories';
import BorderIcon from '@/components/ui/border-icon';
import WhyChooseUs from './WhyChooseUs';
import Team from './Team/Team';
import { TeamMembers } from './Team/TeamMembers';
import OurDedication from '@/components/modules/OurDedication/OurDedication';

const AboutPageContainer = () => {
    return (
        <div className='xl:space-y-16 md:space-y-10 space-y-8'>
            <AboutPageHeader></AboutPageHeader>
            <CapturingMemories></CapturingMemories>
            <BorderIcon></BorderIcon>
            <WhyChooseUs></WhyChooseUs>
            <BorderIcon></BorderIcon>
            <Team></Team>
            <BorderIcon></BorderIcon>
            <TeamMembers></TeamMembers>
            <BorderIcon></BorderIcon>
            <OurDedication></OurDedication>
           
        </div>
    );
};

export default AboutPageContainer;