import React from "react";
import imgOne from "../media/imgs/1.jpg";
import imgTwo from "../media/imgs/2.jpg";
import imgThree from "../media/imgs/3.jpg";
import { UncontrolledCarousel } from "reactstrap";

export default function Slider() {
  return (
    <UncontrolledCarousel
    className="slider"
      items={[
        {
          altText: "Slide 1",
          caption: "",
          key: 1,
          src: imgOne,
        },
        {
          altText: "Slide 2",
          caption: "",
          key: 2,
          src: imgTwo,
        },
        {
          altText: "Slide 3",
          caption: "",
          key: 3,
          src: imgThree,
        },
      ]}
    />
  );
}
