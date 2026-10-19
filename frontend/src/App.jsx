import Navbar from "./components/NavBar/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Academics from "./pages/Academics";
import Extracurricular from "./pages/Extracurricular";
import ApplyNow from "./pages/Apply";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import { useLocation } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import ERPPage from "./components/ERPPage";

export function App() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/loginpage" ||
    location.pathname === "/register" ||
    location.pathname.startsWith("/erp");

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/extracurricular" element={<Extracurricular />} />
        <Route path="/apply" element={<ApplyNow />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/erp/:className" element={<ERPPage />} />
      </Routes>
      {!hideLayout && <Footer />}
      <Analytics />
    </>
  );
}

export default App;
