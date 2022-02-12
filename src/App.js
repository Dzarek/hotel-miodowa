import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";
import { useState } from "react";
// import { useState, useEffect } from "react";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { MdDoubleArrow } from "react-icons/md";

import Navbar from "./components/Navbar";
import Submenu from "./Submenu";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";

import AboutUs from "./pages/AboutUs";
import AboutCracow from "./pages/AboutCracow";
import AboutHotel from "./pages/AboutHotel";

import ServicesPage from "./pages/ServicesPage";
import AirportTransfer from "./pages/AirportTransfer";
import RestaurantPage from "./pages/RestaurantPage";
import ParkingPage from "./pages/ParkingPage";

import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import RegulationsPage from "./pages/RegulationsPage";
import RodoPage from "./pages/RodoPage";

import SingleRoomPage from "./pages/SingleRoomPage";
import AllRoomsPage from "./pages/AllRoomsPage";

import ErrorPage from "./pages/ErrorPage";

import { useGlobalContext } from "./context";

function App() {
  const { closeSubmenu } = useGlobalContext();

  // const [lightMode, setLightMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  // const [width, setWidth] = useState(window.innerWidth);
  // function handleWindowSizeChange() {
  //   setWidth(window.innerWidth);
  // }
  // useEffect(() => {
  //   window.addEventListener("resize", handleWindowSizeChange);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowSizeChange);
  //   };
  // }, []);

  // const isMobile = width <= 800;

  return (
    // <div className={!lightMode ? "app" : "app2"}>
    <div className="app">
      <Router>
        {/* {(showMenu && !showBooking) || !isMobile ? (
          <>
            {!lightMode ? (
              <button
                onClick={() => setLightMode(true)}
                className="modeLightDark darkMode"
              >
                <MdDoubleArrow className="modeLightIcon" />
                <MdLightMode />
              </button>
            ) : (
              <button
                onClick={() => setLightMode(false)}
                className="modeLightDark lightMode"
              >
                <MdDarkMode />
                <MdDoubleArrow className="modeDarkIcon" />
              </button>
            )}
          </>
        ) : null} */}
        <Navbar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          showBooking={showBooking}
          setShowBooking={setShowBooking}
        />
        <Submenu />
        <ScrollToTop />
        <div onMouseOver={closeSubmenu}>
          <Routes>
            <Route path="*" element={<ErrorPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/pokoje" element={<AllRoomsPage />}></Route>
            <Route path="/pokoje/:slug" element={<SingleRoomPage />}></Route>
            <Route path="/galeria" element={<GalleryPage />}></Route>
            <Route path="/oNas" element={<AboutUs />}></Route>
            <Route path="/oNas/oKrakowie" element={<AboutCracow />}></Route>
            <Route path="/oNas/oHotelu" element={<AboutHotel />}></Route>
            <Route path="/uslugi" element={<ServicesPage />}></Route>
            <Route
              path="/uslugi/transport&wycieczki"
              element={<AirportTransfer />}
            ></Route>
            <Route
              path="/uslugi/restauracja"
              element={<RestaurantPage />}
            ></Route>
            <Route path="/uslugi/parking" element={<ParkingPage />}></Route>
            <Route
              path="/kontakt/formularzKontaktowy"
              element={<ContactPage />}
            ></Route>
            <Route path="/kontakt/faq" element={<FaqPage />}></Route>
            <Route
              path="/kontakt/regulamin"
              element={<RegulationsPage />}
            ></Route>
            <Route path="/kontakt/rodo&cookies" element={<RodoPage />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
