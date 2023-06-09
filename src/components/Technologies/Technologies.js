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
                React.js, Angular, Javascript, HTML, CSS
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="4rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                AWS, Node.js, Docker, SQL, MongoDB, Firebase
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <BiBrain size="4rem"/>
          <ListContainer>
            <ListTitle>Artifical Intelligence</ListTitle>
              <ListParagraph>
                TensorFlow, GPT API, PyTorch, Keras
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <AiOutlineRobot size="4rem"/>
          <ListContainer>
            <ListTitle>Automation</ListTitle>
              <ListParagraph>
                Bash, Python
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
