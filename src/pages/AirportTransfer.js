import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

import { FaLongArrowAltRight } from "react-icons/fa";

import shuttleGuest from "../images/inne/shuttleGuest.jpg";
import wieliczkaImg from "../images/inne/wieliczka.jpg";
import auschwitzImg from "../images/inne/auschwitz.jpg";
import zakopaneImg from "../images/inne/zakopane.jpg";

const AirportTransfer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <>
      {polish ? (
        <Wrapper>
          <div className="airportTransferHeader">
            <div className="backgroundDark"></div>
            <div data-aos="zoom-in-right" className="title">
              <h2>Transfery i Wycieczki</h2>
            </div>
          </div>
          <div className="shuttleContainer">
            <div className="shuttle">
              <h3>Transfery Lotniskowe</h3>
              <p>
                Oferujemy transport z Portu Lotniczego Kraków-Balice wprost do
                naszego obiektu. Ceny zależą od ilości przewożonych osób.
              </p>
              <span>
                {" "}
                <FaLongArrowAltRight className="icon" /> 1-3 osoby: 90 zł
              </span>
              <span>
                <FaLongArrowAltRight className="icon" /> 4-6 osób: 140 zł
              </span>
              <span>
                <FaLongArrowAltRight className="icon" /> 7-8 osób: 160 zł
              </span>
              <p>Powyżej ośmiu osób koszt transferu obliczamy indywidualnie.</p>
              <p>
                Aby dokonać rezerwacji transportu prosimy o podanie: numeru
                lotu, ilości osób oraz czasu przylotu.
              </p>
              <p>
                W przypadku gdy podróżują z Państwem małe dzieci, należy
                poinformować nas o konieczności przygotowania fotelika
                dziecięcego.
              </p>
            </div>
            <img
              data-aos="fade-right"
              data-aos-offset="300"
              src={shuttleGuest}
              alt="airport"
            />
          </div>
          <div className="toursContainer">
            <div className="imgContainer">
              <span data-aos="flip-right">
                <img src={auschwitzImg} alt="auschwitz" />
                <h4>Auschwitz</h4>
              </span>
              <span data-aos="flip-right">
                <img src={wieliczkaImg} alt="wieliczka" />
                <h4>Wieliczka</h4>
              </span>
              <span data-aos="flip-right">
                <img src={zakopaneImg} alt="zakopane" />
                <h4>Zakopane</h4>
              </span>
            </div>
            <div className="tours">
              <h3>Wycieczki</h3>
              <p>Organizujemy wycieczki:</p>
              <span>
                <FaLongArrowAltRight className="icon" /> do Auchwitz Birkenau:
                koszt od 180 zł za osobę,
              </span>
              <span>
                <FaLongArrowAltRight className="icon" /> do Kopalni Soli w
                Wieliczce: koszt od 180 zł za osobę,
              </span>
              <span>
                <FaLongArrowAltRight className="icon" /> do Zakopanego: koszt od
                350 zł za osobę,
              </span>
              <p>
                Opłata obejmuje: transfer do celu i z powrotem do hotelu,
                przewodnika w języku angielskim, włoskim, hiszpańskim,
                francuskim lub niemieckim, bilet wstępu.
              </p>
            </div>
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <div className="airportTransferHeader">
            <div className="backgroundDark"></div>
            <div data-aos="zoom-in-right" className="title">
              <h2>Transfers and Tours</h2>
            </div>
          </div>
          <div className="shuttleContainer">
            <div className="shuttle">
              <h3>Airport Shuttle</h3>
              <p>
                We offer transport from the Krakow-Balice Airport directly to
                our Hotel. The prices depend on the number of people
                transported.
              </p>
              <span>
                {" "}
                <FaLongArrowAltRight className="icon" /> 1-3 people: 90 zł
              </span>
              <span>
                <FaLongArrowAltRight className="icon" /> 4-6 people: 140 zł
              </span>
              <span>
                <FaLongArrowAltRight className="icon" /> 7-8 people: 160 zł
              </span>
              <p>
                For more than eight people, we calculate the cost of the
                transfer individually.
              </p>
              <p>
                To book a transport, please provide: flight number, number of
                people and time of arrival.
              </p>
              <p>
                If children are traveling with you, please inform us about the
                need to prepare a child seat.
              </p>
            </div>
            <img
              data-aos="fade-right"
              data-aos-offset="300"
              src={shuttleGuest}
              alt="airport"
            />
          </div>
          <div className="toursContainer">
            <div className="imgContainer">
              <span data-aos="flip-right">
                <img src={auschwitzImg} alt="auschwitz" />
                <h4>Auschwitz</h4>
              </span>
              <span data-aos="flip-right">
                <img src={wieliczkaImg} alt="wieliczka" />
                <h4>Wieliczka</h4>
              </span>
              <span data-aos="flip-right">
                <img src={zakopaneImg} alt="zakopane" />
                <h4>Zakopane</h4>
              </span>
            </div>
            <div className="tours">
              <h3>Tours</h3>
              <p>We organize trips:</p>
              <span>
                <FaLongArrowAltRight className="icon" /> to Auchwitz Birkenau:
                price 180 zł per person,
              </span>
              <span>
                <FaLongArrowAltRight className="icon" /> to Salt Mine in
                Wieliczce: price 180 zł per person,
              </span>
              <span>
                <FaLongArrowAltRight className="icon" /> to Zakopane: price 350
                zł per person,
              </span>
              <p>
                The fee includes: transfer to the destination and back to the
                hotel, guide in English, Italian, Spanish, French or German,
                admission ticket.
              </p>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding-top: 13vh;
  margin: 0 auto;
  .backgroundDark {
    background: rgba(0, 0, 0, 0.3);
  }
  .airportTransferHeader {
    position: relative;
    height: 50vh;
    width: 100%;
    border-bottom: 2px solid var(--secondaryColor);

    .title {
      font-size: 1.8rem;
      position: absolute;
      top: 70%;
      right: 25%;
      /* transform: translate(-50%, -50%); */
      width: 100%;
      text-shadow: 0 2px 2px black;
      color: white;
      h4 {
        text-transform: lowerCase;
        margin-top: 2vh;
      }
    }
  }
  .shuttleContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    margin: 15vh auto;
    img {
      width: 300px;
      border-radius: 3px;
    }
    .shuttle {
      display: flex;
      flex-direction: column;
      width: 40%;
      align-items: flex-start;
    }
    h3 {
      font-family: var(--buttonFont);
      font-size: 2rem;
      margin-bottom: 3vh;
      color: var(--secondaryColor2);
    }
    p {
      font-family: var(--textFont);
      font-size: 1rem;
      line-height: 1.3;
      margin: 2vh auto;
    }
    span {
      font-family: var(--textFont);
      font-size: 1rem;
      line-height: 1.3;
      color: var(--secondaryColor2);
      margin: 0.5rem 0 0.5rem 2vw;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-weight: bold;
      .icon {
        margin-right: 10px;
      }
    }
  }
  .toursContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    margin: 20vh auto 30vh;
    .imgContainer {
      width: 50%;
      height: 50vh;
      position: relative;
      span {
        width: 300px;
        height: 180px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
        :hover img {
          filter: brightness(0.3);
        }
        :hover h4 {
          opacity: 1;
        }
      }
      span:nth-of-type(2) {
        top: 33%;
        left: 50%;
      }
      span:nth-of-type(3) {
        top: 66%;
        left: 0%;
      }
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
        transition: 0.4s;
        border: 1px solid var(--secondaryColor2);
      }
      h4 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-family: var(--buttonFont);
        font-size: 2rem;
        opacity: 0;
        transition: 0.4s;
      }
    }
    .tours {
      display: flex;
      flex-direction: column;
      width: 40%;
      align-items: flex-start;
      justify-content: center;
      h3 {
        font-family: var(--buttonFont);
        font-size: 2rem;
        margin-bottom: 3vh;
        color: var(--secondaryColor2);
      }
      p {
        font-family: var(--textFont);
        font-size: 1rem;
        line-height: 1.3;
        margin: 3vh auto 3vh 0;
        text-align: left;
      }
      span {
        font-family: var(--textFont);
        font-size: 1rem;
        line-height: 1.3;
        color: var(--secondaryColor2);
        margin: 0.5rem 0 0.5rem 2vw;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-weight: bold;
        .icon {
          margin-right: 10px;
        }
      }
    }
  }
`;

export default AirportTransfer;
