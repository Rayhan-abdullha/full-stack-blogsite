import React from "react";
import Navbar from "../compontents/navbar/Navbar";
import Footer from "../compontents/footer/Footer";

const mainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default mainLayout;
