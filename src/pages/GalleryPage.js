import styled from "styled-components";
import { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

import { gallery, galleryEN } from "../data";

const allCategories = [
  ...new Set(gallery.map((item) => item.category)),
  "wszystkie",
];
const galleryCategory = gallery.filter((item) => item.category === "twin");

const allCategoriesEN = [
  ...new Set(galleryEN.map((item) => item.category)),
  "all",
];
const galleryCategoryEN = galleryEN.filter((item) => item.category === "twin");

const GalleryPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;
  const [menuItems, setMenuItems] = useState(galleryCategory);
  const [categories] = useState(allCategories);
  const [activeBtn, setActiveBtn] = useState("twin");

  const [menuItemsEN, setMenuItemsEN] = useState(galleryCategoryEN);
  const [categoriesEN] = useState(allCategoriesEN);
  const [activeBtnEN, setActiveBtnEN] = useState("twin");

  const filterItems = (category) => {
    if (category === "wszystkie") {
      setMenuItems(gallery);
      setActiveBtn(category);
      return;
    }
    const newItems = gallery.filter((item) => item.category === category);
    setMenuItems(newItems);
    setActiveBtn(category);
  };
  const filterItemsEN = (category) => {
    if (category === "all") {
      setMenuItemsEN(galleryEN);
      setActiveBtnEN(category);
      return;
    }
    const newItemsEN = galleryEN.filter((item) => item.category === category);
    setMenuItemsEN(newItemsEN);
    setActiveBtnEN(category);
  };

  return (
    <>
      {polish ? (
        <Wrapper className="main-page">
          <div className="title">
            <h1>Galeria</h1>
          </div>
          <div className="galleryCategory">
            {categories.map((category, index) => {
              return (
                <button
                  key={index}
                  onClick={() => filterItems(category)}
                  className={activeBtn === category ? "activeBtn" : null}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="galleryContent">
            <SRLWrapper>
              {menuItems.map((item) => {
                return item.img.map((itemA, index) => {
                  return (
                    <img
                      data-aos="flip-down"
                      key={index}
                      src={itemA}
                      alt={item.category}
                    />
                  );
                });
              })}
            </SRLWrapper>
          </div>
        </Wrapper>
      ) : (
        <Wrapper className="main-page">
          <div className="title">
            <h1>Gallery</h1>
          </div>
          <div className="galleryCategory">
            {categoriesEN.map((category, index) => {
              return (
                <button
                  key={index}
                  onClick={() => filterItemsEN(category)}
                  className={activeBtnEN === category ? "activeBtn" : null}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="galleryContent">
            <SRLWrapper>
              {menuItemsEN.map((item) => {
                return item.img.map((itemA, index) => {
                  return (
                    <img
                      data-aos="flip-down"
                      key={index}
                      src={itemA}
                      alt={item.category}
                    />
                  );
                });
              })}
            </SRLWrapper>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  .title {
    font-size: 1.5rem;
    padding-top: 10vh;
    letter-spacing: 2px;
  }
  .galleryCategory {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    margin: 10vh auto;
    button {
      padding: 10px;
      background: transparent;
      color: var(--primaryColor);
      border: none;
      border-bottom: 2px solid var(--secondaryColor);
      border-radius: 5px;
      font-size: 1rem;
      text-transform: uppercase;
      cursor: pointer;
      font-weight: 400;
      font-family: var(--buttonFont);
      transition: 0.4s;
      :hover {
        background: var(--bookBtnColor);
        color: white;
      }
    }
    .activeBtn {
      background: var(--secondaryColor);
      color: white;
    }
    @media screen and (max-width: 800px) {
      width: 95vw;
      button {
        width: 40%;
        font-size: 0.9rem;
        margin: 2vh auto;
        padding: 10px 5px;
        /* :hover {
          background: rgb(197, 103, 40);
        } */
      }
    }
  }
  .galleryContent {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    img {
      width: 23%;
      margin: 15px 1%;
      border-radius: 3px;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        box-shadow: 0 0 2px 2px white;
      }
      @media screen and (max-width: 800px) {
        width: 100%;
        margin: 15px auto;
      }
    }
  }
`;

export default GalleryPage;
