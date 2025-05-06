import styled from 'styled-components'

export const ListTitle = styled.h4`
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${props => props.theme.colors.primary1};
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`