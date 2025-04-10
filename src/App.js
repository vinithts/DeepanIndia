import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/LandingScreen/Formpart/Contact";

/* Admin Site Components */
import Admin from "./Components/Adminscreen/Admin";
import Loginform from "./Components/Adminscreen/LoginForm";
import Instruction from "./Components/Adminscreen/Intruction";
import Slider from "./Components/Adminscreen/Slider";
import Cardss from "./Components/Adminscreen/Card";
import Aboutss from "./Components/Adminscreen/About";
import Joiner from "./Components/Adminscreen/Joiner";
import Socialmedia from "./Components/Adminscreen/Socialmedia";
import LandingScreen from "./Components/LandingScreen";
import ServiceDetails from "./Components/LandingScreen/Serivces/ServiceDetails";
import CardDetails from "./Components/LandingScreen/Cards/CardDetails";
import ScrollToTop from "./Components/Scroll/ScrollToTop";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfServices from "./Components/TermsOfSerivce";
import Choose from "./Components/Adminscreen/Choose";
import Wealth from "./Components/Adminscreen/Wealth";
import Story from "./Components/Adminscreen/Story";
import CustomerData from "./Components/Adminscreen/CustomerData";

export default function App() {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith("/admin");

  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingScreen />
              <Contact />
            </>
          }
        />
        <Route path="/terms-of-service" element={<TermsOfServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/service/:serviceName" element={<ServiceDetails />} />
        <Route path="/details/:id" element={<CardDetails />} />
        <Route path="/adminlogin" element={<Loginform />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Instruction />} />
          <Route path="slider" index element={<Slider />} />
          <Route path="choose" index element={<Choose />} />
          <Route path="wealth" index element={<Wealth />} />
          <Route path="story" index element={<Story />} />
          <Route path="about" element={<Aboutss />} />
          <Route path="card" element={<Cardss />} />
          <Route path="joiner" element={<Joiner />} />
          {/* <Route path="reviews" element={<Reviewss />} /> */}
          <Route path="socialmedia" element={<Socialmedia />} />
          <Route path="customerdetails" element={<CustomerData />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}
