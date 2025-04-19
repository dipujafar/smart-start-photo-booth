import React from 'react';
import RentPageHeader from './RentPageHeader';
import { PreviewItems } from './PreviewItems';

const RentPageContainer = () => {
    return (
        <div className='xl:space-y-16 md:space-y-10 space-y-8'>
           <RentPageHeader></RentPageHeader>
           <div className='mt-[120px]'>
           <PreviewItems></PreviewItems>
           </div>
        </div>
    );
};

export default RentPageContainer;