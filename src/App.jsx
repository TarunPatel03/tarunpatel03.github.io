import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import DynamicBackground from "./components/DynamicBackground";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import CV from "./pages/CV";
import Connect from "./pages/Connect";

export default function App() {
  return (
    <>
      <DynamicBackground />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </>
  );
}