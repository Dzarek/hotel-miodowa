import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

import { IoLanguageSharp } from "react-icons/io5";
import { FaConciergeBell } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

import logoMiodowa from "../images/logo-Miodowa.png";

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <Wrapper>
      <div className={offset === 0 ? "navbar" : "navbar navbarBg"}>
        <div
          onClick={() => {
            scroll.scrollToTop();
          }}
          className="logo-container"
        >
          <img className="logo" src={logoMiodowa} alt="logo" />
        </div>
        <button
          onClick={() => {
            setShowBooking(true);
          }}
          className="bookBtn"
        >
          <FaConciergeBell />
          <h3>Rezerwacja</h3>{" "}
        </button>
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
            <TiArrowSortedDown />
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
            <TiArrowSortedDown />
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
            <TiArrowSortedDown />
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-100}
          >
            Kontakt
            <TiArrowSortedDown />
          </Link>
          <h5 className="iconLanguage">
            <IoLanguageSharp />
          </h5>
        </div>
      </div>

      <div className={showBooking ? "bookRoom showBookRoom" : "bookRoom"}>
        <h3>Rezerwacja</h3>
        <button
          onClick={() => {
            setShowBooking(false);
          }}
        >
          zamknij
        </button>
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
    padding: 0 3vw 0 10vw;
    align-items: center;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.85);
    /* background: #111; */
    .logo-container {
      height: 22vh;
      padding: 20px 20px 10px;
      background: #ddd;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 5px 5px;
      cursor: pointer;

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
        font-family: "Signika Negative", sans-serif;
        margin: 0 1.2vw;
        text-transform: uppercase;
        transition: 0.4s;
        cursor: pointer;
        display: flex;
        align-items: center;
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
  .bookBtn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 10px;
    width: 12vw;
    background: var(--bookBtnColor);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: "Signika Negative", sans-serif;
    cursor: pointer;
    transition: 0.5s;
    :hover {
      background: #ddd;
      color: var(--bookBtnColor);
    }
  }
  .bookRoom {
    width: 30vw;
    height: 50vh;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 5px 0 0 5px;
    color: #111;
    transition: 0.4s;
    transform: translateX(100%);
    position: fixed;
    top: 25%;
    right: 0;
  }
  .showBookRoom {
    transform: translateX(0%);
    transition: 0.4s;
  }
`;

export default Navbar;
