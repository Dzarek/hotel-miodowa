import React from "react";
import styled from "styled-components";

import receptionBg from "../images/homeImages/RECEPCJA 002.jpg";

const Footer = () => {
  return <Wrapper className="footer"></Wrapper>;
};

const Wrapper = styled.div`
  width: 100vw;
  height: 70vh;
  margin-top: 20vh;
  /* border-top: 2px solid var(--secondaryColor2); */
  border-top: 4px solid var(--primaryColor);
`;

export default Footer;
