import React, { useState, useRef, useEffect } from 'react';

import { OverviewList, OverviewContainer, OverviewIcon, OverviewFlex, OverviewImageWrapper, OverviewProfileImage } from './OverviewStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const Overview = () => {

  return (
    <Section id="overview">
      <SectionTitle>Overview</SectionTitle>
      <OverviewFlex>
        <OverviewImageWrapper>
          <OverviewProfileImage src="/images/portfolioPhoto.jpeg" alt="Portfolio Photo" />
        </OverviewImageWrapper>
        <OverviewList>
          <li><OverviewIcon>👨‍💻</OverviewIcon>Software Engineer and Computer Science student at The University of Texas at Austin, passionate about building innovative solutions.</li>
          <li><OverviewIcon>🎓</OverviewIcon>Pursuing my Bachelor of Science in Computer Science at UT Austin, with a focus on software engineering and system design.</li>
          <li><OverviewIcon>🛠</OverviewIcon>Built impactful projects leveraging modern tech stacks.</li>
          <li><OverviewIcon>🔧</OverviewIcon>Experienced in full-stack development, from React and TypeScript frontends to Flask and PostgreSQL backends.</li>
          <li><OverviewIcon>💡</OverviewIcon>Committed to continuous learning and creating software that makes a meaningful impact.</li>
        </OverviewList>
      </OverviewFlex>
    </Section>
  );
};

export default Overview;
