import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { RoomContext } from "../roomContext";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

import transportImg from "../images/inne/airportTransferMobile.jpg";
import restaurantImage from "../images/restauracja/RESTAURACJA 001.jpg";
import parkingImage from "../images/inne/parking2.jpg";

const ServicesPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <Wrapper>
      <h1 className="title">{polish ? "Usługi" : "Services"}</h1>
      <div data-aos="fade-up" className="main-page">
        <NavLink to="/uslugi/transport&wycieczki" className="oneService">
          <img src={transportImg} alt="transport" />
          {polish ? (
            <h2>
              Transport <br /> i <br /> Wycieczki
            </h2>
          ) : (
            <h2>
              Transfers <br /> and <br /> Tours
            </h2>
          )}
        </NavLink>
        <NavLink to="/uslugi/restauracja" className="oneService">
          <img src={restaurantImage} alt="restauracja" />
          <h2>{polish ? "Restauracja" : "Restaurant"}</h2>
        </NavLink>
        <NavLink to="/uslugi/parking" className="oneService">
          <img src={parkingImage} alt="parking" />
          <h2>Parking</h2>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  .title {
    position: absolute;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 2px;
    font-size: 2.5rem;
  }
  .main-page {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    padding-top: 20vh;
    @media screen and (max-width: 800px) {
      width: 90vw;
      flex-direction: column;
      padding-top: 35vh;
    }
    .oneService {
      width: 20vw;
      height: 50vh;
      position: relative;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.6s;
      @media screen and (max-width: 800px) {
        width: 70vw;
        height: 23vh;
        margin: 2vh auto;
      }
      @media (orientation: landscape) and (max-width: 800px) {
        height: 50vh;
      }
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px;
        border: 2px solid var(--secondaryColor2);
        transition: 0.4s;
        filter: saturate(0);
        @media screen and (max-width: 800px) {
          filter: saturate(0) brightness(0.3);
        }
      }
      h2 {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-family: var(--buttonFont);
        z-index: 2;
        font-size: 2.5rem;
        text-align: center;
        transition: 0.4s;
        @media screen and (max-width: 800px) {
          display: block;
          font-size: 1.7rem;
        }
      }
      :hover img {
        filter: brightness(0.3) saturate(0);
      }
      :hover h2 {
        display: block;
      }
      :hover {
        width: 30vw;
      }
    }
  }
`;

export default ServicesPage;
