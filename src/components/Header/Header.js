import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" style={{
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      textDecoration: 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
          <DiCssdeck size="3rem" />
          <Span style={{marginLeft: "8px"}}>Portfolio</Span>
        </div>
      </Link>
    </Div1>

    <Div2>
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
      <li>
        <Link href="#about" legacyBehavior passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
