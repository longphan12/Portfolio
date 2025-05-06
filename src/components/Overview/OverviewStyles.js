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
  background: ${(props) => props.theme.colors.background1};
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  border: 1px solid ${(props) => props.theme.colors.background3};
  transition: all 0.3s ease;
`;

export const OverviewList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-width: 800px;
  font-size: 1.4rem;
  line-height: 1.6;
  font-weight: 400;
  padding-bottom: 1.2rem;
  color: ${(props) => props.theme.colors.primary2};

  li {
    margin-bottom: 16px;
    padding-left: 0.8rem;
    border-left: 2px solid ${(props) => props.theme.colors.accent1};
    transition: all 0.3s ease;
    animation: ${fadeIn} 0.5s ease-out forwards;
    opacity: 0;
    background: transparent;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary2};
    
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.4s; }
    &:nth-child(5) { animation-delay: 0.5s; }

    &:hover {
      border-left: 2px solid ${(props) => props.theme.colors.accent2};
      padding-left: 1.2rem;
      color: ${(props) => props.theme.colors.primary1};
      background: ${(props) => props.theme.colors.background3};
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 1.3rem;
    line-height: 1.5;
    padding-bottom: 1rem;
    li {
      margin-bottom: 12px;
      font-size: 1.3rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    line-height: 1.4;
    padding-bottom: 0.8rem;
    li {
      margin-bottom: 8px;
      font-size: 1.2rem;
    }
  }
`;

export const OverviewIcon = styled.span`
  font-size: 1.1em;
  margin-right: 12px;
  display: inline-block;
  color: ${(props) => props.theme.colors.primary1};
  transform-origin: center;
  transition: transform 0.3s ease;

  ${OverviewList} li:hover & {
    transform: scale(1.15);
  }
`;

export const OverviewFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const OverviewImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OverviewProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0 0 0 6px #ffffff, 0 0 32px 6px #ffffff;
  object-fit: cover;
  background: #ffffff;
  transition: box-shadow 0.3s;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 140px;
    height: 140px;
  }
`;