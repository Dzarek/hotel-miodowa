import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiExitDoor } from "react-icons/gi";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

const ErrorPage = () => {
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <Wrapper className="main-page">
      <div>
        <h2>{polish ? "strona nie istnieje" : "page not found"}</h2>
        <Link to="/">
          <GiExitDoor className="icon" />
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: var(--buttonFont);
    text-transform: uppercase;
    h2 {
      font-size: 2.5rem;
      margin-bottom: 10vh;
      text-align: center;
    }
    a {
      color: var(--secondaryColor2);
      font-size: 5rem;
      text-decoration: none;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        font-size: 7rem;
      }
    }
  }
`;

export default ErrorPage;
