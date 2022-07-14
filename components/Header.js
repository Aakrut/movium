import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

import { Notification } from "iconsax-react";

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

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

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
            <Link href="/">Movium</Link>
          </motion.h1>
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/movies">Movies</Link>
            </li>
            <li>
              <Link href="/series">Series</Link>
            </li>
          </ul>

          <div className="container-icons">
            <Notification size="32" color="#697689" className="icons" />
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

    -webkit-transition: all ease-out 0.5s;
    -moz-transition: all ease-out 0.5s;
    -o-transition: all ease-out 0.5s;
    transition: all ease-out 0.5s;

    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }

  .header_scrolled {
    background: rgba(0, 0, 0, 0.6);
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
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;
  }

  li {
    padding: 10px;
    margin: 0 5px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .container-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .icons {
    background: #d9d9d9;
    border: 1px solid #c9c9c9;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
  }
`;
