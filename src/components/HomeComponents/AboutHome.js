import React, { useEffect } from "react";
import { useContext } from "react";
import { RoomContext } from "../../roomContext";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

import lazienka from "../../images/homeImages/DELUXE 011.jpg";
import salon from "../../images/homeImages/SUPERIOR 06.jpg";
import kuchnia from "../../images/homeImages/SUPERIOR 010.jpg";
import lozko from "../../images/homeImages/SUPERIOR 015.jpg";

const AboutHome = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <Wrapper>
      <div className="mainSection aboutShort">
        {polish ? (
          <div className="aboutShortText">
            <h2>Pokoje i Apartamenty w Centrum Krakowa</h2>
            <p>
              Hotel Miodowa to coś znacznie więcej, niż tylko wygodne pokoje. To
              zaproszenie do luksusu, który każdy z naszych Gości ma okazję
              doświadczyć na własnej skórze. Komfortowe łóżka, sprzyjający
              odprężeniu salon, w pełni wyposażony aneks kuchenny oraz piękna
              łazienka sprawią, że będziecie mogli poczuć się tutaj jak we
              własnym domu.
            </p>
            <NavLink to="/oNas/oHotelu">Czytaj więcej</NavLink>
          </div>
        ) : (
          <div className="aboutShortText">
            <h2>Rooms and Apartments in the center of Cracow</h2>
            <p>
              Hotel Miodowa is much more than just comfortable rooms. This an
              invitation to luxury that each of our guests has the opportunity
              to experience on own skin. Comfortable beds, very nice lounge,
              fully equipped kitchenette, and beautiful bathroom will make you
              feel here like in home.
            </p>
            <NavLink to="/oNas/oHotelu">Read More</NavLink>
          </div>
        )}

        <div data-aos="zoom-out" className="aboutShortImages">
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
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    .aboutShortText {
      width: 40%;
      height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        font-family: "Merriweather", sans-serif;
        font-size: 2.5rem;
        text-align: center;
        color: var(--secondaryColor2);
      }
      p {
        font-family: "Comfortaa", sans-serif;
        font-size: 1.1rem;
        margin: 10vh auto 5vh;
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
        font-weight: 600;
        font-family: "Signika Negative", sans-serif;
        transition: 0.5s;
        :hover {
          letter-spacing: 2px;
        }
      }
      @media screen and (max-width: 800px) {
        width: 90%;
        height: auto;
        margin: 0 auto;
        h2 {
          font-size: 1.5rem;
        }
      }
    }
    .aboutShortImages {
      width: 45%;
      height: 70vh;
      position: relative;
      @media screen and (max-width: 800px) {
        width: 90vw;
        margin: 0 auto;
      }
      @media (orientation: landscape) and (max-width: 800px) {
        display: none;
      }
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
        width: 40%;
        bottom: 50%;
        left: 0;
      }
      img:nth-of-type(2) {
        width: 58%;
        bottom: 50%;
        left: 42%;
      }
      img:nth-of-type(3) {
        width: 45%;
        top: 51%;
        left: 7%;
      }
      img:nth-of-type(4) {
        width: 38%;
        top: 51%;
        left: 54%;
      }
    }
  }
`;

export default AboutHome;
