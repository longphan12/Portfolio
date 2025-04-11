import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 20px;
    padding: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 100%;
  border: 10px solid #f5f3f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  object-fit: cover;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media ${props => props.theme.breakpoints.md} {
    max-width: 300px;
    border-width: 8px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    max-width: 250px;
    border-width: 6px;
    margin: 0 auto;
  }
`;

const BackgroundAnimation = () => (
  <ImageContainer>
    <ProfileImage 
      src="/images/portfolioPhoto.jpeg" 
      alt="Portfolio Photo"
    />
  </ImageContainer>
);

export default BackgroundAnimation;