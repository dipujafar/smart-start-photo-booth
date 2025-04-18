import React from 'react';

const SectiontitleSmall = ({title, subTitle}: {title: string, subTitle?: string}) => {
    return (
        <div className='text-center'>
            <h1 className='xl:text-7xl md:text-5xl text-3xl font-playfair font-bold '>{title}</h1>
            <h3 className='xl:text-5xl md:text-3xl text-xl font-playfair font-medium '>{subTitle}</h3>
            
        </div>
    );
};

export default SectiontitleSmall;