import { Routes, Route } from "react-router-dom";
import Navbar from "/src/components/Navbar.jsx";
import Home from "/src/pages/Home.jsx";
import Portfolio from "/src/pages/Portfolio.jsx";
import CV from "/src/pages/CV.jsx";
import Connect from "/src/pages/Connect.jsx";
import Project from "/src/pages/Project.jsx"; // 👈 add this
import Footer from "/src/components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1215] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Project/:slug" element={<Project />} /> {/* 👈 */}
        <Route path="/CV" element={<CV />} />
        <Route path="/Connect" element={<Connect />} />
      </Routes>
      <Footer />
    </div>
  );
}