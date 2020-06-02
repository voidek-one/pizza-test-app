import React from "react";
import "./Slider.css";
import { Zoom } from "react-slideshow-image";
import slideHomePhotoOne from "./../../../images/imagesSlider/slideHomeOne.jpg";
import slideHomePhotoTwo from "./../../../images/imagesSlider/slideHomeTwo.jpg";
import slideHomePhotoThree from "./../../../images/imagesSlider/slideHomeThree.jpg";

const images = [slideHomePhotoOne, slideHomePhotoTwo, slideHomePhotoThree];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

export default function Slider() {
  return (
    <div className="sliderContainer">
      <Zoom {...zoomOutProperties}>
        {images.map((image) => (
          <img alt="sliderHome" className="slideImages" src={image} />
        ))}
      </Zoom>
    </div>
  );
}
