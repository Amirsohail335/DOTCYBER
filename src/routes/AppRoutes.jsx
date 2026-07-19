import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Visa from "../pages/Visa";
import Hajj from "../pages/Hajj";
import Offers from "../pages/Offers";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/visa-services" element={<Visa />} />
      <Route path="/hajj-umrah" element={<Hajj />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}