import React from "react";
import Navbar from "./Home/Navbar";
import Home from "./Home/Home";
import About from "./Home/About";
import Work from "./Home/Work";
import Contact from "./Home/Contact";
import Footer from "./Home/Footer";
import { ToastContainer } from "react-toastify";

const ComponentContainer = () => {
  return (
    <div >
      <ToastContainer />
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default ComponentContainer;
