import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";
import { withRoomConsumer } from "../roomContext";

const AllRoomsPage = ({ context }) => {
  const { sortedRooms, rooms } = context;
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
      <div className="allRoomsInfo">
        <p>
          Oferujemy 37 pokoi i apartamentów, w których znajduje się do 120
          miejsc noclegowych. Dokonując rezerwacji, mogą Państwo swobodnie
          wybrać komfortowe i funkcjonalne pomieszczenia w jednej z aż sześciu
          kategorii:
        </p>
        <section>
          <ul>
            <li>
              <span>pokój 2-osobowy TWIN</span> - 2 pojedyncze łóżka
            </li>
            <li>
              <span>pokój 2-osobowy DOUBLE</span> - 1 łóżko małżeńskie
            </li>
            <li>
              <span>pokój 2-osobowy PREMIUM</span> - 2 pojedyczne łóżka i
              rozkładana sofa
            </li>
          </ul>
          <ul>
            <li>
              <span>apartament SUPERIOR</span> - 2 pojedyczne łóżka i rozkładana
              sofa
            </li>
            <li>
              <span>apartament STUDIO</span> - 2 pojedyczne łóżka i rozkładana
              sofa
            </li>
            <li>
              <span>apartament DELUXE</span> - 2 pojedyczne łóżka i rozkładana
              sofa
            </li>
          </ul>
        </section>
        <p>
          Wszystkie pokoje i apartamenty posiadają prywatną łazienkę.
          Apartamenty posiadają również aneks kuchenny.
        </p>
      </div>
      <div className="filterAndList">
        <RoomsFilter className="filter" rooms={rooms} />
        <RoomsList className="list" rooms={sortedRooms} />
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
    }
  }
  .allRoomsInfo {
    width: 70vw;
    max-width: 1360px;
    margin: 10vh auto 0vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: var(--textFont);
    font-size: 1.2rem;
    line-height: 1.5;
    p {
      margin: 5vh auto;
    }
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 5vw;
      ul {
        margin: 2vh auto 2vh 0;
        span {
          color: var(--secondaryColor2);
        }
      }
    }
  }
  .filterAndList {
    width: 80vw;
    max-width: 1360px;
    margin: 15vh auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export default withRoomConsumer(AllRoomsPage);
