import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AllRoomsPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="AllRoomsHeader">
        <div className="AllRoomsHeader2">
          <div className="backgroundDark"></div>
        </div>
        <div data-aos="zoom-in-right" className="title">
          <h2>Nasze pokoje i apartamenty</h2>
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
  .AllRoomsHeader {
    position: relative;
    height: 60vh;
    width: 100%;
    border-bottom: 2px solid var(--secondaryColor);
    overflow: hidden;
    .AllRoomsHeader2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    .title {
      font-size: 1.8rem;
      position: absolute;
      top: 70%;
      right: -20%;
      width: 100%;
      text-shadow: 0 2px 2px black;
      color: white;
      z-index: 1;
      /* color: var(--secondaryColor2); */
    }
  }
`;
export default AllRoomsPage;
