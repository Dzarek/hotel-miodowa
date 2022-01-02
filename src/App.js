import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

import Navbar from "./components/Navbar";
import Submenu from "./Submenu";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";

import AboutUs from "./pages/AboutUs";
import AboutCracow from "./pages/AboutCracow";
import AboutHotel from "./pages/AboutHotel";

import AirportTransfer from "./pages/AirportTransfer";
import RestaurantPage from "./pages/RestaurantPage";
import ParkingPage from "./pages/ParkingPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Submenu />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/galeria" element={<GalleryPage />}></Route>
          <Route path="/oNas" element={<AboutUs />}></Route>
          <Route path="/oNas/oKrakowie" element={<AboutCracow />}></Route>
          <Route path="/oNas/oHotelu" element={<AboutHotel />}></Route>
          <Route
            path="/uslugi/transport&wycieczki"
            element={<AirportTransfer />}
          ></Route>
          <Route
            path="/uslugi/restauracja"
            element={<RestaurantPage />}
          ></Route>
          <Route path="/uslugi/parking" element={<ParkingPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
