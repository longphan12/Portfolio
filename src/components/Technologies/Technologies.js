import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import styled from 'styled-components';

const TechItem = styled.li`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.75);
  position: relative;
  padding: 0.5rem 0 0.5rem 1.5rem;
  transition: transform 0.2s;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #b99e35;
    font-size: 1.2em;
  }
  
  &:hover {
    transform: translateX(5px);
    color: #2c5d85;
  }
`;

const TechList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0 0 0;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2c5d85;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const TechCard = styled.div`
  background: #fcfaf7;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    transform: translateY(-5px);
  }
`;

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world. 
      From Front-end to Back-end and Design.
    </SectionText>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', width: '100%' }}>
      <TechCard>
        <IconWrapper>
          <DiReact />
        </IconWrapper>
        <ListTitle>Frontend</ListTitle>
        <TechList>
          <TechItem>React.js</TechItem>
          <TechItem>Next.js</TechItem>
          <TechItem>Tailwind CSS</TechItem>
          <TechItem>TypeScript</TechItem>
          <TechItem>HTML</TechItem>
          <TechItem>CSS</TechItem>
          <TechItem>JavaScript</TechItem>
        </TechList>
      </TechCard>

      <TechCard>
        <IconWrapper>
          <DiFirebase />
        </IconWrapper>
        <ListTitle>Backend</ListTitle>
        <TechList>
          <TechItem>Node.js</TechItem>
          <TechItem>Express.js</TechItem>
          <TechItem>Flask</TechItem>
          <TechItem>SQLAlchemy</TechItem>
          <TechItem>PostgreSQL</TechItem>
          <TechItem>MongoDB</TechItem>
          <TechItem>Mongoose</TechItem>
        </TechList>
      </TechCard>
    </div>
  </Section>
);

export default Technologies;
