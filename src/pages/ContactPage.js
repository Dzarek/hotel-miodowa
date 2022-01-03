import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MyForm from "../components/MyForm";

import { MdMail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="title">
        <FaPhoneAlt />
        <MdMail />

        <FaMapMarkerAlt />

        <h2 data-aos="fade-up">Kontakt</h2>
        <FaMapMarkerAlt />

        <MdMail />
        <FaPhoneAlt />
      </div>
      <div className="contactContent">
        <section className="form">
          <MyForm />
        </section>
        <section className="social">
          <div data-aos="fade-left" className="adressPhoneEmail">
            <span>
              <FaMapMarkerAlt />
              <p>ul. Miodowa 51, 31-036 Kraków</p>
            </span>
            <span>
              <FaPhoneAlt />
              <p>+48 12 4467130, +48 508 373 246</p>
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
  .title {
    padding-top: 10vh;
    padding-bottom: 10vh;
    width: 100vw;
    background: #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* color: var(--secondaryColor2); */
    /* color: var(--appBgColor); */
    color: #444;
    h2 {
      color: var(--secondaryColor);
      /* letter-spacing: 8vw; */
      letter-spacing: 10px;
      text-align: center;
      /* animation: letterConect 1s 1s 1 forwards; */
    }
    /* @keyframes letterConect {
      100% {
        letter-spacing: 10px;
      }
    } */
  }
  .Map {
    width: 100%;
    /* height: 100%; */
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
  }
  .social {
    display: flex;
    flex-direction: column;
    width: 40%;
    .adressPhoneEmail {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-family: var(--buttonFont);
      span {
        display: flex;
        align-items: center;
        border-radius: 5px;
        background: var(--secondaryColor);
        padding: 10px 20px;
        font-size: 1.2rem;
        margin: 2vh auto;
        width: 23vw;

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
    }
  }
`;

export default ContactPage;
