import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

import lazienka from "../images/homeAbout/DELUXE 011.jpg";
import salon from "../images/homeAbout/SUPERIOR 06.jpg";
import kuchnia from "../images/homeAbout/SUPERIOR 010.jpg";
import lozko from "../images/homeAbout/SUPERIOR 015.jpg";

const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <div className="mainSection aboutShort">
        <div className="aboutShortText">
          <h2>Luksusowe Apartamenty w Centrum Krakowa</h2>
          <p>
            Hotel Miodowa to coś znacznie więcej, niż tylko wygodne pokoje. To
            zaproszenie do luksusu, który każdy z naszych Gości ma okazję
            doświadczyć na własnej skórze. Komfortowe łóżka, sprzyjający
            odprężeniu salon, w pełni wyposażony aneks kuchenny oraz piękna
            łazienka sprawią, że będziecie mogli poczuć się tutaj jak we własnym
            domu.
          </p>
          <a href="#">Czytaj więcej</a>
        </div>

        <div className="aboutShortImages">
          <img src={lozko} alt="" />
          <img src={lazienka} alt="" />
          <img src={salon} alt="" />
          <img src={kuchnia} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .aboutShort {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .aboutShortText {
      width: 40%;
      height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        /* font-family: "Comfortaa", sans-serif;
        font-family: "Barlow Semi Condensed", sans-serif; */
        font-family: "Merriweather", sans-serif;
        font-size: 2.5rem;
        text-align: center;
        color: var(--secondaryColor2);
      }
      p {
        /* font-family: "Barlow Semi Condensed", sans-serif; */
        font-family: "Comfortaa", sans-serif;
        font-size: 1.1rem;
        margin: 5vh auto;
        text-align: center;
        line-height: 1.7;
      }
      a {
        padding: 10px;
        background: transparent;
        color: var(--primaryColor);
        border: none;
        border-bottom: 2px solid var(--secondaryColor);
        border-radius: 5px;
        font-size: 1.2rem;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        font-weight: 400;
        font-family: "Signika Negative", sans-serif;
        transition: 0.5s;
        :hover {
          letter-spacing: 2px;
        }
      }
    }
    .aboutShortImages {
      width: 45%;
      height: 70vh;
      position: relative;
      /* display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center; */
      img {
        position: absolute;
        width: 200px;
        margin: 2px;
        filter: saturate(0);
        cursor: pointer;
        transition: 0.3s;
        border-radius: 3px;
        :hover {
          filter: saturate(1);
        }
      }
      img:nth-of-type(1) {
        width: 15vw;
        width: 40%;
        bottom: 50%;
        left: 0;
      }
      img:nth-of-type(2) {
        width: 20vw;
        width: 58%;
        bottom: 50%;
        left: 15.5vw;
        left: 42%;
      }
      img:nth-of-type(3) {
        width: 17vw;
        width: 45%;
        top: 51%;
        left: 3vw;
        left: 7%;
      }
      img:nth-of-type(4) {
        width: 13vw;
        width: 38%;
        top: 51%;
        left: 20.5vw;
        left: 54%;
      }
    }
  }
`;

export default HomePage;
