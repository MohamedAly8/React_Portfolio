import React, { useState, useRef, useEffect } from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import TimeLineItem from './TimeLineItem';
import { interpolateAs } from 'next/dist/next-server/lib/router/router';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Date } from './TimeLineStyles';



 

const Timeline = () => {

  useEffect(() => {

  }, []); 

  return (
    <div>
      <Section id="about">
        <SectionDivider></SectionDivider>
        <br></br>
        <br></br>
        <SectionTitle>
          Experience
        </SectionTitle>
        <SectionText>
          Always excited to learn new technologies and positively impact my team
        </SectionText>

        

        <VerticalTimeline lineColor={"white"}>
          {TimeLineData.map((data, idx) => (
            <VerticalTimelineElement

              key={idx}
              date={<Date>{data.date}</Date>}
              contentStyle={{ background: '#f0e9f7', color: '#fff' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              
              //icon src link in data.icon that fits the circle
              icon={<img src={data.icon} style={{width: '100%', height: '100%', borderRadius: '40%'}}></img>}
            >
              
              <h3 className="vertical-timeline-element-title" style={{color:'black'}}>{data.title}</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{color:'black'}}>{data.subtitle}</h4>
              
              <div style={{
                display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                
              }}>
                  {/* loop through tag array in data and show results in p tag below */}
                {data.tagArray.map((tag, idx) => (
                  <p key={idx} style={{background: '#7c65c9', borderRadius: '10px', padding: '10px', marginRight: '5px', fontSize: '10px'}}>
                    {tag}
                  </p>
                ))}
              </div>
              <p style={{color:'black', fontSize: '0.8em'}}>
                {data.text}
              </p>

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>


        
      </Section>
    </div>
  );
};

export default Timeline;
