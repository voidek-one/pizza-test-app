import React from "react";
import "../Gallery.css";
import GalleryBlockOne from "./GalleryBlockOne";
import GalleryBlockTwo from "./GalleryBlockTwo";
import GalleryBlockThree from "./GalleryBlockThree";

const BlockGallery = () => {
  return (
    <div className="blockHomeGallery">
      <GalleryBlockOne />
      <div className="homeGallery">
        <GalleryBlockTwo />
        <GalleryBlockThree />
      </div>
    </div>
  );
};
export default BlockGallery;
