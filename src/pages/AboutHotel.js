import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ServicesHome from "../components/HomeComponents/ServicesHome";

const AboutHotel = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="hotelAboutHeader">
        <div className="backgroundDark"></div>
        <div className="title">
          <h2>Hotel Miodowa</h2>
          <h4>luksusowe apartamenty w centrum miasta</h4>
        </div>
      </div>
      <div className="description">
        <h3>O Hotelu</h3>
        <p>
          Hotel Miodowa to więcej niż luksusowe apartamenty w centrum Krakowa.
          Oferujemy niezwykłą przestrzeń wypoczynku na czas pobytu w stolicy
          Małopolski. Urządzone gustownie wnętrza pokoi gwarantują szereg
          udogodnień, a dobrane ze smakiem poszczególne komponenty tworzą spójną
          estetycznie przestrzeń. Intuicyjny system rezerwacji pozwala na
          sprawny wynajem apartamentu w jednym z trzech oferowanych standardów.
        </p>
        <p>
          Atutem naszego obiektu – obok ekskluzywnych wnętrz – jest położenie.
          Lokalizacja na krakowskim Kazimierzu to prestiżowe miejsce o
          historycznym wydźwięku. Dawna dzielnica żydowska ma wiele znamion
          przeszłości, a jej dzieje stanowią doskonałe tło dla bogatej oferty
          kulinarnej oraz licznych atrakcji kulturalnych. Ogromne znaczenie ma
          bliskość Starego Miasta. Nieśpieszny spacer zabytkowymi uliczkami
          pozwala odkryć uroki historycznego centrum miasta.
        </p>
        <p>
          Dogodne położenie, luksusowe apartamenty, atrakcyjne ceny – Hotel
          Miodowa w Krakowie oferuje swoim Gościom idealne warunki na czas
          podróży służbowej, jak i na wyjazd turystyczny.
        </p>
      </div>
      <div className="hotelInNumbers">
        <div className="backgroundhotelInNumbers"></div>
        <div className="inNumbers">
          <span data-aos="zoom-in-left">
            <h3>37</h3>
            <p>pokoi</p>
          </span>
          <span data-aos="zoom-in">
            <h3>120</h3>
            <p>max. osób</p>
          </span>
          <span data-aos="zoom-in-right">
            <h3>11</h3>
            <p>personelu</p>
          </span>
        </div>
      </div>
      <ServicesHome />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  /* max-width: 1360px; */
  padding-top: 13vh;
  margin: 0 auto;
  .hotelAboutHeader {
    position: relative;
    height: 50vh;
    width: 100%;
    border-bottom: 2px solid var(--secondaryColor);

    .title {
      font-size: 1.8rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-shadow: 0 2px 2px black;
      color: white;
      h4 {
        text-transform: lowerCase;
        margin-top: 2vh;
      }
    }
  }
  .description {
    width: 70%;
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 2.5rem;
      align-self: flex-start;
      font-family: var(--titleFont);
    }
    p {
      font-family: var(--textFont);
      color: var(--primaryColor);
      font-size: 1.1rem;
      margin-top: 5vh;
      line-height: 1.3;
    }
  }
  .hotelInNumbers {
    width: 100vw;
    height: 60vh;
    position: relative;
    margin: 20vh auto 25vh;

    .inNumbers {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      span {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        /* background: white;
        color: var(--secondaryColor2); */
        background: var(--bookBtnColor);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 5vw;
        text-align: center;
        font-family: var(--buttonFont);
        opacity: 0.9;
        h3 {
          font-size: 3rem;
          margin-bottom: 1vh;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default AboutHotel;
