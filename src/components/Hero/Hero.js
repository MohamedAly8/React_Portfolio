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
       Software Engineer with crazy ambitions and a positive attitude
     </SectionText>

     <Button>
       My Resume
     </Button>

    </LeftSection>
  </Section>
);

export default Hero;