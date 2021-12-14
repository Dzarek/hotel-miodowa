import React from "react";
import styled from "styled-components";

import { GiMeal } from "react-icons/gi";
import { FaMapMarkerAlt, FaConciergeBell } from "react-icons/fa";

import restauracjaImg from "../../images/homeServices/RESTAURACJA 004.jpg";
import budynekImg from "../../images/homeServices/Budynek.jpg";
import recepcjaImg from "../../images/homeServices/RECEPCJA 005.jpg";

const ServicesHome = () => {
  return (
    <Wrapper>
      <div className="mainSection servicesHome">
        <h2 className="title">Nasza Oferta</h2>
        <div className="services">
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
            <GiMeal className="icon" />
            <h4>Transfery Lotniskowe</h4>
            <p>
              Śniadania dla każdego gościa serwowane w godzinach 7:30-10:00.
            </p>
          </span>
          <span className="oneService">
            <GiMeal className="icon" />
            <h4>Wycieczki</h4>
            <p>
              Śniadania dla każdego gościa serwowane w godzinach 7:30-10:00.
            </p>
          </span>
          <span className="oneService">
            <GiMeal className="icon" />
            <h4>Parking</h4>
            <p>
              Śniadania dla każdego gościa serwowane w godzinach 7:30-10:00.
            </p>
          </span>
          <span className="oneService">
            <GiMeal className="icon" />
            <h4>Wi-Fi</h4>
            <p>
              Śniadania dla każdego gościa serwowane w godzinach 7:30-10:00.
            </p>
          </span>
          <span className="oneService">
            <GiMeal className="icon" />
            <h4>Serwis</h4>
            <p>
              Śniadania dla każdego gościa serwowane w godzinach 7:30-10:00.
            </p>
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
    .title {
      margin-bottom: 10vh;
      /* margin-top: -5vh; */
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
