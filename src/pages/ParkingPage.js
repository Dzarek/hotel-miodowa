import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

const ParkingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <Wrapper>
      <div className="parkingHeader">
        <div className="backgroundDark"></div>
        <div data-aos="zoom-in-right" className="title">
          <h2>Parking</h2>
        </div>
      </div>
      {polish ? (
        <div className="parkingInfo">
          <p>
            Podróżujesz samochodem? Niestety jak prawie w każdym większym
            mieście również i w Krakowie jest problem z parkowaniem. Gęsta
            zabudowa ogranicza możliwości poruszania się autem w centrum.
          </p>
          <p>
            Nasz Hotel posiada kilka miejsc parkingowych w garażu. Należy jednak
            pamiętać, iż wymagana jest <span>wcześniejsza rezerwacja</span>.
            Koszt usługi parkingowej wynosi <span>60 zł/doba</span>.
          </p>
          <p>
            W przypadku gdy brak jest miejsc na naszym parkingu, polecamy
            również parkingi strzeżone w niedalekiej odległości od Hotelu:
          </p>
          <section className="oneParking">
            <div className="oneParkingInfo">
              <h2>
                Adres: <span>Miodowa 55A, 31-036 Kraków</span>
              </h2>
              <h2>
                Telefon: <span>+48 888 808 153</span>
              </h2>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.783586152005!2d19.950197400852122!3d50.052885240770586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b5f4f62fd37%3A0xe17fa3b3700fa5a5!2sParking%20Krak%C3%B3w%2024h%20Kazimierz!5e0!3m2!1spl!2spl!4v1641082365883!5m2!1spl!2spl"
              className="oneParkingMap"
              allowfullscreen=""
              loading="lazy"
              data-aos="fade-left"
              title="Miodowa 55A"
            ></iframe>
          </section>
          <section className="oneParking">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1077.1131327212286!2d19.949582619960733!3d50.052180621068175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b4038be03e3%3A0x450b6e60b7689161!2sParking%2024h%20%7C%20Krak%C3%B3w-%20Kazimierz!5e0!3m2!1spl!2spl!4v1641083250749!5m2!1spl!2spl"
              className="oneParkingMap"
              allowfullscreen=""
              loading="lazy"
              data-aos="fade-right"
              title="Starowiślna 79a"
            ></iframe>
            <div className="oneParkingInfo">
              <h2>
                Adres: <span>Starowiślna 79a, 31-052 Kraków</span>
              </h2>
              <h2>
                Telefon: <span>+48 508 663 874</span>
              </h2>
            </div>
          </section>
          <section className="oneParking">
            <div className="oneParkingInfo">
              <h2>
                Adres: <span>Dajwór 12, 31-052 Kraków</span>
              </h2>
              <h2>
                Telefon: <span>+48 692 564 727</span>
              </h2>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1077.127668964483!2d19.9494444884403!3d50.051532992941254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b41b2ee3da7%3A0xfb29b890e8c22202!2sParking%2024h%20%7C%20Kazimierz!5e0!3m2!1spl!2spl!4v1641083356124!5m2!1spl!2spl"
              className="oneParkingMap"
              allowfullscreen=""
              loading="lazy"
              data-aos="fade-left"
              title="Dajwór 12"
            ></iframe>
          </section>
          <p>
            Istnieje również możliwość parkowania na ulicy przed hotelem w
            strefie płatnego parkowania. Strefa obowiązuje od poniedziałku do
            soboty w godzinach 10:00-20:00. Opłata w parkometrze wynosi 6
            zł/godzina.
          </p>
        </div>
      ) : (
        <div className="parkingInfo">
          <p>
            Are you traveling by car? Unfortunately, as in almost every major
            city there is also a parking problem in Krakow. Dense urban
            development limits the ability to move the car in the center.
          </p>
          <p>
            Our hotel has several parking spaces in the garage. However, you
            should note that <span> advance booking </span> is required. Cost of
            the parking service is <span> 60 PLN / day </span>.
          </p>
          <p>
            In case there is no parking space in our car park, we also recommend
            it guarded car parks close to the Hotel:
          </p>
          <section className="oneParking">
            <div className="oneParkingInfo">
              <h2>
                Address: <span>Miodowa 55A, 31-036 Kraków</span>
              </h2>
              <h2>
                Phone: <span>+48 888 808 153</span>
              </h2>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.783586152005!2d19.950197400852122!3d50.052885240770586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b5f4f62fd37%3A0xe17fa3b3700fa5a5!2sParking%20Krak%C3%B3w%2024h%20Kazimierz!5e0!3m2!1spl!2spl!4v1641082365883!5m2!1spl!2spl"
              className="oneParkingMap"
              allowfullscreen=""
              loading="lazy"
              data-aos="fade-left"
              title="Miodowa 55A"
            ></iframe>
          </section>
          <section className="oneParking">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1077.1131327212286!2d19.949582619960733!3d50.052180621068175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b4038be03e3%3A0x450b6e60b7689161!2sParking%2024h%20%7C%20Krak%C3%B3w-%20Kazimierz!5e0!3m2!1spl!2spl!4v1641083250749!5m2!1spl!2spl"
              className="oneParkingMap"
              allowfullscreen=""
              loading="lazy"
              data-aos="fade-right"
              title="Starowiślna 79a"
            ></iframe>
            <div className="oneParkingInfo">
              <h2>
                Address: <span>Starowiślna 79a, 31-052 Kraków</span>
              </h2>
              <h2>
                Phone: <span>+48 508 663 874</span>
              </h2>
            </div>
          </section>
          <section className="oneParking">
            <div className="oneParkingInfo">
              <h2>
                Address: <span>Dajwór 12, 31-052 Kraków</span>
              </h2>
              <h2>
                Phone: <span>+48 692 564 727</span>
              </h2>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1077.127668964483!2d19.9494444884403!3d50.051532992941254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b41b2ee3da7%3A0xfb29b890e8c22202!2sParking%2024h%20%7C%20Kazimierz!5e0!3m2!1spl!2spl!4v1641083356124!5m2!1spl!2spl"
              className="oneParkingMap"
              allowfullscreen=""
              loading="lazy"
              data-aos="fade-left"
              title="Dajwór 12"
            ></iframe>
          </section>
          <p>
            There is also the possibility of parking in the street in front of
            the hotel in the zone paid parking. The zone is valid from Monday to
            Saturday in between 10 a.m. and 8 p.m. The fee in the parking meter
            is 6 PLN / hour.
          </p>
        </div>
      )}
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
  .backgroundDark {
    background: rgba(0, 0, 0, 0.3);
  }
  .parkingHeader {
    position: relative;
    height: 50vh;
    width: 100%;
    border-bottom: 2px solid var(--secondaryColor);

    .title {
      font-size: 1.8rem;
      position: absolute;
      top: 70%;
      right: 25%;
      width: 100%;
      color: white;
      h4 {
        text-transform: lowerCase;
        margin-top: 2vh;
      }
      @media screen and (max-width: 800px) {
        h2 {
          font-size: 2rem;
          transform: translateX(25%);
        }
      }
    }
  }
  .parkingInfo {
    width: 70vw;
    max-width: 1360px;
    display: flex;
    flex-direction: column;
    margin: 15vh auto;
    @media screen and (max-width: 800px) {
      width: 90vw;
    }
    p {
      font-family: var(--textFont);
      font-size: 1.2rem;
      line-height: 1.4;
      margin: 3vh auto;
      @media screen and (max-width: 800px) {
        font-size: 1.1rem;
      }
      span {
        color: var(--secondaryColor2);
      }
    }
    p:nth-of-type(3) {
      margin-top: 10vh;
    }
  }
  .oneParking:nth-of-type(2) {
    @media screen and (max-width: 800px) {
      flex-direction: column-reverse;
    }
  }
  .oneParking {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10vh auto;
    width: 90%;
    @media screen and (max-width: 800px) {
      width: 100%;
      flex-direction: column;
    }

    .oneParkingInfo {
      display: flex;
      flex-direction: column;

      h2 {
        justify-self: flex-start;
        font-family: var(--buttonFont);
        margin: 1vh auto;
        span {
          color: var(--secondaryColor2);
          margin-left: 10px;
        }
        @media screen and (max-width: 800px) {
          font-size: 1.2rem;
          align-self: center;
          margin: 1vh auto 3vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }

    .oneParkingMap {
      width: 50%;
      height: 45vh;
      border: 2px solid var(--secondaryColor2);
      border-radius: 5px;
      @media screen and (max-width: 800px) {
        width: 100%;
        height: 35vh;
      }
      @media (orientation: landscape) and (max-width: 800px) {
        width: 100%;
        height: 75vh;
      }
    }
  }
`;
export default ParkingPage;
