import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillGitlab, AiFillMail, AiFillPhone } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LinkTitle style={{ marginRight: '8px', marginBottom: '0px', fontSize: '1.2rem'}}>Call</LinkTitle>
            <AiFillPhone size="20px" />
          </div>
          <LinkItem href="tel:214-457-3220">214-457-3220</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LinkTitle style={{ marginRight: '8px', marginBottom: '0px', fontSize: '1.2rem'}}>Email</LinkTitle>
            <AiFillMail size="20px" />
          </div>
          <LinkItem href="mailto:longphan084@gmail.com">longphan084@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
        <SocialIcons href="https://gitlab.com/longphan084">
          <AiFillGitlab size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/longphan12">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/long-phan-1203t">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
