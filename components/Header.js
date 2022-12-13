import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

import { SearchNormal, TextalignJustifycenter } from "iconsax-react";
import { useRouter } from "next/router";

const container = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1.1,
      ease: "easeInOut",
    },
  },
};

const Header = ({ toggle }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;

  const changeNavbar = () => {
    if (window.scrollY >= 90) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", changeNavbar);
  });

  return (
    <Wrapper>
      <div className={hasScrolled ? `header header_scrolled` : `header`}>
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="container"
        >
          <motion.h1 className="logo">
            <Link href="/">
              <a className="logo-main">Movium</a>
            </Link>
          </motion.h1>
          <ul className="nav-links">
            <li>
              <Link href="/">
                <a className={currentRoute === "/" ? "active" : "not_active"}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/movies">
                <a
                  className={
                    currentRoute === "/movies" ? "active" : "not_active"
                  }
                >
                  Movies
                </a>
              </Link>
            </li>
            <li>
              <Link href="/show">
                <a
                  className={currentRoute === "/show" ? "active" : "not_active"}
                >
                  Tv Shows
                </a>
              </Link>
            </li>
          </ul>

          <div className="container-icons">
            <SearchNormal
              size="32"
              color="#d9e3f0"
              className="icons search"
              onClick={() => router.push(`/search`)}
            />
            <TextalignJustifycenter
              size="32"
              color="#d9e3f0"
              className="icons ham"
              onClick={toggle}
            />
          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  transition: all 0.35s ease-in-out;

  .header {
    height: 80px;
    position: fixed;
    z-index: 999;
    width: 100%;

    -webkit-transition: all ease-in-out 0.35s;
    -moz-transition: all ease-in-out 0.35s;
    -o-transition: all ease-in-out 0.35s;
    transition: all ease-in-out 0.35s;

    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }

  .header_scrolled {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(120px);
  }

  .container {
    max-width: 1234px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    height: 80px;
  }

  .logo {
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    color: #2547fc;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  .logo-main {
    text-decoration: none;
    color: #2547fc;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;

    @media (max-width: 768px) {
      display: none;
    }
  }

  li {
    padding: 10px;
    margin: 0 5px;

    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    cursor: pointer;
    transition: all 0.35s ease-in-out;

    @media (max-width: 768px) {
      font-size: 14px;
      margin: 0 0 0 3px;
      padding: 5px;
    }
  }

  .active {
    text-decoration: none;
    color: #2547fc;
    transition: all 0.35s ease-in-out;
  }

  .not_active {
    text-decoration: none;
    color: #969696;
    transition: all 0.35s ease-in-out;
  }

  .container-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: all 0.35s ease-in-out;
  }

  .icons {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(120px);
    border: 1px solid #c9c9c9;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
  }

  .ham {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
