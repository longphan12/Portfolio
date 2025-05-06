import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: ${(props) => props.theme.colors.background1};
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.10);
`;

export const NavbarContent = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0.5rem auto;
  border-radius: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  min-width: 180px;
`;

export const Div2 = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 5rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    gap: 2rem;
  }
`;

export const Div3 = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 180px;
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.5rem;
  line-height: 28px;
  color: ${(props) => props.theme.colors.primary1};
  transition: 0.4s ease;
  font-weight: 400;
  &:hover {
    color: ${(props) => props.theme.colors.accent1};
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.1rem;
  line-height: 28px;
  color: ${(props) => props.theme.colors.primary1};
  cursor: pointer;
  transition: 0.3s ease;
  font-weight: 400;
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${(props) => props.theme.colors.accent1};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
  color: ${(props) => props.theme.colors.primary1};
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: ${(props) => props.theme.colors.background3};
    color: ${(props) => props.theme.colors.accent1};
    transform: scale(1.2);
    cursor: pointer;
  }
`

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1100;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 2rem;
  }
  div {
    width: 30px;
    height: 3px;
    background: ${(props) => props.theme.colors.primary1};
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 2px;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0; left: 0; right: 0;
    background: ${(props) => props.theme.colors.background1};
    padding: 2rem 1rem;
    z-index: 1050;
    align-items: center;
    gap: 2rem;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.10);
  }
`;