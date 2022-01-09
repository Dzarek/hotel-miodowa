import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

import cracowImg1 from "../images/krakow/cracowImg1.jpg";
import cracowImg2 from "../images/krakow/cracowImg2.jpg";
import cracowImg3 from "../images/krakow/cracowImg3.jpg";

const AboutCracow = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <Wrapper>
      <div className="cracowHeader">
        <div className="title">
          <h2>
            {polish
              ? "Kraków - Miasto Polskich Królów"
              : "Cracow - The City Of Polish Kings"}
          </h2>
        </div>
      </div>
      <div className="cracowInfo">
        <section>
          <img data-aos="fade-right" src={cracowImg3} alt="cracowImg1" />
          <span data-aos="fade-left">
            <h3>{polish ? "O mieście" : "About city"}</h3>
            <p>
              {polish
                ? "Jedno z najstarszych miast w kraju, siedziba i nekropolia władców polskich, niezmiennie ważny od wieków ośrodek kultury, nauki i sztuki – Kraków przyciąga rzesze turystów z kraju i z całego świata. Odkrywa niezwykłe dzieje niezwykłego państwa i narodu. Pozwala poczuć świetność królewskich czasów. Zaskakuje nowoczesnością oraz bogatą ofertą biznesową i turystyczną."
                : "One of the oldest cities in the country, the seat and necropolis of Polish rulers, invariably important for centuries center of culture, science and art - Krakow attracts crowds of tourists from the country and from around the world. He discovers the extraordinary history of an extraordinary state and nation. It allows you to feel the splendor of royal times. It surprises with modernity and a rich business and tourist offer."}
            </p>
          </span>
        </section>
        <section>
          <span data-aos="fade-right">
            <h3>
              {polish ? "Musisz zobaczyć w Krakowie" : "Must See of Cracow"}
            </h3>
            <p>
              {polish
                ? "Od czasów średniowiecza centrum życia mieszkańców Krakowa toczy się przy Wawelu. To właśnie u stóp wzgórza, na którym mieści się królewski zamek, rozciąga się Stare Miasto. Ten rozległy plac zadziwia potężnymi rozmiarami oraz niezmienionym od XIII wieku kształtem. Znajduje się tu Bazylika Mariacka, Sukiennice, a także historyczne zabudowania Uniwersytetu Krakowskiego."
                : "Since the Middle Ages, the center of life of Krakow's inhabitants has been at Wawel. It is at the foot of the hill where the royal castle is located that the Old Town stretches. This vast square amazes with its huge size and shape unchanged since the 13th century. There are St. Mary's Basilica, the Cloth Hall, as well as the historic buildings of the University of Krakow."}
            </p>
          </span>
          <img data-aos="fade-left" src={cracowImg1} alt="cracowImg2" />
        </section>
        <section>
          <img data-aos="fade-right" src={cracowImg2} alt="cracowImg3" />
          <span data-aos="fade-left">
            <h3>{polish ? "Dzielnica Żydowska" : "Jewish quarter"}</h3>
            <p>
              {polish
                ? " Nieopodal Starego Miasta, w centrum Krakowa, znajduje się stara dzielnica – Kazimierz, dawniej niewielka miejscowość. Przesiedlenie ludności żydowskiej na ten teren w XV wieku ożywiło miasteczko. Wzrastające wraz z rozwojem samego Krakowa stało się wkrótce jego dzielnicą. Dziś – podczas spaceru zabytkowymi uliczkami – można dojrzeć jeszcze wiele reliktów historii, w tym liczne synagogi, cmentarze, Mykwę Wielką, czy rzeźnię drobiu. Na terenie dzisiejszego Kazimierza organizowany jest także Festiwal Kultury Żydowskiej. Podczas pobytu w Krakowie warto odwiedzić tę dzielnicę, a jeszcze ciekawiej znaleźć tu nocleg."
                : "Near the Old Town, in the center of Krakow, there is the old district - Kazimierz, formerly a small town. The resettlement of the Jewish population to this area in the 15th century revived the town. Growing along with the development of Krakow itself, it soon became its district. Today - while walking along the historic streets - you can still see many relics of history, including numerous synagogues, cemeteries, the Great Mikveh, and a poultry slaughterhouse. During your stay in Krakow, it is worth visiting this district, and even more interesting finding accommodation here."}
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
      @media (orientation: portrait) and (max-width: 800px) {
        font-size: 1.2rem;
      }
    }
  }
  .cracowInfo {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: 5vh auto;
    @media (orientation: portrait) and (max-width: 800px) {
      width: 90%;
    }
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
      @media (orientation: portrait) and (max-width: 800px) {
        flex-direction: column;
        margin: 7vh auto;

        img {
          width: 90%;
          margin: 0vh auto 3vh;
        }
        img:nth-of-type(2) {
          margin: 5vh auto 0vh;
        }
        img:nth-of-type(3) {
          margin: 0vh auto 3vh;
        }
        span {
          width: 90%;
        }
      }
    }
    /* section:nth-of-type(1) {
      margin-right: 5vw;
    } */
  }
`;

export default AboutCracow;
