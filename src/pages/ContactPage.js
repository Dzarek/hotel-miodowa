import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import MyForm from "../components/MyForm";
import MyForm2 from "../components/MyForm2";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

import { MdMail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;

  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 800;
  return (
    <Wrapper>
      <div className="title">
        <h1>
          <FaPhoneAlt />
        </h1>
        <h2>
          {" "}
          <MdMail />
        </h2>

        <h3>
          <FaMapMarkerAlt />
        </h3>

        <h2 data-aos="fade-up">{polish ? "Kontakt" : "Contact"}</h2>
        <h3>
          <FaMapMarkerAlt />
        </h3>
        <h2>
          <MdMail />
        </h2>
        <h1>
          <FaPhoneAlt />
        </h1>
      </div>
      <div className="contactContent">
        <section className="form">
          {/* <MyForm polish={polish} /> */}
          <MyForm2 />
        </section>
        <section className="social">
          <div data-aos="fade-left" className="adressPhoneEmail">
            <span>
              <FaMapMarkerAlt />
              {polish ? (
                <p>ul. Miodowa 51, 31-036 Kraków</p>
              ) : (
                <p>Miodowa 51 Street, 31-036 Cracow</p>
              )}
            </span>
            <span>
              <FaPhoneAlt />
              {!isMobile ? (
                <p>+48 12 4467130, +48 508 373 246</p>
              ) : (
                <p>
                  +48 12 4467130, <br /> +48 508 373 246
                </p>
              )}
            </span>
            <span>
              <MdMail />
              <p>rezerwacja@hotelmiodowa.pl</p>
            </span>
          </div>
          <div className="bankDetails">
            <h2>Bank</h2>
            <p>EKO-TEST Szczakowa Sp z.o.o.</p>
            <p>ul. Szklarska 5</p>
            <p>43-602 Jaworzno</p>
            <p>57 1140 1078 0000 3100 1500 1005</p>
            <br />
            <p>IBAN: PL 57 1140 1078 0000 3100 1500 1005</p>
            <p>SWIFT/BIC kod: BREXPLPWMBK</p>
          </div>
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14490.799399749023!2d19.935377662495846!3d50.05565666781986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b400494a06f%3A0x81168a58e13c5032!2sMiodowa%2051%2C%2031-036%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1641225340415!5m2!1spl!2spl"
        className="Map"
        title="mapa"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding-top: 13vh;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    padding-top: 12vh;
  }
  .title {
    padding-top: 10vh;
    padding-bottom: 10vh;
    width: 100vw;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #444;
    text-shadow: none;
    h2 {
      color: var(--secondaryColor);
      letter-spacing: 10px;
      text-align: center;
    }
    @media screen and (max-width: 800px) {
      h1:nth-of-type(2) {
        display: none;
      }

      h2:nth-of-type(3) {
        display: none;
      }
      h3:nth-of-type(2) {
        display: none;
      }
      h1 {
        font-size: 1.8rem;
      }
      h2 {
        font-size: 1.8rem;
        letter-spacing: 5px;
      }
      h3 {
        font-size: 1.8rem;
      }
    }
  }
  .Map {
    width: 100%;
    height: 60vh;
    position: relative;
    bottom: 0;
    left: 0;
    filter: saturate(0);
    margin-bottom: -21vh;
    margin-top: 15vh;
    transition: 0.6s;
    border-top: 2px solid var(--secondaryColor);
    :hover {
      filter: saturate(1);
    }
  }
  .contactContent {
    display: flex;
    justify-content: space-between;
    width: 80vw;
    max-width: 1360px;
    position: relative;
    margin: 15vh auto 5vh;
    .form {
      width: 50%;
    }
    @media screen and (max-width: 800px) {
      width: 90vw;
      flex-direction: column;
      form {
        width: 90vw;
      }
    }
  }
  .social {
    display: flex;
    flex-direction: column;
    width: 40%;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
    .adressPhoneEmail {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-family: var(--buttonFont);
      @media screen and (max-width: 800px) {
        margin-top: 10vh;
      }
      span {
        display: flex;
        align-items: center;
        border-radius: 5px;
        background: var(--secondaryColor);
        padding: 10px 20px;
        font-size: 1.2rem;
        margin: 2vh auto;
        width: 23vw;
        color: white;

        :nth-of-type(1) {
          margin-left: -2vw;
          background: var(--secondaryColor2);
        }
        :nth-of-type(3) {
          margin-right: -2vw;
          background: var(--bookBtnColor);
        }

        p {
          margin-left: 15px;
          text-align: center;
        }
        @media screen and (max-width: 800px) {
          width: 90vw;
          padding: 5px 10px;

          :nth-of-type(1) {
            margin-left: 0vw;
            margin: 2vh auto;
            background: var(--bookBtnColor);
          }
          :nth-of-type(2) {
            width: 60vw;
            background: var(--bookBtnColor);
          }
          :nth-of-type(3) {
            margin-right: 0vw;
            margin: 2vh auto;
          }

          p {
            margin-left: 0px;
            margin: 2vh auto;
            text-align: center;
            font-size: 1.1rem;
          }
        }
      }
    }
    .bankDetails {
      margin-top: 10vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: var(--buttonFont);
      font-size: 1.2rem;
      margin-left: -3vw;
      h2 {
        margin-bottom: 3vh;
        color: var(--secondaryColor2);
        text-transform: uppercase;
      }
      p {
        margin-bottom: 1vh;
      }
      @media screen and (max-width: 800px) {
        margin-left: 0;
        margin: 10vh auto 0;
        align-items: flex-start;
      }
    }
  }
`;

export default ContactPage;
