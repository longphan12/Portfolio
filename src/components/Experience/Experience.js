import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { ExperienceContainer, ExperienceItem, ExperienceTitle, ExperienceCompany, ExperienceDate, ExperienceDescription } from './ExperienceStyles';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Instructor",
      company: "STEMKidz",
      date: "April 2025 - June 2025",
      description: "Led hands-on coding camps and project-based learning for students."
    },
    {
      title: "Teaching Assistant",
      company: "UT Austin",
      date: "August 2024 - May 2025",
      description: "Tutored students in Differential Calculus and facilitated group problem-solving."
    }
  ];

  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <ExperienceContainer>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index}>
            <ExperienceTitle>{exp.title}</ExperienceTitle>
            <ExperienceCompany>{exp.company}</ExperienceCompany>
            <ExperienceDate>{exp.date}</ExperienceDate>
            <ExperienceDescription>{exp.description}</ExperienceDescription>
          </ExperienceItem>
        ))}
      </ExperienceContainer>
    </Section>
  );
};

export default Experience; 