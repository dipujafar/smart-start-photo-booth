
import SectiontitleSmall from '@/components/shared/SectionTitleSmall';
import React from 'react';
import AllPackages from './AllPackages';
import Container from '@/components/shared/Container';

const Packages = () => {
    return (
        <Container className='space-y-10'>
            <SectiontitleSmall title='Smart Start Photobooth Packages' id='package'></SectiontitleSmall>
            <AllPackages></AllPackages>
        </Container>
    );
};

export default Packages;