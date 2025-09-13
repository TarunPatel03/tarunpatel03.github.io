import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import CV from "./pages/CV.jsx";
import Connect from "./pages/Connect.jsx";
import Project from "./pages/project.jsx"; // 👈 add this
import Footer from "./components/Footer.jsx";

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