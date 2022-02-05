import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

import ServicesHome from "../components/HomeComponents/ServicesHome";

import BuildingImg from "../images/homeImages/Budynek.jpg";

const AboutHotel = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <>
      {polish ? (
        <Wrapper>
          <div className="hotelAboutHeader">
            <div className="backgroundDark"></div>
            <div className="title">
              <h2 data-aos="zoom-in">Hotel Miodowa</h2>
              <h4 data-aos="zoom-in">luksusowe apartamenty w centrum miasta</h4>
            </div>
          </div>
          <div className="description">
            <h3>O Hotelu</h3>
            <p>
              Hotel Miodowa to więcej niż luksusowe apartamenty w centrum
              Krakowa. Oferujemy niezwykłą przestrzeń wypoczynku na czas pobytu
              w stolicy Małopolski. Urządzone gustownie wnętrza pokoi gwarantują
              szereg udogodnień, a dobrane ze smakiem poszczególne komponenty
              tworzą spójną estetycznie przestrzeń. Intuicyjny system rezerwacji
              pozwala na sprawny wynajem apartamentu w jednym z trzech
              oferowanych standardów.
            </p>
            <section>
              <p>
                Atutem naszego obiektu – obok ekskluzywnych wnętrz – jest
                położenie. Lokalizacja na krakowskim Kazimierzu to prestiżowe
                miejsce o historycznym wydźwięku. Dawna dzielnica żydowska ma
                wiele znamion przeszłości, a jej dzieje stanowią doskonałe tło
                dla bogatej oferty kulinarnej oraz licznych atrakcji
                kulturalnych. Ogromne znaczenie ma bliskość Starego Miasta.
                Nieśpieszny spacer zabytkowymi uliczkami pozwala odkryć uroki
                historycznego centrum miasta.
              </p>
              <img data-aos="fade-left" src={BuildingImg} alt="budynek" />
            </section>
            <p>
              Dogodne położenie, luksusowe apartamenty, atrakcyjne ceny – Hotel
              Miodowa w Krakowie oferuje swoim Gościom idealne warunki na czas
              podróży służbowej, jak i na wyjazd turystyczny.
            </p>
          </div>
          <div className="hotelInNumbers">
            {/* <div className="backgroundhotelInNumbers"></div> */}
            <div className="inNumbers">
              <span data-aos="zoom-in-left">
                <h3>37</h3>
                <p>pokoi</p>
              </span>
              <span data-aos="zoom-in">
                <h3>120</h3>
                <p>max. osób</p>
              </span>
              <span data-aos="zoom-in-right" data-aos-offset="-200">
                <h3>11</h3>
                <p>personelu</p>
              </span>
            </div>
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <div className="hotelAboutHeader">
            <div className="backgroundDark"></div>
            <div className="title">
              <h2 data-aos="zoom-in">Hotel Miodowa</h2>
              <h4 data-aos="zoom-in">
                luxurious apartments in the center of Cracow
              </h4>
            </div>
          </div>
          <div className="description">
            <h3>About Hotel</h3>
            <p>
              Hotel Miodowa is more than just luxurious apartments in the center
              of Krakow. We offer an extraordinary space for relaxation during
              your stay in the capital Lesser Poland. The tastefully decorated
              interiors of the rooms guarantee a variety amenities, and the
              tastefully selected individual components create a coherent one
              aesthetically pleasing space. The intuitive booking system allows
              you to efficient rental of an apartment in one of the three
              offered standards.
            </p>
            <section>
              <p>
                The advantage of our facility - apart from exclusive interiors -
                is its location. The location in Krakow's Kazimierz is a
                prestigious place of Fr. historical overtones. The former Jewish
                district has many features the past, and its history is a
                perfect background for a rich offer culinary and numerous
                cultural attractions. It matters a lot proximity to the Old
                Town. Take a leisurely stroll through the historic streets
                allows you to discover the charms of the historic city center.
              </p>
              <img data-aos="fade-left" src={BuildingImg} alt="budynek" />
            </section>
            <p>
              Good location, luxurious apartments, attractive prices - Hotel
              Miodowa in Krakow offers its guests ideal conditions on time a
              business trip as well as a tourist trip.
            </p>
          </div>
          <div className="hotelInNumbers">
            <div className="inNumbers">
              <span data-aos="zoom-in-left">
                <h3>37</h3>
                <p>rooms</p>
              </span>
              <span data-aos="zoom-in">
                <h3>120</h3>
                <p>max. guests</p>
              </span>
              <span data-aos="zoom-in-right">
                <h3>11</h3>
                <p>staff</p>
              </span>
            </div>
          </div>
          <ServicesHome />
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
  @media screen and (max-width: 800px) {
    padding-top: 12vh;
  }
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
      color: white;
      h4 {
        text-transform: lowerCase;
        margin-top: 2vh;
      }
    }
    @media screen and (max-width: 800px) {
      h2 {
        font-size: 1.8rem;
      }
      h4 {
        font-size: 1.5rem;
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
      color: var(--secondaryColor2);
    }
    p {
      font-family: var(--textFont);
      color: var(--primaryColor);
      font-size: 1.1rem;
      margin-top: 8vh;
      line-height: 1.3;
    }
    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        width: 40%;
      }
      img {
        width: 35%;
        border-radius: 5px;
        margin-right: 15%;
        margin-top: 8vh;
      }
    }
    @media screen and (max-width: 800px) {
      width: 85%;
      h3 {
        font-size: 2rem;
      }
      section {
        flex-direction: column;
        width: 100vw;
        p {
          width: 85%;
          text-align: center;
        }
        img {
          width: 80%;
          margin-right: 0;
        }
      }
      p:nth-of-type(2) {
        text-align: right;
      }
    }
  }
  .hotelInNumbers {
    width: 100vw;
    height: 70vh;
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
        width: 150px;
        height: 150px;
        border-radius: 30%;
        background: var(--secondaryColor);
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
    @media screen and (max-width: 800px) {
      height: 70vh;
      .inNumbers {
        flex-direction: column;
        justify-content: space-around;
        align-items: space-around;
        span {
          width: 90px;
          height: 90px;
          margin: 2vh auto;
          h3 {
            font-size: 1.8rem;
            margin-bottom: 1vh;
          }
          p {
            font-size: 1rem;
          }
        }
      }
    }
    @media (orientation: landscape) and (max-width: 800px) {
      height: 100vh;
    }
  }
`;

export default AboutHotel;
