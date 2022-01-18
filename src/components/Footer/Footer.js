import React from 'react';
import { AiFillGithub, AiFillFile, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, BottomText } from './FooterStyles';

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href='tell:+16475250661'>(647) 525 - 0661</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href='mailto:mohamed_alyaly@outlook.com'>mohamed_alyaly@outlook.com</LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>If you scrolled this far, checkout my Socials and Resume</Slogan>
          </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/MohamedAly8" target="_blank">
        <AiFillGithub size="6rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mohamed-aly08/" target="_blank">
        <AiFillLinkedin size="6rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://drive.google.com/file/d/1hgkdrIbKQsLVoYhNcXZc88xxRHJ7Uefe/view?usp=sharing" target="_blank">
        <AiFillFile size="6rem"></AiFillFile>
      </SocialIcons>
      </SocialContainer>
        
        </SocialIconsContainer>
        <BottomText>
      Made with ♥ by Mohamed Aly
        </BottomText>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
