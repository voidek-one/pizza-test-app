import React from "react";
import "../Gallery.css";
import galleryPhotoOne from "../../../../images/imagesGallery/galleryPhotoOne.jpg";
import galleryPhotoTwo from "../../../../images/imagesGallery/galleryPhotoTwo.jpg";
import galleryPhotoThree from "../../../../images/imagesGallery/galleryPhotoThree.jpg";
import galleryPhotoFour from "../../../../images/imagesGallery/galleryPhotoFour.jpg";

const GalleryBlockOne = () => {
  return (
    <div className="homeGalleryImages">
      <div className="imagesGallery">
        <img alt="galleryImages" src={galleryPhotoOne} />
      </div>
      <div className="imagesGallery">
        <img alt="galleryImages" src={galleryPhotoTwo} />
      </div>
      <div className="imagesGallery">
        <img alt="galleryImages" src={galleryPhotoThree} />
      </div>
      <div className="imagesGallery">
        <img alt="galleryImages" src={galleryPhotoFour} />
      </div>
    </div>
  );
};
export default GalleryBlockOne;
