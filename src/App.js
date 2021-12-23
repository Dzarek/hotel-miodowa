import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

import Submenu from "./Submenu";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Submenu />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
