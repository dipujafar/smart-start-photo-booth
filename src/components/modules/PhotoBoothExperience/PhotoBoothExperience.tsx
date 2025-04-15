"use client";

import PhotoCarousel from './PhotoCarousel';
import React from 'react'
// @ts-ignore
import { EmblaOptionsType } from 'embla-carousel'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
import Sectiontitle from '../../shared/SectionTitle';
import Container from '@/components/shared/Container';


const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const sectionImage = [
    "/sectionImage1.png",
    "/sectionImage2.png",
    "/sectionImage3.png",
]
const PhotoBoothExperience = () => {
    return (
        <Container className='lg:space-y-10 space-y-8'>
            <Sectiontitle title='Discover Your' subTitle='Ideal Photo Booth Experience'></Sectiontitle>

            <PhotoCarousel slides={sectionImage} options={OPTIONS}></PhotoCarousel>
        </Container>
    );
};

export default PhotoBoothExperience;