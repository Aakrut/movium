import React from "react";
import styled from "styled-components";
import { CloseSquare } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = ({ toggle, isOpen }) => {

    const router = useRouter();
    const currentRoute = router.pathname;

  return (
    <>
      <SideBarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseSquare size="32" color="#d9e3f0" />
        </Icon>

        <SideWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle}>
              <Link href="/">
                <a className={currentRoute === "/" ? "active" : "not_active"}>
                  Home
                </a>
              </Link>
            </SidebarLink>

            <SidebarLink onClick={toggle}>
              <Link href="/movies">
                <a
                  className={
                    currentRoute === "/movies" ? "active" : "not_active"
                  }
                >
                  Movies
                </a>
              </Link>
            </SidebarLink>

            <SidebarLink onClick={toggle}>
              <Link href="/show">
                <a className={currentRoute === "/show" ? "active" : "not_active"}>
                  Tv Shows
                </a>
              </Link>
            </SidebarLink>
          </SidebarMenu>
        </SideWrapper>
      </SideBarContainer>
    </>
  );
};

export default Sidebar;

const SideBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  background: rgba(0, 0, 0, 0.4);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  color: white;
  
  padding: 5px 10px;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 964px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SideWrapper = styled.div`
  color: #fff;
`;

const SidebarLink = styled.ul`
  .active {
    text-decoration: none;
    color: #2547fc;
    transition: all 0.35s ease-in-out;
  }

  .not_active {
    text-decoration: none;
    color: white;
    transition: all 0.35s ease-in-out;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  color: white;
  cursor: pointer;
  font-family: "Manrope", sans-serif;
  &:hover {
    color: #7aff74;
  }
`;
