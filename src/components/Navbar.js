import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useGlobalContext } from "../context";
import { RoomContext } from "../roomContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import BookingRoom from "./BookingRoom";

import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { IoLanguageSharp } from "react-icons/io5";
import { FaConciergeBell, FaBars, FaArrowUp } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiExitDoor } from "react-icons/gi";

import logoMiodowa from "../images/logo-Miodowa.png";
import polandFlag from "../images/poland-flag.png";
import englandFlag from "../images/england-flag.png";

const Navbar = ({ showMenu, setShowMenu, showBooking, setShowBooking }) => {
  const { openSubmenu, closeSubmenu } = useGlobalContext();
  const context = useContext(RoomContext);

  // const [showMenu, setShowMenu] = useState(false);

  const {
    handleTogglePolish,
    handleToggleEnglish,
    handleToggleLanguage,
    viewlanguage,
    polish,
  } = context;

  const togglePolishL = () => {
    handleTogglePolish();
    setShowMenu(false);
  };
  const toggleEnglishL = () => {
    handleToggleEnglish();
    setShowMenu(false);
  };

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
  // const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  // useEffect(() => {
  // closeSubmenu();
  // eslint-disable-next-line
  // }, [offset]);
  const pageHeight = window.document.body.offsetHeight - window.innerHeight;

  return (
    <>
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
              <NavLink
                to="/kontakt/formularzKontaktowy"
                activeClassName="active"
              >
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
              <NavLink
                to="/kontakt/formularzKontaktowy"
                activeClassName="active"
              >
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
        <BookingRoom
          showBooking={showBooking}
          setShowBooking={setShowBooking}
        />
        <button
          className={offset > 200 ? "upBtn" : "upBtn upBtnNone"}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <BsFillArrowUpSquareFill />
        </button>
      </Wrapper>
      <Wrapper2>
        <div className={!showMenu ? "main-nav" : "main-nav showMain-Nav"}>
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
          {polish ? (
            <div className="nav-list">
              <NavLink
                to="/"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                <p>strona główna</p>
              </NavLink>
              <NavLink
                to="/pokoje"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                <p>pokoje</p>
              </NavLink>
              <NavLink
                to="/oNas"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                <p>o nas</p>
              </NavLink>
              <NavLink
                to="/galeria"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                <p>galeria</p>
              </NavLink>
              <NavLink
                to="/uslugi"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                <p>usługi</p>
              </NavLink>
              <NavLink
                to="/kontakt/formularzKontaktowy"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                <p>kontakt</p>
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
                          onClick={toggleEnglishL}
                        />
                      </span>
                      <span>
                        <img
                          src={polandFlag}
                          alt="polandFlag"
                          onClick={togglePolishL}
                        />
                      </span>
                    </div>
                  </div>
                ) : null}
              </h5>
            </div>
          ) : (
            <div className="nav-list">
              <NavLink
                to="/"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                <p>home</p>
              </NavLink>
              <NavLink
                to="/pokoje"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                <p>rooms</p>
              </NavLink>
              <NavLink
                to="/oNas"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                <p>about us</p>
              </NavLink>
              <NavLink
                to="/galeria"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                <p>gallery</p>
              </NavLink>
              <NavLink
                to="/uslugi"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                <p>services</p>
              </NavLink>
              <NavLink
                to="/kontakt/formularzKontaktowy"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                <p>contact</p>
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
                          onClick={togglePolishL}
                        />
                      </span>
                      <span>
                        <img
                          src={englandFlag}
                          alt="englandFlag"
                          onClick={toggleEnglishL}
                        />
                      </span>
                    </div>
                  </div>
                ) : null}
              </h5>
            </div>
          )}
          <div className="menuSmall">
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
            {!showMenu ? (
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="nav-toggle"
              >
                <FaBars />
              </button>
            ) : (
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="nav-toggle"
              >
                <FaArrowUp />
              </button>
            )}
          </div>
        </div>
        <BookingRoom
          showBooking={showBooking}
          setShowBooking={setShowBooking}
        />
        <button
          className={offset > 200 ? "upBtn" : "upBtn upBtnNone"}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <BsFillArrowUpSquareFill />
        </button>
      </Wrapper2>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  height: 10vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
  @media screen and (max-width: 800px) {
    display: none;
  }
  .navbarToggleLanguage {
    width: 50%;
    height: 50%;
  }
  .navbarToggleLanguage-big {
    z-index: 99;
    position: fixed;
    font-size: 50px;
    color: var(--primaryColor);
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
    background-color: var(--navbarBg2);
    h2 {
      font-family: var(--buttonFont);
      margin-bottom: 5vh;
      color: var(--primaryColor);
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
    width: 70px;
    height: 70px;
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
    background: var(--navbarBg);
    border-bottom: 2px solid var(--bookBtnColor);
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
      border: 2px solid var(--bookBtnColor);
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
        /* color: var(--primaryColor); */
        color: var(--primaryColor);
        text-decoration: none;
        height: 100%;
        font-weight: 600;
        font-size: 1.1rem;
        font-family: "Signika Negative", sans-serif;
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
          /* color: rgb(185, 130, 93); */
        }
        :hover {
          color: var(--navbarColor);
        }
      }
      .iconLanguage {
        font-size: 1.3rem;
      }
    }
  }
  .navbarBg {
    transition: 0.5s;
  }
  .bookBtn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 5px;
    width: 12vw;
    background: transparent;
    color: var(--bookBtnColor2);
    border: 3px solid var(--secondaryColor);
    border-radius: 5px;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: "Signika Negative", sans-serif;
    cursor: pointer;
    transition: 0.5s;
    .bell {
      animation: bellRing 1s infinite alternate;
      @keyframes bellRing {
        100% {
          transform: scale(1.3);
        }
      }
    }
    :hover {
      background: var(--bookBtnColor);
      color: #fff;
    }
  }
  .upBtn {
    position: fixed;
    bottom: 7vh;
    right: 3vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--equipmentsBg);
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

const Wrapper2 = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }

  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  z-index: 990;
  overflow-x: hidden;
  overflow-y: auto;

  .navbarToggleLanguage {
    font-size: 1.8rem;
  }
  .navbarToggleLanguage-big {
    z-index: 99;
    position: fixed;
    font-size: 50px;
    color: var(--primaryColor);
    transition: 0.3s;
    @media (orientation: landscape) and (max-width: 800px) {
      margin-top: 50vh;
    }
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
    background-color: var(--navbarBg2);
    h2 {
      font-family: var(--buttonFont);
      margin-bottom: 5vh;
      color: var(--primaryColor);
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
  .main-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    color: var(--primaryColor);
    opacity: 1;
    transition: 0.7s;
    transform: translateY(-88vh);
    margin: 0 auto;
    z-index: 990;
    @media (orientation: landscape) and (max-width: 800px) {
      transform: translateY(-80vh);
    }
  }
  .showMain-Nav {
    transition: 0.7s;
    transform: translateY(0vh);
  }
  .menuSmall {
    margin: 0 auto;
    width: 100vw;
    padding: 0 5vw;
    height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5vh solid var(--bookBtnColor);
    background: transparent;
    @media (orientation: landscape) and (max-width: 800px) {
      height: 20vh;
    }
  }

  .nav-toggle {
    height: 10vh;
    border: none;
    background: transparent;
    font-size: 2rem;
    color: var(--primaryColor);
    color: var(--secondaryColor2);
    display: flex;
    align-items: center;
  }

  .logo-container {
    height: 20vh;
    padding: 15px 10vw;
    background: var(--logoBg);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 5px 5px;
    cursor: pointer;
    transition: 0.5s;
    .logo {
      width: 40vw;
    }
    @media (orientation: landscape) and (max-width: 800px) {
      display: none;
    }
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h5,
    a {
      color: var(--primaryColor);
      text-decoration: none;
      height: 100%;
      font-weight: 600;
      font-size: 1.4rem;
      font-family: "Signika Negative", sans-serif;
      margin: 1.8vh auto;
      padding: 0 1.2vw;
      text-transform: uppercase;
      transition: 0.4s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      &.active {
        color: var(--menu2Color);
        /* color: rgb(185, 130, 93); */
      }
      /* :hover {
        color: var(--secondaryColor2);
      } */

      .iconLanguage {
        font-size: 1.3rem;
      }
      @media (orientation: landscape) and (max-width: 800px) {
        margin: 1.5vh auto;
        font-size: 1.1rem;
      }
    }
    @media (orientation: landscape) and (max-width: 800px) {
      margin-top: 10vh;
    }
  }
  .bookBtn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 5px;
    width: 47vw;
    /* background: var(--bookBtnColor2); */
    background: var(--bookingBg);
    color: var(--bookBtnColor2);
    border: 3px solid var(--secondaryColor);
    border-radius: 5px;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: "Signika Negative", sans-serif;
    cursor: pointer;
    transition: 0.5s;
    .bell {
      animation: bellRing 1s infinite alternate;
      @keyframes bellRing {
        100% {
          transform: scale(1.3);
        }
      }
    }
    :hover {
      background: #ddd;
      color: var(--bookBtnColor);
    }
  }
  .upBtn {
    position: fixed;
    bottom: 7vh;
    right: 10vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--equipmentsBg);
    transition: 0.5s;
    z-index: 989;
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
