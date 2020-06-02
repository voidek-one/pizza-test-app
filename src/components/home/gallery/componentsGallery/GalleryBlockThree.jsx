import React from "react";
import "../Gallery.css";
import galleryPhotoNine from "../../../../images/imagesGallery/galleryPhotoNine.jpg";
import galleryPhotoTen from "../../../../images/imagesGallery/galleryPhotoTen.jpg";
import galleryPhotoEleven from "../../../../images/imagesGallery/galleryPhotoEleven.jpg";
import galleryPhotoTwelve from "../../../../images/imagesGallery/galleryPhotoTwelve.jpg";

const GalleryBlockThree = () => {
  return (
    <div className="homeGalleryImages">
      <div className="imagesGallery">
        <img alt="galleryImages" src={galleryPhotoNine} />
      </div>
      <div className="imagesGallery">
        <img alt="galleryImages" src={galleryPhotoTen} />
      </div>
      <div className="imagesGallery">
        <img alt="galleryImages" src={galleryPhotoEleven} />
      </div>
      <div className="imagesGallery">
        <img alt="galleryImages" src={galleryPhotoTwelve} />
      </div>
    </div>
  );
};
export default GalleryBlockThree;
