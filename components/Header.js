import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

import { Notification, SearchNormal } from "iconsax-react";

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
    if (window.scrollY > -90) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <Wrapper className={`${hasScrolled ? `navbar active` : `navbar`}`}>
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
          <SearchNormal size="32" color="#697689" className="icons" />

          <Notification size="32" color="#697689" className="icons" />
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 80px;
  position: fixed;

  .active {
    background: linear-gradient(
      180deg,
      #9f9f9f 0%,
      rgba(217, 217, 217, 0) 100%
    );
    backdrop-filter: blur(120px);
  }

  -webkit-transition: all ease-out 0.5s;
  -moz-transition: all ease-out 0.5s;
  -o-transition: all ease-out 0.5s;
  transition: all ease-out 0.5s;

  .container {
    max-width: 1234px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
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
    /* identical to box height */

    color: #000000;
  }

  a {
    text-decoration: none;
    color: black;
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
