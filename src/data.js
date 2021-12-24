import { FaLongArrowAltRight } from "react-icons/fa";
import React from "react";

import dbl1 from "./images/dbl/DBL 001.jpg";
import dbl2 from "./images/dbl/DBL 003.jpg";
import dbl3 from "./images/dbl/DBL 004.jpg";
import dbl4 from "./images/dbl/DBL 006.jpg";
import dbl5 from "./images/dbl/DBL 007.jpg";
import dbl6 from "./images/dbl/DBL 009.jpg";

import deluxe1 from "./images/deluxe/DELUXE 002.jpg";
import deluxe2 from "./images/deluxe/DELUXE 004.jpg";
import deluxe3 from "./images/deluxe/DELUXE 005.jpg";
import deluxe4 from "./images/deluxe/DELUXE 008.jpg";
import deluxe5 from "./images/deluxe/DELUXE 011.jpg";
import deluxe6 from "./images/deluxe/DELUXE 012.jpg";

import premium1 from "./images/premium/TWIM PREMIUM 003.jpg";
import premium2 from "./images/premium/TWIM PREMIUM 004.jpg";
import premium3 from "./images/premium/TWIM PREMIUM 005.jpg";
import premium4 from "./images/premium/TWIM PREMIUM 006.jpg";
import premium5 from "./images/premium/TWIM PREMIUM 008.jpg";

import studio1 from "./images/studio/STUDIO 002.jpg";
import studio2 from "./images/studio/STUDIO 003.jpg";
import studio3 from "./images/studio/STUDIO 004.jpg";
import studio4 from "./images/studio/STUDIO 009.jpg";
import studio5 from "./images/studio/STUDIO 011.jpg";

import superior1 from "./images/superior/SUPERIOR 002.jpg";
import superior2 from "./images/superior/SUPERIOR 005.jpg";
import superior3 from "./images/superior/SUPERIOR 006.jpg";
import superior4 from "./images/superior/SUPERIOR 007.jpg";
import superior5 from "./images/superior/SUPERIOR 011.jpg";
import superior6 from "./images/superior/SUPERIOR 015.jpg";

import twin1 from "./images/twin/TWIN 001.jpg";
import twin2 from "./images/twin/TWIN 002.jpg";
import twin3 from "./images/twin/TWIN 004.jpg";
import twin4 from "./images/twin/TWIN 005.jpg";
import twin5 from "./images/twin/TWIN 006.jpg";

import restauracja1 from "./images/restauracja/RESTAURACJA 001.jpg";
import restauracja2 from "./images/restauracja/RESTAURACJA 004.jpg";
import restauracja3 from "./images/restauracja/RESTAURACJA 007.jpg";
import restauracja4 from "./images/restauracja/RESTAURACJA 010.jpg";
import restauracja5 from "./images/restauracja/RESTAURACJA 011.jpg";
import restauracja6 from "./images/restauracja/RESTAURACJA 0014.jpg";
import restauracja7 from "./images/restauracja/RESTAURACJA 015.jpg";

import recepcjaBar1 from "./images/recepcja&bar/RECEPCJA 001.jpg";
import recepcjaBar2 from "./images/recepcja&bar/RECEPCJA 003.jpg";
import recepcjaBar3 from "./images/recepcja&bar/RECEPCJA 004.jpg";
import recepcjaBar4 from "./images/recepcja&bar/BAR 002.jpg";
import recepcjaBar5 from "./images/recepcja&bar/BAR 003.jpg";

export const sublinks = [
  {
    pageOne: "pokoje",
    links: [
      {
        label: "pokój 2-osobowy TWIN",
        icon: <FaLongArrowAltRight />,
        url: "/products",
      },
      {
        label: "pokój 2-osobowy DOUBLE",
        icon: <FaLongArrowAltRight />,
        url: "/products",
      },
      {
        label: "pokój 2-osobowy PREMIUM",
        icon: <FaLongArrowAltRight />,
        url: "/products",
      },
      {
        label: "apartament SUPERIOR",
        icon: <FaLongArrowAltRight />,
        url: "/products",
      },
      {
        label: "apartament STUDIO",
        icon: <FaLongArrowAltRight />,
        url: "/products",
      },
      {
        label: "apartament DELUXE",
        icon: <FaLongArrowAltRight />,
        url: "/products",
      },
    ],
  },
  {
    pageOne: "o nas",
    links: [
      { label: "hotel", icon: <FaLongArrowAltRight />, url: "/oNas/oHotelu" },
      {
        label: "kraków",
        icon: <FaLongArrowAltRight />,
        url: "/oNas/oKrakowie",
      },
    ],
  },
  {
    pageOne: "usługi",
    links: [
      {
        label: "transport lotniskowy",
        icon: <FaLongArrowAltRight />,
        url: "/products",
      },
      { label: "restauracja", icon: <FaLongArrowAltRight />, url: "/products" },
      { label: "parking", icon: <FaLongArrowAltRight />, url: "/products" },
    ],
  },
  {
    pageOne: "kontakt",
    links: [
      {
        label: "kontakt",
        icon: <FaLongArrowAltRight />,
        url: "/products",
      },
      { label: "faq", icon: <FaLongArrowAltRight />, url: "/products" },
      { label: "rodo", icon: <FaLongArrowAltRight />, url: "/products" },
      { label: "regulamin", icon: <FaLongArrowAltRight />, url: "/products" },
    ],
  },
];

export const gallery = [
  {
    id: 1,
    img: [twin1, twin2, twin3, twin4, twin5],
    category: "twin",
  },
  {
    id: 2,
    img: [dbl1, dbl2, dbl3, dbl4, dbl5, dbl6],
    category: "double",
  },
  {
    id: 3,
    img: [premium1, premium2, premium3, premium4, premium5],
    category: "premium",
  },
  {
    id: 4,
    img: [superior1, superior2, superior3, superior4, superior5, superior6],
    category: "superior",
  },
  {
    id: 5,
    img: [studio1, studio2, studio3, studio4, studio5],
    category: "studio",
  },
  {
    id: 6,
    img: [deluxe1, deluxe2, deluxe3, deluxe4, deluxe5, deluxe6],
    category: "deluxe",
  },
  {
    id: 7,
    img: [
      restauracja1,
      restauracja2,
      restauracja3,
      restauracja4,
      restauracja5,
      restauracja6,
      restauracja7,
    ],
    category: "restauracja",
  },
  {
    id: 8,
    img: [recepcjaBar1, recepcjaBar2, recepcjaBar3, recepcjaBar4, recepcjaBar5],
    category: "recepcja i bar",
  },
];
