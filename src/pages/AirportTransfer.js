import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { FaLongArrowAltRight } from "react-icons/fa";

const AirportTransfer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="airportTransferHeader">
        <div className="backgroundDark"></div>
        <div data-aos="zoom-in-right" className="title">
          <h2>Transfery i Wycieczki</h2>
        </div>
      </div>
      <div className="shuttleAndTours">
        <div className="shuttle">
          <h3>Transfery Lotniskowe</h3>
          <p>
            Oferujemy transport z Portu Lotniczego Kraków-Balice wprost do
            naszego obiektu. Ceny zależą od ilości przewożonych osób.
          </p>
          <span>
            {" "}
            <FaLongArrowAltRight /> 1-3 osoby: 90 zł
          </span>
          <span>4-6 osób: 140 zł</span>
          <span>7-8 osób: 160 zł</span>
          <p>Powyżej ośmiu osób koszt transferu obliczamy indywidualnie.</p>
          <p>
            Aby dokonać rezerwacji transportu prosimy o podanie: numeru lotu,
            ilości osób oraz czasu przylotu.
          </p>
          <p>
            W przypadku gdy podróżują z Państwem małe dzieci, należy
            poinformować nas o konieczności przygotowania fotelika dziecięcego.
          </p>
        </div>
        <div className="tours"></div>
      </div>
    </Wrapper>
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
  .shuttleAndTours {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    margin: 10vh auto;
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
      margin-left: 2vw;
    }
  }
`;

export default AirportTransfer;
