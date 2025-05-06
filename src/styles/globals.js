import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 75%; /* Increased from 62.5% to make everything bigger */
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.8rem; /* Increased from 1.6rem */
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    transition: all 0.3s ease;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.primary1};
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary1};
    transition: color 0.3s ease;
    font-weight: 500;

    &:hover {
      color: ${props => props.theme.colors.accent1};
    }
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    color: ${props => props.theme.colors.primary1};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  section {
    padding: 4rem 0;
  }

  p {
    color: ${props => props.theme.colors.primary1};
    opacity: 0.95;
  }

  /* Smooth scrolling for the whole page */
  * {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background1};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.background3};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.accent1};
  }
`;

export default GlobalStyles;