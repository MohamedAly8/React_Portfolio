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
       Extrovert Software Engineer with crazy ambitions and a cool tech toolbelt
     </SectionText>
    
      <a href='https://tinyurl.com/Mohamed2022' target="_blank">
     <Button>
       My Resume
     </Button>
     </a>

    </LeftSection>
  </Section>
);

export default Hero;