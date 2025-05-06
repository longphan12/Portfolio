import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 50px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`;
