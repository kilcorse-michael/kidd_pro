import React from "react";
import Slider from "./Slider";
import Header from "./Header";
import Footer from "./Footer";
import compImg from "../media/imgs/advert1.gif";
import abstract from "../media/imgs/abstract.gif"

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="overlay">
        <Slider />
        <img className="overlay-img" src={compImg} />
      </div>
      <img className="abstract" src={abstract} />
      <Footer />
    </div>
  );
}
