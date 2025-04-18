import React, { useState, useRef, useEffect } from 'react';

import { OverviewList, OverviewContainer, OverviewIcon } from './OverviewStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Overview = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        scroll(carouselRef.current, 0);
      }
    }

    window.addEventListener('resize', handleResize);
    
    // Add cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section id="overview">
      <SectionTitle>Overview</SectionTitle>

        <OverviewList>
          <li><OverviewIcon>👨‍💻</OverviewIcon>Software Engineer and Computer Science student at The University of Texas at Austin, passionate about building innovative solutions.</li>
          <li><OverviewIcon>🎓</OverviewIcon>Pursuing my Bachelor of Science in Computer Science at UT Austin, with a focus on software engineering and system design.</li>
          <li><OverviewIcon>🛠</OverviewIcon>Built impactful projects leveraging modern tech stacks.</li>
          <li><OverviewIcon>🔧</OverviewIcon>Experienced in full-stack development, from React and TypeScript frontends to Flask and PostgreSQL backends.</li>
          <li><OverviewIcon>💡</OverviewIcon>Committed to continuous learning and creating software that makes a meaningful impact.</li>
        </OverviewList>

    </Section>
  );
};

export default Overview;
