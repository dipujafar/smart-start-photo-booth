import React from 'react';

const Sectiontitle = ({title, subTitle}: {title: string, subTitle?: string}) => {
    return (
        <div className='text-center'>
            <h1 className='xl:text-8xl md:text-6xl text-4xl font-playfair font-extrabold '>{title}</h1>
            <h3 className='xl:text-8xl md:text-4xl text-xl font-playfair font-medium '>{subTitle}</h3>
            
        </div>
    );
};

export default Sectiontitle;