import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '3.96', text: 'Culmitive GPA'},
  { number: '2+', text: 'Years Professional Experience', },
  { number: '60%', text: 'Better time efficiency via scripts @ Thales Group', },
  { number: '100%', text: 'Satisfaction rate from Managers', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Me in Numbers</SectionTitle>
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
