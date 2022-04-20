import React from "react";
import CookieConsent from "react-cookie-consent";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

import { MdOutlineStar, MdMail } from "react-icons/md";
import {
  FaLongArrowAltRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

import logoMiodowa from "../images/icon.png";
import logoJarek from "../images/logoJarek.png";

const Footer = () => {
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <>
      <Wrapper className="footer">
        <div className="footerBg"></div>
        <div className="footerContainer">
          <div className="firstSection">
            <div className="logoContainer">
              <img className="logo" src={logoMiodowa} alt="logo" />
              <section>
                <h4>
                  HOTEL <br /> MIODOWA
                </h4>
                <div className="starsIcon">
                  <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar />
                </div>
              </section>
            </div>
            <p className="info">
              {polish
                ? "Dogodne położenie, luksusowe apartamenty, atrakcyjne ceny – Hotel Miodowa w Krakowie oferuje swoim Gościom idealne warunki na czas podróży służbowej, jak i na wyjazd turystyczny."
                : "Perfect location, luxurious apartments, attractive prices - Hotel Miodowa in Cracow offers for guests ideal conditions for a business trip as well as for a tourist trip."}
            </p>
          </div>
          <div className="secondSection">
            <h3>{polish ? "Przydatne Linki" : "Useful links"}</h3>
            <div className="links">
              <section>
                <NavLink to="/pokoje">
                  <FaLongArrowAltRight className="iconReact" />
                  {polish ? "Pokoje" : "Rooms"}
                </NavLink>
                <NavLink to="/oNas/oHotelu">
                  <FaLongArrowAltRight className="iconReact" /> Hotel
                </NavLink>
                <NavLink to="/oNas/oKrakowie">
                  <FaLongArrowAltRight className="iconReact" />{" "}
                  {polish ? "Kraków" : "Cracow"}
                </NavLink>
                <NavLink to="/uslugi/restauracja">
                  <FaLongArrowAltRight className="iconReact" />
                  {polish ? "Restauracja" : "Restaurant"}
                </NavLink>
                <NavLink to="/uslugi/transport&wycieczki">
                  <FaLongArrowAltRight className="iconReact" />{" "}
                  {polish ? "Transfery i Wycieczki" : "Transfers & Tours"}
                </NavLink>
              </section>
              <section>
                <NavLink to="/kontakt/faq">
                  <FaLongArrowAltRight className="iconReact" /> FAQ
                </NavLink>
                <NavLink to="/kontakt/regulamin">
                  <FaLongArrowAltRight className="iconReact" />{" "}
                  {polish ? "Regulamin" : "Regulations"}
                </NavLink>
                <NavLink to="/kontakt/rodo&cookies">
                  <FaLongArrowAltRight className="iconReact" /> RODO
                </NavLink>
              </section>
            </div>
          </div>
          <div className="thirdSection">
            <h3>{polish ? "Kontakt" : "Contact"}</h3>
            <div className="contactInfo">
              <p>
                <FaMapMarkerAlt className="iconReact" />
                {polish
                  ? "ul. Miodowa 51, 31-036 Kraków"
                  : "Miodowa 51 Street, 31-036 Cracow"}
              </p>
              <p>
                <FaPhoneAlt className="iconReact" /> +48 124467130
              </p>
              <p>
                <MdMail className="iconReact" /> rezerwacja@hotelmiodowa.pl
              </p>
              <a href="https://www.facebook.com/aparthotel.miodowa.14">
                <FaFacebook className="iconReact" /> hotel miodowa
              </a>
            </div>
          </div>
        </div>
        <h5 className="copyrights">
          <span className="logoJarek">
            <p>projekt i wykonanie</p>
            <a href="https://www.jarekjanas.com">
              <img src={logoJarek} alt="logo Jarosław Janas" />
            </a>{" "}
          </span>
          &copy; 2014 - {new Date().getFullYear()} Hotel Miodowa,{" "}
          {polish ? "Wszelkie Prawa Zastrzeżone" : "All Rights Reserved"}
        </h5>
      </Wrapper>
      <CookieConsent
        buttonText="Akceptuje"
        cookieName="myAwesomeCookieName2"
        className="cookieInfo"
        style={{
          background: "rgba(0,0,0, .8)",
          fontSize: "18px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0 20px",
          fontFamily: "Signika Negative",
        }}
        buttonStyle={{
          color: "white",
          fontSize: "18px",
          backgroundColor: "rgb(133, 88, 55)",
          padding: "10px",
          borderRadius: "5px",
          fontFamily: "Signika Negative",
        }}
        expires={7}
      >
        {polish ? (
          <>
            Strona korzysta z plików cookies. Pozostając na niej wyrażasz zgodę
            na ich używanie. <br /> Ze szczegółowymi informacjami dotyczącymi
            cookies na tej stronie można się zapoznać tutaj:
            <NavLink to="/kontakt/rodo&cookies" className="cookieLink">
              Polityka Prywatności
            </NavLink>
          </>
        ) : (
          <>
            The website uses cookies. By staying here, you consent to using
            them. <br /> About information on cookies on this page you can read
            here:
            <NavLink to="/kontakt/rodo&cookies" className="cookieLink">
              Privacy Policy
            </NavLink>
          </>
        )}
        .
      </CookieConsent>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 70vh;
  margin-top: 20vh;
  border-top: 2px solid var(--bookBtnColor);
  position: relative;
  overflow: hidden;
  ///
  color: #fff;
  @media screen and (max-width: 800px) {
    height: auto;
    min-height: 160vh;
  }
  @media (orientation: landscape) and (max-width: 800px) {
    min-height: 220vh;
  }
  .copyrights {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: var(--footerBgColor);
    width: 100%;
    height: 10%;
    /* opacity: 0.6; */
    /* opacity: 0.8; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--buttonFont);
    font-size: 1rem;
    letter-spacing: 2px;
    z-index: 1;
    text-align: center;
    @media screen and (max-width: 800px) {
      height: 12%;
      padding: 5% 2vw 0;
      align-items: flex-start;
    }
  }
  .logoJarek {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      width: 25px;
      height: 25px;
      margin-left: 10px;
      img {
        width: 100%;
        height: 100%;
        transition: 0.3s;
        opacity: 0.8;
        :hover {
          filter: invert(100%);
        }
      }
    }
    p {
      font-size: 12px;
      letter-spacing: 1px;
    }
    @media screen and (max-width: 800px) {
      top: 80%;
      left: 3%;
    }
  }

  .footerContainer {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5vw;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      height: 150vh;
    }
    @media (orientation: landscape) and (max-width: 800px) {
      height: 210vh;
    }
    .firstSection {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 30%;
      padding: 0 5%;
      @media screen and (max-width: 800px) {
        width: 90%;
        height: 40vh;
      }
    }
    .info {
      margin: 5vh auto;
      font-family: var(--buttonFont);
      font-size: 1rem;
      letter-spacing: 1px;
      line-height: 1.5;
      text-align: center;
      @media screen and (max-width: 800px) {
        margin: 3vh auto;
      }
    }
    h3 {
      /* color: var(--primaryColor); */
      color: #fff;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-family: var(--buttonFont);
      margin-bottom: 6vh;
      @media screen and (max-width: 800px) {
        margin-bottom: 3vh;
      }
    }
    .secondSection {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: 80%;
      width: 40%;
      margin-left: 5vw;
      margin-top: 15vh;
      margin: 15vh 5vw 0;
      @media screen and (max-width: 800px) {
        height: 40vh;
        width: 90%;
        margin: 5vh auto 0;
      }
      @media (orientation: landscape) and (max-width: 800px) {
        margin: 15vh auto 15vh;
      }
      .links {
        display: flex;
        justify-content: flex-start;
        align-items: space-around;
        width: 100%;
        section {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          width: 50%;
          a,
          p {
            margin: 1vh 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-family: var(--buttonFont);
            font-size: 1.1rem;
            color: white;
            text-decoration: none;
            transition: 0.3s;
            .iconReact {
              color: var(--secondaryColor2);
              margin-right: 10px;
            }
            :hover {
              color: var(--secondaryColor2);
            }
          }
          a {
            cursor: pointer;
          }
        }
      }
    }
    .thirdSection {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 40%;
      height: 80%;
      margin-top: 15vh;
      @media screen and (max-width: 800px) {
        height: 40vh;
        width: 90%;
        margin-top: 5vh;
        margin-bottom: 10vh;
      }
      .contactInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        p,
        a {
          margin: 2vh 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-family: var(--buttonFont);
          font-size: 1.1rem;
          transition: 0.3s;
          color: white;
          text-decoration: none;
          .iconReact {
            color: var(--secondaryColor2);
            margin-right: 10px;
          }
          :hover {
            color: var(--secondaryColor2);
          }
        }
      }
    }
  }
  .logoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h4 {
        /* color: var(--primaryColor); */
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-family: var(--titleFont);
        text-align: center;
      }
      div {
        margin-top: 5px;
        font-size: 1.5rem;
        color: var(--secondaryColor2);
      }
    }
  }
  .logo {
    filter: grayscale(0.6);
    width: 7vw;
    margin-right: 20px;
    @media screen and (max-width: 800px) {
      width: 20vw;
    }
  }
`;

export default Footer;
