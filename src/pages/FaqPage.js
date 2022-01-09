import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { questionsData, questionsDataEN } from "../data";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { useContext } from "react";
import { RoomContext } from "../roomContext";
const FaqPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;

  let questions = [];
  if (polish) {
    questions = questionsData;
  } else {
    questions = questionsDataEN;
  }

  return (
    <Wrapper>
      <div className="title">
        <h1>?</h1>
        <h2>?</h2>
        <h3>?</h3>

        <h2 data-aos="fade-up">FAQ</h2>
        <h3>?</h3>
        <h2>?</h2>
        <h1>?</h1>
      </div>
      <h2 className="faqSubTitle">
        {polish ? "Najczęściej zadawane pytania" : "Frequently Asked Questions"}
      </h2>
      <div className="questions">
        <Accordion allowZeroExpanded={true}>
          {questions.map((question) => {
            const { title, info, id } = question;
            return (
              <AccordionItem key={id}>
                <div data-aos="fade-down" className="singleQuestion">
                  <header>
                    <h3>
                      <BsFillQuestionOctagonFill className="icon" /> {title}
                    </h3>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <button className="btn">
                          <TiArrowSortedDown />
                        </button>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                  </header>
                  <AccordionItemPanel>
                    <p>{info}</p>
                  </AccordionItemPanel>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
        <div className="receptionFaq">
          {polish ? (
            <p>
              Nie znalazleś odpowiedzi na swoje pytania? <br /> Śmiało zapytaj
              nas poprzez formularz kontaktowy!
            </p>
          ) : (
            <p>
              Didn't find the answer to your questions? <br /> Go ahead and ask
              us by the contact form!
            </p>
          )}
          <div className="receptionPicture">
            <div className="receptionImg"></div>
            <NavLink to="/kontakt/formularzKontaktowy">
              {polish ? "Zapytaj nas!" : "Ask us!"}
            </NavLink>
          </div>
        </div>
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
  .title {
    padding-top: 10vh;
    padding-bottom: 10vh;
    width: 100vw;
    background: #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #444;
    h2 {
      color: var(--secondaryColor);
      letter-spacing: 10px;
      text-align: center;
    }
    @media (orientation: portrait) and (max-width: 800px) {
      h1:nth-of-type(2) {
        display: none;
      }

      h2:nth-of-type(3) {
        display: none;
      }
      h3:nth-of-type(2) {
        display: none;
      }
      h1 {
        font-size: 1.8rem;
      }
      h2 {
        font-size: 1.8rem;
        letter-spacing: 5px;
      }
      h3 {
        font-size: 1.8rem;
      }
    }
  }
  .faqSubTitle {
    margin: 10vh auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--titleFont);
    color: var(--secondaryColor2);
    font-size: 2rem;
    @media (orientation: portrait) and (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
  .accordion__panel {
    animation: fadein 0.5s ease-in;
    overflow: hidden;
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .btn {
    background: transparent;
    border: none;
    font-size: 2rem;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media (orientation: portrait) and (max-width: 800px) {
      font-size: 1.8rem;
    }
    :hover {
      color: var(--secondaryColor);
    }
  }
  .icon {
    margin-right: 10px;
    color: var(--secondaryColor2);
  }

  .questions {
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    width: 80vw;
    max-width: 1360px;
    margin: 30vh auto 15vh;
    position: relative;
    @media (orientation: portrait) and (max-width: 800px) {
      width: 95vw;
      font-size: 0.8rem;
      margin-top: 10vh;
      flex-direction: column;
    }
  }
  .receptionFaq {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    @media (orientation: portrait) and (max-width: 800px) {
      width: 90vw;
      margin-top: 15vh;
    }
    p {
      font-family: var(--textFont);
      text-align: center;
      font-size: 1.1rem;
      line-height: 1.4;
    }
  }
  .receptionPicture {
    margin-top: 5vh;
    width: 30vw;
    height: 25vw;
    overflow: hidden;
    border-radius: 5px;
    position: relative;
    @media (orientation: portrait) and (max-width: 800px) {
      width: 80vw;
      height: 40vh;
    }
    a {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      background: var(--bookBtnColor);
      padding: 15px 25px;
      color: var(--primaryColor);
      font-size: 1.1rem;
      font-family: var(--buttonFont);
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 5px;
      transition: 0.3s;
      :hover {
        letter-spacing: 3px;
      }
      @media (orientation: portrait) and (max-width: 800px) {
        padding: 15px;
      }
    }
  }
  .receptionImg {
    width: 100%;
    height: 100%;
  }
  .singleQuestion {
    margin: 2vh auto;
    padding: 10px 20px;
    width: 35vw;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    border-radius: 5px;
    border: 1px solid var(--secondaryColor2);
    font-family: var(--buttonFont);
    @media (orientation: portrait) and (max-width: 800px) {
      width: 100%;
    }
    p {
      margin-top: 4vh;
      font-family: var(--textFont);
      line-height: 1.4;
      font-size: 1rem;
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
    }
  }
`;

export default FaqPage;
