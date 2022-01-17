import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { BiBrain, BiCameraHome, BiNetworkChart } from 'react-icons/bi';
import { AiOutlineRobot } from 'react-icons/ai';

const Technologies = () =>  (
  <div>
    <Section id="tech">
      <SectionDivider />
      <br></br>
      <br></br>

      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I worked on Full Stack Development, Machine Learning, Computer Vision, Task Automation and Data Visualization
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
              <ListParagraph>
                React.js, Javascript, Git, Vue.js
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                Node.js, Docker, Databases,
                 PHP, Firebase
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <BiBrain size="3rem"/>
          <ListContainer>
            <ListTitle>Machine Learning</ListTitle>
              <ListParagraph>
                TensorFlow, Keras, Scikit Learn, PyTorch
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <AiOutlineRobot size="3rem"/>
          <ListContainer>
            <ListTitle>Automation</ListTitle>
              <ListParagraph>
                Shellscript, Python, Ruby
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <BiCameraHome size="3rem"/>
          <ListContainer>
            <ListTitle>Computer Vision</ListTitle>
              <ListParagraph>
                
                OpenCV, YOLO
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <BiNetworkChart size="3rem"/>
          <ListContainer>
            <ListTitle>Data Visualization</ListTitle>
              <ListParagraph>
                
                Tableau, Python, MATLAB 
              </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </div>
);

export default Technologies;
