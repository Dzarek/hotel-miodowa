import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { questionsData } from "../data";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
const FaqPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
      <div className="questions">
        <Accordion allowZeroExpanded={true}>
          {questionsData.map((question) => {
            const { title, info, id } = question;
            return (
              <AccordionItem key={id}>
                <div className="singleQuestion">
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
        <div className="receptionPicture">
          <div className="receptionImg"></div>
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
    margin: 15vh auto;
    position: relative;
    @media (orientation: portrait) and (max-width: 800px) {
      width: 95vw;
      font-size: 0.8rem;
      margin-top: 10vh;
    }
  }
  .receptionPicture {
    width: 30vw;
    height: 25vw;
    overflow: hidden;
    border-radius: 5px;
  }
  .receptionImg {
    width: 100%;
    height: 100%;
  }
  .singleQuestion {
    margin: 2vh auto;
    padding: 10px 20px;
    width: 40vw;
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
