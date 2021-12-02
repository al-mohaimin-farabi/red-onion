import React from "react";
import Header from "./Header/Header";

import "./Home.scss";
import Main from "./Main/Main";
import WhyChose from "./WhyChose/WhyChose";

const Home = () => {
  if (window.location.pathname === "/login") return null;
  return (
    <>
      <Header />
      <Main />
      <WhyChose />
    </>
  );
};

export default Home;
