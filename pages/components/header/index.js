import Link from 'next/link'
import React from 'react'
import { Wrapper, SectionWrapper, Logo, LinkItem, Links, MobileMenu } from './headerElements'
import { ImCross } from 'react-icons/im';
import { HiMenuAlt3 } from "react-icons/hi";


const Header = () => {
    return (
      <Wrapper>
        <SectionWrapper>
          <Logo>
            <Link href="/">
              <a>Movium</a>
            </Link>
                </Logo>
                
                <MobileMenu>
                    <Logo>
                        <HiMenuAlt3 />
                    </Logo>
                </MobileMenu>

          <Links>
            <LinkItem>
              <Link href="/movies">
                <a>Movies</a>
              </Link>
            </LinkItem>

            <LinkItem>
              <Link href="/tvshows">
                <a>Tv Shows</a>
              </Link>
            </LinkItem>
          </Links>
        </SectionWrapper>
      </Wrapper>
    );
}

export default Header



