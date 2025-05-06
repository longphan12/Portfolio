import styled, { keyframes } from 'styled-components';

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

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
`;

export const ExperienceItem = styled.div`
  background: ${props => props.theme.colors.background2};
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    background: ${props => props.theme.colors.background3};
  }

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
`;

export const ExperienceTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary1};
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const ExperienceCompany = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${props => props.theme.colors.accent1};
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const ExperienceDate = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary2};
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const ExperienceDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.primary1};
  opacity: 0.95;
  font-weight: 400;
`; 