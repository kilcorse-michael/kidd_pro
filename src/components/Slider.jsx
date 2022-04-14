import React from "react";
import coffeeRetailImg from "../media/imgs/coffeeRetail.jpg";
import { UncontrolledCarousel } from "reactstrap";

export default function Slider() {
  return (
    <UncontrolledCarousel
      items={[
        {
          altText: "Slide 1",
          caption: "",
          key: 1,
          src: coffeeRetailImg,
        },
        {
          altText: "Slide 2",
          caption: "",
          key: 2,
          src: "https://picsum.photos/id/456/1200/600",
        },
        {
          altText: "Slide 3",
          caption: "",
          key: 3,
          src: "https://picsum.photos/id/678/1200/600",
        },
      ]}
    />
  );
}
