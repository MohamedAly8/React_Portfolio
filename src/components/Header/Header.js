import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillFile  } from 'react-icons/ai';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { TiCode } from 'react-icons/ti';

import { Container, Div1, Div2, Div3, NavLink, NavProductsIcon, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
        <TiCode size="3rem" /> <Span>Mohamed Aly</Span>
        </a>
      </Link>
    </Div1>

    <Div2>

      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/MohamedAly8" target="_blank">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mohamed-aly08/" target="_blank">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://drive.google.com/file/d/1hgkdrIbKQsLVoYhNcXZc88xxRHJ7Uefe/view?usp=sharing" target="_blank">
        <HiOutlineNewspaper size="3rem"></HiOutlineNewspaper>
      </SocialIcons>
    </Div3>
  </Container>
    );

export default Header;
