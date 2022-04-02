import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { withRoomConsumer } from "../roomContext";

import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";

const AllRoomsPage = ({ context }) => {
  const { sortedRooms, rooms, polish } = context;
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
          <h2>
            {polish ? "Nasze pokoje i apartamenty" : "Our rooms and apartments"}
          </h2>
        </div>
      </div>
      {!polish ? (
        <div className="allRoomsInfo">
          <p>
            We offer 37 rooms and apartments, in which there are up to 120 beds.
            When making a reservation, you can choose comfortable and functional
            rooms in one of six categories:
          </p>
          <section>
            <ul>
              <li>
                <span>TWIN room</span> - 2 single beds
              </li>
              <li>
                <span>DOUBLE room</span> - 1 big bed
              </li>
              <li>
                <span>PREMIUM room</span> - 2 single beds and 1 sofa
              </li>
            </ul>
            <ul>
              <li>
                <span>SUPERIOR apartment</span> - 2 single beds and 1 sofa
              </li>
              <li>
                <span>STUDIO apartment</span> - 2 single beds and 1 sofa
              </li>
              <li>
                <span>DELUXE apartment</span> - 2 single beds and 1 sofa
              </li>
            </ul>
          </section>
          <p>
            All rooms and apartments have a private bathroom. The apartments
            also have a kitchenette.
          </p>
        </div>
      ) : (
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
                <span>apartament SUPERIOR</span> - 2 pojedyczne łóżka i
                rozkładana sofa
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
      )}
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
  @media screen and (max-width: 800px) {
    padding-top: 12vh;
  }
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
      color: white;
      z-index: 1;
      text-shadow: 3px 3px 3px black;

      @media screen and (max-width: 800px) {
        font-size: 1.4rem;
        right: 0%;
      }
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
    @media screen and (max-width: 800px) {
      width: 85vw;
      font-size: 1.1rem;
    }
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
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
  }
`;
export default withRoomConsumer(AllRoomsPage);
