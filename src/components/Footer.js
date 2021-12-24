import React from "react";
import styled from "styled-components";

import { MdOutlineStar, MdMail } from "react-icons/md";
import {
  FaLongArrowAltRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

import logoMiodowa from "../images/icon.png";

const Footer = () => {
  return (
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
            Dogodne położenie, luksusowe apartamenty, atrakcyjne ceny – Hotel
            Miodowa w Krakowie oferuje swoim Gościom idealne warunki na czas
            podróży służbowej, jak i na wyjazd turystyczny.
          </p>
        </div>
        <div className="secondSection">
          <h3>Przydatne Linki</h3>
          <div className="links">
            <section>
              <p>
                <FaLongArrowAltRight className="iconReact" /> Pokoje
              </p>
              <p>
                <FaLongArrowAltRight className="iconReact" /> Hotel
              </p>
              <p>
                <FaLongArrowAltRight className="iconReact" /> Kraków
              </p>
              <p>
                <FaLongArrowAltRight className="iconReact" /> Restauracja
              </p>
              <p>
                <FaLongArrowAltRight className="iconReact" /> Transfery i
                Wycieczki
              </p>
            </section>
            <section>
              <p>
                <FaLongArrowAltRight className="iconReact" /> FAQ
              </p>
              <p>
                <FaLongArrowAltRight className="iconReact" /> Regulamin
              </p>
              <p>
                <FaLongArrowAltRight className="iconReact" /> RODO
              </p>
              <p>
                <FaLongArrowAltRight className="iconReact" /> Polityka
                Prywatności
              </p>
            </section>
          </div>
        </div>
        <div className="thirdSection">
          <h3>Kontakt</h3>
          <div className="contactInfo">
            <p>
              <FaMapMarkerAlt className="iconReact" /> ul. Miodowa 51, 31-036
              Kraków
            </p>
            <p>
              <FaPhoneAlt className="iconReact" /> +48 124467130
            </p>
            <p>
              <MdMail className="iconReact" /> rezerwacja@hotelmiodowa.pl
            </p>
            <p>
              <FaFacebook className="iconReact" /> hotel miodowa
            </p>
          </div>
        </div>
      </div>
      <h5 className="copyrights">
        &copy; {new Date().getFullYear()} Hotel Miodowa, Wszelkie Prawa
        Zastrzeżone
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 70vh;
  margin-top: 20vh;
  border-top: 2px solid var(--bookBtnColor);
  position: relative;
  overflow: hidden;
  .copyrights {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bookBtnColor);
    width: 100%;
    height: 10%;
    opacity: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--buttonFont);
    font-size: 1rem;
    letter-spacing: 2px;
    z-index: 1;
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
    .firstSection {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 30%;
      padding: 0 5%;
    }
    .info {
      margin: 5vh auto;
      font-family: var(--buttonFont);
      font-size: 1rem;
      letter-spacing: 1px;
      line-height: 1.5;
      text-align: center;
    }
    h3 {
      color: var(--primaryColor);
      text-transform: uppercase;
      font-size: 1.5rem;
      font-family: var(--buttonFont);
      margin-bottom: 6vh;
      /* text-align: center; */
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
      /* padding: 0 5%; */
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
          p {
            margin: 1vh 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-family: var(--buttonFont);
            font-size: 1.1rem;
            transition: 0.3s;
            cursor: pointer;
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
    .thirdSection {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 40%;
      height: 80%;
      margin-top: 15vh;
      .contactInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        p {
          margin: 2vh 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-family: var(--buttonFont);
          font-size: 1.1rem;
          transition: 0.3s;
          cursor: pointer;
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
        color: var(--primaryColor);
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
    /* position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-80%);
    z-index: 1; */
    filter: grayscale(1);
    width: 7vw;
    margin-right: 20px;
  }
`;

export default Footer;
