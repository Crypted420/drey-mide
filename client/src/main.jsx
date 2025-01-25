import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";
import AboutPage from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Conferences from "./pages/Conference.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/works" element={<Home />} />
      <Route path="/works/conferences" element={<Conferences />} />
      <Route path="/works/conferences/:type" element={<Gallery />} />
      <Route path="/works/:type" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);
