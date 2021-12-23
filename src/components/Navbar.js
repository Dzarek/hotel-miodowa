import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import BookingRoom from "./BookingRoom";

import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { IoLanguageSharp } from "react-icons/io5";
import { FaConciergeBell } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import logoMiodowa from "../images/logo-Miodowa.png";

import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  const [offset, setOffset] = useState(0);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  useEffect(() => {
    closeSubmenu();
    // eslint-disable-next-line
  }, [offset]);
  const pageHeight = window.document.body.offsetHeight - window.innerHeight;
  return (
    <Wrapper>
      <div
        className={offset === 0 ? "navbar" : "navbar navbarBg"}
        onMouseOver={handleSubmenu}
      >
        <div
          onClick={() => {
            scroll.scrollToTop();
          }}
          className={
            offset !== pageHeight
              ? "logo-container"
              : "logo-container displayNONE"
          }
        >
          <img className="logo" src={logoMiodowa} alt="logo" />
        </div>
        {/* {!showBooking && ( */}
        <button
          onClick={() => {
            setShowBooking(true);
          }}
          className="bookBtn"
          style={!showBooking ? { opacity: 1 } : { opacity: 0 }}
        >
          <FaConciergeBell className="bell" />
          <h3>Rezerwacja</h3>{" "}
        </button>
        {/* // )} */}
        <div className="navbar-links">
          <NavLink to="/" activeClassName="active">
            <p>strona główna</p>
          </NavLink>
          <NavLink to="pokoje" activeClassName="active">
            <p onMouseOver={displaySubmenu} className="link-btn">
              pokoje
            </p>
            <TiArrowSortedDown />
          </NavLink>
          <NavLink to="oNas" activeClassName="active">
            <p onMouseOver={displaySubmenu} className="link-btn">
              o nas
            </p>
            <TiArrowSortedDown />
          </NavLink>
          <NavLink to="/galeria" activeClassName="active">
            galeria
          </NavLink>
          <NavLink to="uslugi" activeClassName="active">
            <p onMouseOver={displaySubmenu} className="link-btn">
              usługi
            </p>
            <TiArrowSortedDown />
          </NavLink>
          <NavLink to="kontakt" activeClassName="active">
            <p onMouseOver={displaySubmenu} className="link-btn">
              kontakt
            </p>
            <TiArrowSortedDown />
          </NavLink>
          <h5 className="iconLanguage">
            <IoLanguageSharp />
          </h5>
        </div>
      </div>
      <BookingRoom showBooking={showBooking} setShowBooking={setShowBooking} />
      <button
        className={offset > 200 ? "upBtn" : "upBtn upBtnNone"}
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <BsFillArrowUpSquareFill />
      </button>
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
    /* background: var(--navbarBgColor); */
    border-bottom: 2px solid var(--bookBtnColor);
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
      transition: 0.5s;
      .logo {
        width: 130px;
      }
    }
    .displayNONE {
      transform: translateY(-100%);
    }
    .navbar-links {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      h5,
      a {
        color: var(--primaryColor);
        text-decoration: none;
        height: 100%;
        font-weight: 600;
        font-size: 1.1rem;
        font-family: "Signika Negative", sans-serif;
        /* margin: 0 1.2vw; */
        padding: 0 1.2vw;
        text-transform: uppercase;
        transition: 0.4s;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 3px;
        }
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
    /* background: var(--secondaryColor2); */
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
      .bell {
        animation: bellRing 1s infinite alternate;
        @keyframes bellRing {
          100% {
            transform: scale(1.4);
          }
        }
      }
    }
  }
  .upBtn {
    position: fixed;
    bottom: 7vh;
    right: 3vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--primaryColor);
    transition: 0.5s;
    cursor: pointer;
    :hover {
      color: var(--secondaryColor2);
    }
  }
  .upBtnNone {
    opacity: 0;
  }
`;

export default Navbar;
