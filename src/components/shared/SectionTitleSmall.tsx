import { cn } from '@/lib/utils';
import React from 'react';

const SectiontitleSmall = ({title, subTitle, className, id}: {title: string, subTitle?: string,className?: string, id?:string}) => {
    return (
        <div className={cn('text-center', className)} id={id}>
            <h1 className='xl:text-7xl md:text-5xl text-3xl font-playfair font-bold '>{title}</h1>
            <h3 className='xl:text-5xl md:text-3xl text-xl font-playfair font-medium '>{subTitle}</h3>
        </div>
    );
};

export default SectiontitleSmall;