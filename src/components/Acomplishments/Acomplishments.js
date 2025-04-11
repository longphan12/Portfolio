import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'API Academy Scholarship' },
  { text: 'Dell Scholar', subtext: '2022' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>
            {card.text}
            {card.subtext && (
              <>
                <br />
                {card.subtext}
              </>
            )}
          </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
