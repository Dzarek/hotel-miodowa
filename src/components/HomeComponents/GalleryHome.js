import React from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import img1 from "../../images/hotel gallery/BAR 002.jpg";
import img2 from "../../images/hotel gallery/BAR 003.jpg";
import img3 from "../../images/hotel gallery/DELUXE 008.jpg";
import img4 from "../../images/hotel gallery/DELUXE 010.jpg";
import img5 from "../../images/hotel gallery/DELUXE 014.jpg";
import img6 from "../../images/hotel gallery/RECEPCJA 002.jpg";
import img7 from "../../images/hotel gallery/RECEPCJA 004.jpg";
import img8 from "../../images/hotel gallery/RESTAURACJA 001.jpg";
import img9 from "../../images/hotel gallery/RESTAURACJA 0014.jpg";
import img10 from "../../images/hotel gallery/RESTAURACJA 006.jpg";
import img11 from "../../images/hotel gallery/RESTAURACJA 010.jpg";
import img12 from "../../images/hotel gallery/STUDIO 003.jpg";
import img13 from "../../images/hotel gallery/STUDIO 008.jpg";
import img14 from "../../images/hotel gallery/STUDIO 012.jpg";
import img15 from "../../images/hotel gallery/TWIN 1.jpg";

const pictures = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const GalleryHome = () => {
  return (
    <Wrapper>
      <div className="mainSection GalleryHome">
        <div className="titleContainer">
          <h2 className="title">Galeria</h2>
          <span className="titleBorder"></span>
        </div>
        <Carousel
          className="pictures"
          infinite
          autoPlay={2000}
          animationSpeed={1000}
          slidesPerPage={3}
          offset={200}
          //   addArrowClickHandler
          stopAutoPlayOnHover
          //   arrowLeft={<IoIosArrowDropleftCircle className="arrow arrowLeft" />}
          //   arrowRight={
          //     <IoIosArrowDroprightCircle className="arrow arrowRight" />
          //   }
        >
          {pictures.map((item, index) => {
            return <img key={index} src={item} alt="" />;
          })}
        </Carousel>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .GalleryHome {
    width: 100vw;
  }
  .pictures {
    width: 100vw;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 50vw;
      height: 60vh;
    }
  }
`;

export default GalleryHome;
