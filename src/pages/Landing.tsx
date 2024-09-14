import React from 'react';
import { VStack } from '@chakra-ui/react';
import { Navbar } from '../Component/Navbar';
import {Starting} from './Starting';
import {Companies} from './Companies';
import { Market } from './Market';
import {Leader} from './Leader';
import {Features} from './Features';
import {Question} from './Question';
import {End} from './End';
import {Footer} from './Footer';
import {Carousel} from './Carousel';
import { People } from './PeopleGroup';
import { Partners } from './Part';
import { Profit } from './Profit';

export const Landing: React.FC = () => {
    return (
        <>
            <Navbar />
            <VStack width="100%" height="full" align='center' justifyContent='center' bg="#010101" >
                <Starting />
                <Companies />
                <Market />
                <People />
                <Profit />
                <Leader />
                <Features />
                <Partners />
                <Question />
                <Carousel />
                <End />
                <Footer />
            </VStack>
        </>
    );
};