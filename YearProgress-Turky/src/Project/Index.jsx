import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AcademicProgress from "./Academic";
// import Ekstrakurikuler from "./components/Shortextra";
import Home from "./Home"; // Jika ada
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollTop";
import EkstrakurikulerProgress from "./Ekskul";

function App1() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academic" element={<AcademicProgress />} />
        <Route path="/ekstrakurikuler" element={<EkstrakurikulerProgress />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App1;