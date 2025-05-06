import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillGitlab } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, NavbarContent, Hamburger, MobileMenu } from './HeaderStyles';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <NavbarContent>
        <Div1>
          <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          textDecoration: 'none'
          }}>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <CgWebsite size="3rem" />
              <Span style={{marginLeft: "8px"}}>LP</Span>
            </div>
          </Link>
        </Div1>
        <Div2>
          <li>
            <Link href="#overview" legacyBehavior passHref>
              <NavLink onClick={() => setMenuOpen(false)}>Overview</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#experience" legacyBehavior passHref>
              <NavLink>Experience</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#projects" legacyBehavior passHref>
              <NavLink>Projects</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#tech" legacyBehavior passHref>
              <NavLink>Technologies</NavLink>
            </Link>
          </li>

        </Div2>

        <Div3>
          <SocialIcons href="https://gitlab.com/longphan084">
            <AiFillGitlab size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/longphan12">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/long-phan-1203t">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </Div3>
      </NavbarContent>
      
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <MobileMenu open={menuOpen}>
        <li>
          <Link href="#overview" legacyBehavior passHref>
            <NavLink onClick={() => setMenuOpen(false)}>Overview</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#experience" legacyBehavior passHref>
            <NavLink onClick={() => setMenuOpen(false)}>Experience</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects" legacyBehavior passHref>
            <NavLink onClick={() => setMenuOpen(false)}>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech" legacyBehavior passHref>
            <NavLink onClick={() => setMenuOpen(false)}>Technologies</NavLink>
          </Link>
        </li>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <SocialIcons href="https://gitlab.com/longphan084">
            <AiFillGitlab size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/longphan12">
            <AiFillGithub size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/long-phan-1203t">
            <AiFillLinkedin size="2rem" />
          </SocialIcons>
        </div>
      </MobileMenu>
    </Container>
  );
};

export default Header;
