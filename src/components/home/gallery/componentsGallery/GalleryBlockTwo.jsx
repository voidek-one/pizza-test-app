import React from "react";
import "../Gallery.css";
import galleryPhotoFive from "../../../../images/imagesGallery/galleryPhotoFive.jpg";
import galleryPhotoSix from "../../../../images/imagesGallery/galleryPhotoSix.jpg";
import galleryPhotoSeven from "../../../../images/imagesGallery/galleryPhotoSeven.jpg";
import galleryPhotoEight from "../../../../images/imagesGallery/galleryPhotoEight.jpg";

const GalleryBlockTwo = () => {
  return (
    <div className="homeGalleryImages">
      <div className="imagesGallery">
        <img alt="galleryImages" src={galleryPhotoFive} />
      </div>
      <div className="imagesGallery">
        <img alt="galleryImages" src={galleryPhotoSix} />
      </div>
      <div className="imagesGallery">
        <img alt="galleryImages" src={galleryPhotoSeven} />
      </div>
      <div className="imagesGallery">
        <img alt="galleryImages" src={galleryPhotoEight} />
      </div>
    </div>
  );
};
export default GalleryBlockTwo;
