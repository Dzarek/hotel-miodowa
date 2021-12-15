import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

import { GiMeal, GiVacuumCleaner } from "react-icons/gi";
import { IoFootsteps } from "react-icons/io5";
import {
  FaMapMarkerAlt,
  FaConciergeBell,
  FaShuttleVan,
  FaParking,
  FaWifi,
} from "react-icons/fa";

import restauracjaImg from "../../images/homeImages/RESTAURACJA 004.jpg";
import budynekImg from "../../images/homeImages/Budynek.jpg";
import recepcjaImg from "../../images/homeImages/RECEPCJA 005.jpg";
import transferImg from "../../images/homeImages/airportTransfer.jpg";
import wifiImg from "../../images/homeImages/wifi.jpg";
import wycieczkiImg from "../../images/homeImages/wycieczki.jpg";
import parkingImg from "../../images/homeImages/parking.jpg";
import serviceImg from "../../images/homeImages/serwis.jpg";

const ServicesHome = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="mainSection servicesHome">
        <div className="titleContainer">
          <h2 className="title">Nasza Oferta</h2>
          <span className="titleBorder"></span>
        </div>
        <div data-aos="zoom-in" className="services">
          <span className="oneService">
            <GiMeal className="icon" />
            <h4>Śniadania</h4>
            <p>
              Śniadania dla każdego gościa serwowane w godzinach 7:30-10:00.
            </p>
            <img src={restauracjaImg} alt="" />
          </span>
          <span className="oneService">
            <FaMapMarkerAlt className="icon" />
            <h4>Lokalizacja</h4>
            <p>
              Lokalizacja w centrum Krakowa zapewnia bardzo dobrą komunikację z
              najważniejszymi punktami miasta.
            </p>
            <img src={budynekImg} alt="" />
          </span>
          <span className="oneService">
            <FaConciergeBell className="icon" />
            <h4>Recepcja 24H</h4>
            <p>Nasza recepcja czynna jest 24 godziny na dobę.</p>
            <img src={recepcjaImg} alt="" />
          </span>
          <span className="oneService">
            <FaShuttleVan className="icon" />
            <h4>Transfery Lotniskowe</h4>
            <p>
              Transport z Portu Lotniczego Kraków-Balice wprost do naszego
              obiektu.
            </p>
            <img src={transferImg} alt="" />
          </span>
          <span className="oneService">
            <IoFootsteps className="icon" />
            <h4>Wycieczki</h4>
            <p>
              Organizujemy wycieczki do takich miejsc jak Auschwitz Birkenau,
              Kopalnia Soli w Wieliczce czy Zakopane.
            </p>
            <img src={wycieczkiImg} alt="" />
          </span>
          <span className="oneService">
            <FaParking className="icon" />
            <h4>Parking</h4>
            <p>
              Hotel posiada kilka miejsc parkingowych dla osób podróżujących
              samochodem.
            </p>
            <img src={parkingImg} alt="" />
          </span>
          <span className="oneService">
            <FaWifi className="icon" />
            <h4>Wi-Fi</h4>
            <p>Do dyspozycji gości sieć Wi-Fi w całym budynku hotelu.</p>
            <img src={wifiImg} alt="" />
          </span>
          <span className="oneService">
            <GiVacuumCleaner className="icon" />
            <h4>Serwis</h4>
            <p>Obsługa hotelu zapewnia codzienny serwis pokoi.</p>
            <img src={serviceImg} alt="" />
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .servicesHome {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    width: 90vw;
    align-items: center;
    background: rgb(15, 15, 15);
    /* box-shadow: 0 0 10px 0px white; */
    /* margin: 5vh 0; */
    .titleContainer {
      margin-bottom: 5vh;
      margin-top: 5vh;
    }
    .services {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      /* width: 90%;
      height: 100%; */
      .oneService {
        /* display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center; */
        text-align: center;
        height: 35vh;
        width: 16vw;
        padding: 10px 20px;
        border: 1px solid #888;
        border-radius: 5px;
        margin: 15px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: 0.5s;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          object-fit: cover;
          height: 100%;
          /* width: 100%; */
          filter: brightness(0.3);
          z-index: 0;
          /* display: none; */
          opacity: 0;
        }
        :hover {
          border: none;
        }
        :hover img {
          animation: imgShow 0.2s linear forwards;
        }
        @keyframes imgShow {
          100% {
            /* display: block; */
            opacity: 1;
          }
        }
        .icon {
          font-size: 2.8rem;
          color: var(--secondaryColor2);
          z-index: 1;
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
        }
        h4 {
          /* margin: 15px auto; */
          /* text-transform: capitalize; */
          font-size: 1.3rem;
          font-family: var(--buttonFont);
          font-weight: 400;
          z-index: 1;
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
        }
        p {
          font-family: var(--buttonFont);
          color: #bbb;
          font-size: 1rem;
          z-index: 1;
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
        }
      }
    }
  }
`;

export default ServicesHome;
