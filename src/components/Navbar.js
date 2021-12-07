import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

import { IoLanguageSharp } from "react-icons/io5";

import logoMiodowa from "../images/logo-Miodowa.png";

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <Wrapper>
      <div className={offset === 0 ? "navbar" : "navbar navbarBg"}>
        <div className="logo-container">
          <img className="logo" src={logoMiodowa} alt="logo" />
        </div>
        <div className="navbar-links">
          <Link
            to="/"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-100}
          >
            Strona Główna
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-100}
          >
            Pokoje
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-100}
          >
            O nas
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-100}
          >
            Galeria
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-100}
          >
            Usługi
          </Link>
          {/* <Link
            to="gallery"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-100}
          >
            FAQ
          </Link> */}
          {/* <Link
            to="gallery"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-100}
          >
            RODO
          </Link> */}
          <Link
            to="gallery"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-100}
          >
            Kontakt
          </Link>
          <h5 className="iconLanguage">
            <IoLanguageSharp />
          </h5>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  height: 10vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
  .navbar {
    margin: 0 auto;
    position: fixed;
    height: 13vh;
    width: 100vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 5vw 0 10vw;
    align-items: center;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.9);
    .logo-container {
      height: 22vh;
      padding: 20px 20px 10px;
      background: #ddd;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 5px 5px;
      transform: translateY(-100%);
      animation: logoShow 0.8s 1s linear 1 forwards;
      @keyframes logoShow {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(0%);
        }
      }
      .logo {
        width: 130px;
      }
    }
    .navbar-links {
      display: flex;
      justify-content: center;
      align-items: center;
      h5,
      a {
        font-weight: 600;
        font-size: 1.1rem;
        font-family: "Barlow Semi Condensed", sans-serif;
        font-family: "Signika Negative", sans-serif;
        margin: 0 1.5vw;
        text-transform: uppercase;
        transition: 0.4s;
        cursor: pointer;
        &.active {
          color: var(--secondaryColor);
        }
        :hover {
          color: var(--secondaryColor);
        }
      }
      .iconLanguage {
        font-size: 1.3rem;
      }
    }
  }
  .navbarBg {
    /* background: var(--navbarBgColor); */
    transition: 0.5s;
  }
`;

export default Navbar;
