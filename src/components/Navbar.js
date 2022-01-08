import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import BookingRoom from "./BookingRoom";

import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { IoLanguageSharp } from "react-icons/io5";
import { FaConciergeBell } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiExitDoor } from "react-icons/gi";
import logoMiodowa from "../images/logo-Miodowa.png";

import { useGlobalContext } from "../context";
import { useContext } from "react";
import { RoomContext } from "../roomContext";
import polandFlag from "../images/poland-flag.png";
import englandFlag from "../images/england-flag.png";

const Navbar = () => {
  const { openSubmenu, closeSubmenu } = useGlobalContext();
  const context = useContext(RoomContext);
  const {
    // handleToggle,
    handleTogglePolish,
    handleToggleEnglish,
    handleToggleLanguage,
    // isOpen,
    viewlanguage,
    polish,
  } = context;

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
        <button
          onClick={() => {
            setShowBooking(true);
          }}
          className="bookBtn"
          style={!showBooking ? { opacity: 1 } : { opacity: 0 }}
        >
          <FaConciergeBell className="bell" />
          <h3>{polish ? "Rezerwacja" : "Reservation"}</h3>{" "}
        </button>
        {polish ? (
          <div className="navbar-links">
            <NavLink to="/" activeClassName="active">
              <p>strona główna</p>
            </NavLink>
            <NavLink to="/pokoje" activeClassName="active">
              <p onMouseOver={displaySubmenu} className="link-btn">
                pokoje
              </p>
              <TiArrowSortedDown />
            </NavLink>
            <NavLink to="/oNas" activeClassName="active">
              <p onMouseOver={displaySubmenu} className="link-btn">
                o nas
              </p>
              <TiArrowSortedDown />
            </NavLink>
            <NavLink to="/galeria" activeClassName="active">
              galeria
            </NavLink>
            <NavLink to="/uslugi" activeClassName="active">
              <p onMouseOver={displaySubmenu} className="link-btn">
                usługi
              </p>
              <TiArrowSortedDown />
            </NavLink>
            <NavLink to="/kontakt/formularzKontaktowy" activeClassName="active">
              <p onMouseOver={displaySubmenu} className="link-btn">
                kontakt
              </p>
              <TiArrowSortedDown />
            </NavLink>
            <h5 className="iconLanguage">
              {viewlanguage ? (
                <GiExitDoor
                  className="navbarToggleLanguage-big"
                  onClick={handleToggleLanguage}
                />
              ) : (
                <IoLanguageSharp
                  className="navbarToggleLanguage"
                  onClick={handleToggleLanguage}
                />
              )}
              {viewlanguage ? (
                <div className="language-change">
                  {polish ? <h2>Zmiana Języka</h2> : <h2>Change Language</h2>}
                  <div className="language-change-items">
                    <span>
                      <img
                        src={englandFlag}
                        alt="englandFlag"
                        onClick={handleToggleEnglish}
                      />
                    </span>
                    <span>
                      <img
                        src={polandFlag}
                        alt="polandFlag"
                        onClick={handleTogglePolish}
                      />
                    </span>
                  </div>
                </div>
              ) : null}
            </h5>
          </div>
        ) : (
          <div className="navbar-links">
            <NavLink to="/" activeClassName="active">
              <p>home</p>
            </NavLink>
            <NavLink to="/pokoje" activeClassName="active">
              <p onMouseOver={displaySubmenu} className="link-btn">
                rooms
              </p>
              <TiArrowSortedDown />
            </NavLink>
            <NavLink to="/oNas" activeClassName="active">
              <p onMouseOver={displaySubmenu} className="link-btn">
                about us
              </p>
              <TiArrowSortedDown />
            </NavLink>
            <NavLink to="/galeria" activeClassName="active">
              gallery
            </NavLink>
            <NavLink to="/uslugi" activeClassName="active">
              <p onMouseOver={displaySubmenu} className="link-btn">
                services
              </p>
              <TiArrowSortedDown />
            </NavLink>
            <NavLink to="/kontakt/formularzKontaktowy" activeClassName="active">
              <p onMouseOver={displaySubmenu} className="link-btn">
                contact
              </p>
              <TiArrowSortedDown />
            </NavLink>
            <h5 className="iconLanguage">
              {viewlanguage ? (
                <GiExitDoor
                  className="navbarToggleLanguage-big"
                  onClick={handleToggleLanguage}
                />
              ) : (
                <IoLanguageSharp
                  className="navbarToggleLanguage"
                  onClick={handleToggleLanguage}
                />
              )}
              {viewlanguage ? (
                <div className="language-change">
                  {polish ? <h2>Zmiana Języka</h2> : <h2>Change Language</h2>}
                  <div className="language-change-items">
                    <span>
                      <img
                        src={polandFlag}
                        alt="polandFlag"
                        onClick={handleTogglePolish}
                      />
                    </span>
                    <span>
                      <img
                        src={englandFlag}
                        alt="englandFlag"
                        onClick={handleToggleEnglish}
                      />
                    </span>
                  </div>
                </div>
              ) : null}
            </h5>
          </div>
        )}
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
  .navbarToggleLanguage {
    width: 50%;
    height: 50%;
    /* padding: 20px; */
  }
  .navbarToggleLanguage-big {
    z-index: 99;
    position: fixed;
    font-size: 50px;
    color: white;
    transition: 0.3s;
  }
  .language-change {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.9);
    h2 {
      font-family: var(--buttonFont);
      margin-bottom: 5vh;
      color: white;
    }
  }

  .language-change-items {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin: 0 2vw;
    }
  }

  .language-change img {
    text-align: center;
    margin: 0px auto;
    cursor: pointer;
    filter: saturate(0.5);
    border-radius: 5px;
    width: 50px;
    height: 50px;
  }

  .language-change img:hover {
    filter: saturate(0.9);
  }

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
          color: var(--secondaryColor2);
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
