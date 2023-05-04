import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '4.0', text: 'Culmitive GPA'},
  { number: '2+', text: 'Years Professional Experience', },
  { number: '10+', text: 'Open Source Projects', },
  { number: '100%', text: 'Satisfaction rate from Managers', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider></SectionDivider>
    <br></br>
    <SectionTitle>Things I'm proud of</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
         <Box key={index}>
           <BoxNum>{card.number}</BoxNum>
           <BoxText>{card.text}</BoxText>
         </Box>
      ))}
    </Boxes>
  </Section>
) ;

export default Acomplishments;
