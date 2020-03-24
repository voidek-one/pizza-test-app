import React from "react";
import { Zoom } from "react-slideshow-image";

import "./Home.css";

const images = [
  "https://pizzeriafrumento.com/wp-content/uploads/2019/07/slide_home_4-1200x593.jpg",
  "https://pizzeriafrumento.com/wp-content/uploads/2019/07/slide_home_6-1200x593.jpg",
  "https://pizzeriafrumento.com/wp-content/uploads/2019/07/slide_home_5-1200x593.jpg"
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

export default function Home() {
  return (
    <div>
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each} />
          ))}
        </Zoom>
      </div>
    </div>
  );
}
