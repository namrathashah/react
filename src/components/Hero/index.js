import React from 'react'
import Navbar from '../Navbar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';

const Hero = () => {
    return (
       <HeroContainer>
           <Navbar />
           <HeroContent>
               <HeroItems>
                   <HeroH1>Create Something Beautiful</HeroH1>
                   <HeroP>Innovate and Inspire</HeroP>
                   <HeroBtn>Start Today</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    );
};

export default Hero
