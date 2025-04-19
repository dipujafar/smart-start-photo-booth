import React from 'react';

const Sectiontitle = ({title, subTitle, id}: {title: string, subTitle?: string, id?: string}) => {
    return (
        <div className='text-center' id={id}>
            <h1 className='xl:text-8xl md:text-6xl text-4xl font-playfair font-extrabold '>{title}</h1>
            <h3 className='xl:text-8xl md:text-4xl text-xl font-playfair font-medium '>{subTitle}</h3>
            
        </div>
    );
};

export default Sectiontitle;