import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  
  /* Target the third project specifically for centering on second row */
  & > *:nth-child(3) {
    grid-column: 1 / span 2;
    max-width: 400px;
    justify-self: center;
  }
  
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    
    & > *:nth-child(3) {
      grid-column: auto;
      max-width: none;
    }
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`

export const BlogCard = styled.div`
  border-style: solid;
  border-color:rgba(233, 196, 106, 0.2);
  border-width: 2px;
  border-radius: 20px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.15);
  text-align: center;
  width: 400px;
  background: #fcfaf7;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #2c5d85;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #b99e35;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #333333;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #555555;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#444444;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #e9c46a;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #f4a261;
}
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 1.5rem;
  margin: 0;
`;

export const Tag = styled.li`
  color: #666666;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  background: rgba(233, 196, 106, 0.2);
  border-radius: 15px;
  transition: 0.4s;
  
  &:hover {
    background: rgba(233, 196, 106, 0.5);
  }
`