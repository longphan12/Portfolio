import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const OverviewContainer = styled.div`
  padding: 2rem;
  transition: all 0.3s ease;
`;

export const OverviewList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-width: 800px;
  font-size: 24px;
  line-height: 1.8;
  font-weight: 300;
  padding-bottom: 2rem;
  color: rgba(0, 0, 0, 0.8);

  li {
    margin-bottom: 32px;
    padding-left: 1rem;
    border-left: 3px solid transparent;
    transition: all 0.3s ease;
    animation: ${fadeIn} 0.5s ease-out forwards;
    opacity: 0;
    
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.4s; }
    &:nth-child(5) { animation-delay: 0.5s; }

    &:hover {
      border-left: 3px solid #2C5D85;
      padding-left: 1.5rem;
      color: #000;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 1.6;
    
    li {
      margin-bottom: 24px;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 1.5;
    
    li {
      margin-bottom: 20px;
    }
  }
`;

export const OverviewIcon = styled.span`
  font-size: 1.2em;
  margin-right: 16px;
  display: inline-block;
  transform-origin: center;
  transition: transform 0.3s ease;

  ${OverviewList} li:hover & {
    transform: scale(1.2);
  }
`;