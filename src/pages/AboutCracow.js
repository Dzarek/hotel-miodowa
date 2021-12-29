import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import cracowImg1 from "../images/krakow/cracowImg1.jpg";
import cracowImg2 from "../images/krakow/cracowImg2.jpg";
import cracowImg3 from "../images/krakow/cracowImg3.jpg";

const AboutCracow = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="cracowHeader">
        <div className="title">
          <h2>Kraków - Miasto Polskich Królów</h2>
        </div>
      </div>
      <div className="cracowInfo">
        <section>
          <img data-aos="fade-right" src={cracowImg3} alt="cracowImg1" />
          <span data-aos="fade-left">
            <h3>O mieście</h3>
            <p>
              Jedno z najstarszych miast w kraju, siedziba i nekropolia polskich
              władców, niezmiennie ważny przez wieki ośrodek kultura, nauka i
              sztuka - Kraków przyciąga rzesze turystów kraju iz całego świata.
              Odkrywa niezwykła historia niezwykłego państwa i narodu. To
              pozwala poczuć splendor czasów królewskich. Zaskakuje nowoczesność
              oraz bogata oferta biznesowa i turystyczna.{" "}
            </p>
          </span>
        </section>
        <section>
          <span data-aos="fade-right">
            <h3>Musisz zobaczyć w Krakowie</h3>
            <p>
              Od średniowiecza centrum życia mieszkańców Krakowa był na Wawelu.
              To jest u podnóża wzgórza, na którym królewska zamek znajduje się
              na tym, że rozciąga się Stare Miasto. Ten ogromny plac zadziwia
              swoim ogromnym rozmiarem i kształtem niezmienionym od XIII
              stulecie. Znajduje się tu również Kościół Mariacki, Sukiennice
              zabytkowe budynki Uniwersytetu Krakowskiego.{" "}
            </p>
          </span>
          <img data-aos="fade-left" src={cracowImg1} alt="cracowImg2" />
        </section>
        <section>
          <img data-aos="fade-right" src={cracowImg2} alt="cracowImg3" />
          <span data-aos="fade-left">
            <h3>Dzielnica Żydowska</h3>
            <p>
              Niedaleko Starego Miasta, w centrum Krakowa, znajduje się stara
              dzielnica - Kazimierz, dawniej małe miasteczko. Przesiedlenie
              ludność żydowska na tych terenach w XV wieku odrodziła miasto.
              Rozwijając się wraz z rozwojem samego Krakowa, wkrótce stała się
              jego dzielnicą. Dziś - spacerując po zabytkowym ulice - wciąż
              można zobaczyć wiele zabytków, m.in. liczne synagogi, cmentarze,
              Wielki Mikveh i drób rzeźnia. Podczas pobytu w Krakowie warto go
              odwiedzić tej dzielnicy, a jeszcze ciekawsze znalezienie noclegu
              tutaj.
            </p>
          </span>
        </section>
      </div>
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
  .cracowHeader {
    position: relative;
    height: 50vh;
    width: 100%;
    border-bottom: 2px solid var(--secondaryColor);
    .title {
      font-size: 1.5rem;
      position: absolute;
      bottom: 5%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-shadow: 0 2px 2px black;
      color: white;
    }
  }
  .cracowInfo {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: 5vh auto;
    section {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 15vh auto;
      img {
        width: 40%;
        border-radius: 5px;
      }
      span {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-family: var(--textFont);
        line-height: 1.6;
        text-align: center;
        h3 {
          color: var(--secondaryColor2);
          margin-bottom: 3vh;
          text-transform: uppercase;
        }
      }
    }
    /* section:nth-of-type(1) {
      margin-right: 5vw;
    } */
  }
`;

export default AboutCracow;
