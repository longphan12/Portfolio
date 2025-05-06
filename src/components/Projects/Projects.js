import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding="true" id="projects">
    <SectionTitle main="true">Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, description, title, completed, tags, source, visit}) => {
        return (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title="true">{title}</HeaderThree>
              {completed? <div style={{ fontSize: '1.3rem', color: 'green'}}>Completed</div> : <div style={{ fontSize: '1.3rem', color: 'red'}}>In Progress</div>}
              <Hr/>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks style={{pointerEvents: completed ? 'auto' : 'none'}} href={visit}>Code</ExternalLinks>
              <ExternalLinks style={{pointerEvents: completed ? 'auto' : 'none'}} href={source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>

        )
      })}
    </GridContainer>
  </Section>
);

export default Projects;