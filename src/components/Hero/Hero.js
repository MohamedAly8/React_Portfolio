import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
     <SectionTitle main center>
       Hi there, <br></br>
       I'm Mohamed
     </SectionTitle>

     <SectionText>
       Passionate Full Stack Engineer seeking SWE new grad roles.
       <br></br>
       
       <a href="#technologies"
       style={{
          color: 'white',
          textDecoration: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          // font size in clamp function for mobile responsiveness
          fontSize: 'clamp(1.5rem, 6vw, 2rem)',
          borderRadius: '10px',         
       }}> Click here to see my relevent skills!</a>
     </SectionText>
    
      <a href='https://tinyurl.com/MAly2022' target="_blank">
     <Button>
       My Resume
     </Button>
     </a>

    </LeftSection>
  </Section>
);

export default Hero;