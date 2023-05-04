import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListIcon, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { BiBrain, BiCameraHome, BiMobile } from 'react-icons/bi';
import { AiOutlineRobot } from 'react-icons/ai';
import { GiChaingun } from 'react-icons/gi';

const Technologies = () =>  (
  <div>
    <Section id="technologies">
      <SectionDivider />
      <br></br>
      <br></br>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I worked on Full Stack Development, Machine Learning, Computer Vision, Task Automation and Data Visualization
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="4rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
              <ListParagraph>
                React.js, Javascript, Git, Vue.js
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="4rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                Node.js, Docker, Databases,
                 PHP, Firebase
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <BiBrain size="4rem"/>
          <ListContainer>
            <ListTitle>Machine Learning</ListTitle>
              <ListParagraph>
                TensorFlow, Keras, Scikit Learn, PyTorch
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <AiOutlineRobot size="4rem"/>
          <ListContainer>
            <ListTitle>Automation</ListTitle>
              <ListParagraph>
                Shellscript, Python, Ruby
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <BiMobile size="4rem"/>
          <ListContainer>
            <ListTitle>Mobile Development</ListTitle>
              <ListParagraph>
                
                React Native, Swift, MVC/PAC Architecture
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <BiCameraHome size="4rem"/>
          <ListContainer>
            <ListTitle>Computer Vision</ListTitle>
              <ListParagraph>
                
                OpenCV, YOLO
              </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </div>
);

export default Technologies;
