import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row="true" nopadding="true">
    <LeftSection>
      <SectionTitle main="true" center="true">
        Hi, <br />
        I'm Long Phan
      </SectionTitle>
      <SectionText>
        I'm a Computer Science student with a passion for building scalable and efficient systems.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/long-phan-1203t/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;