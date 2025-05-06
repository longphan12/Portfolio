import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: ${(props) => props.main ? '3.8rem' : '2.8rem'};
  line-height: ${(props) => props.main ? '4.6rem' : '3.6rem'};
  width: max-content;
  max-width: 100%;
  color: ${(props) => props.theme.colors.primary1};
  margin-bottom: 1.2rem;
  padding: ${(props) => props.main ? '3.2rem 0 0.8rem' : '0'};
  text-shadow: 0 1px 2px rgba(0,0,0,0.10);
  text-align: center;

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '3.2rem' : '2.6rem'};
    line-height: ${(props) => props.main ? '4rem' : '3.2rem'};
    margin-bottom: 0.8rem;
    padding: ${(props) => props.main ? '2.4rem 0 0.8rem' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: ${(props) => props.main ? '2.8rem' : '2.4rem'};
    line-height: ${(props) => props.main ? '3.6rem' : '2.8rem'};
    margin-bottom: 0.6rem;
    padding: ${(props) => props.main ? '1.2rem 0 0.4rem' : '0'};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 1.8rem;
  line-height: 3.2rem;
  font-weight: 300;
  padding-bottom: 2rem;
  color: ${(props) => props.theme.colors.primary2};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 1.7rem;
    line-height: 2.8rem;
    padding-bottom: 1.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    line-height: 2.4rem;
    padding-bottom: 1rem;
  }
`

export const SectionDivider = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, rgba(74,144,226,0.7) 0%, rgba(44,93,133,0.7) 100%);
  box-shadow: 0 2px 16px 0 rgba(74,144,226,0.10);
  backdrop-filter: blur(1.5px);
  opacity: 0.85;
  border: none;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 32px 0 24px 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 24px 0 16px 0;
  }
`

export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 2rem;
  line-height: 3.6rem;
  color: rgba(0, 0, 0, 0.75);

@media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 1.8rem;
    line-height: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`
export const SecondaryBtn = styled.button`
  color: #333;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 1.8rem 2.6rem;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 1.8rem;
  width: fit-content;
  margin-top: 3.2rem;
  margin-bottom: 8rem;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #F9F9F9;
    background: #333;
    border: 1px solid #333;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const ButtonBack = styled.div`
  width: ${({ alt }) => alt ? '150px' : '262px'};
  height: ${({ alt }) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
  color: #333;
  background:rgb(63, 135, 194);
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '184px'};
    height: ${({ alt }) => alt ? '52px' : '48px'};
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  }
`

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: white;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #4A90E2;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;  
  height: ${({ large }) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '32px' : '16px'};
  }
`
