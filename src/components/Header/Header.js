import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillGitlab } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" style={{
      display: 'flex',
      alignItems: 'center',
      color: '#333333',
      textDecoration: 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
          <CgWebsite size="3rem" />
          <Span style={{marginLeft: "8px"}}>LP</Span>
        </div>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#overview" legacyBehavior passHref>
          <NavLink>Overview</NavLink>
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
  </Container>
);

export default Header;
