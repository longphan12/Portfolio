import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ListTitle } from './TechnologiesStyles';
import styled, { useTheme } from 'styled-components';

const TechItem = styled.li`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary2};
  position: relative;
  padding: 0.3rem 0 0.3rem 1.2rem;
  transition: transform 0.2s, color 0.2s;
  font-weight: 400;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent1};
    font-size: 1em;
  }
  
  &:hover {
    transform: translateX(3px);
    color: ${({ theme }) => theme.colors.accent2};
  }
`;

const TechList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0 0 0;
`;

const IconWrapper = styled.div`
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.accent2};
  transition: transform 0.3s ease, color 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    color: ${({ theme }) => theme.colors.accent1};
  }
`;

const TechCard = styled.div`
  background: ${({ theme }) => theme.colors.background2};
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary1};
  border: 1px solid ${({ theme }) => theme.colors.background3};
  font-size: 12px;
  font-weight: 400;
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
    background: ${({ theme }) => theme.colors.background3};
  }
`;

const Technologies = () => {
  const theme = useTheme();
  return (
    <Section id="tech">
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world. 
        From Front-end to Back-end and Design.
      </SectionText>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', width: '100%' }}>
        <TechCard theme={theme}>
          <IconWrapper theme={theme}>
            <DiReact />
          </IconWrapper>
          <ListTitle>Frontend</ListTitle>
          <TechList>
            <TechItem theme={theme}>React.js</TechItem>
            <TechItem theme={theme}>Next.js</TechItem>
            <TechItem theme={theme}>Tailwind CSS</TechItem>
            <TechItem theme={theme}>TypeScript</TechItem>
            <TechItem theme={theme}>HTML</TechItem>
            <TechItem theme={theme}>CSS</TechItem>
            <TechItem theme={theme}>JavaScript</TechItem>
          </TechList>
        </TechCard>

        <TechCard theme={theme}>
          <IconWrapper theme={theme}>
            <DiFirebase />
          </IconWrapper>
          <ListTitle>Backend</ListTitle>
          <TechList>
            <TechItem theme={theme}>Node.js</TechItem>
            <TechItem theme={theme}>Express.js</TechItem>
            <TechItem theme={theme}>Flask</TechItem>
            <TechItem theme={theme}>SQLAlchemy</TechItem>
            <TechItem theme={theme}>PostgreSQL</TechItem>
            <TechItem theme={theme}>MongoDB</TechItem>
            <TechItem theme={theme}>Mongoose</TechItem>
          </TechList>
        </TechCard>
      </div>
    </Section>
  );
};

export default Technologies;
