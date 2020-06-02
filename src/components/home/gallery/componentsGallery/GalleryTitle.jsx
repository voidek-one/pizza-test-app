import React from "react";
import "../Gallery.css";
import Boundary from "../../boundary/Boundary";
import Text from "antd/lib/typography/Text";
import { dataGallery } from "./DataForGallery";

const GalleryTitle = () => {
  return (
    <div className="GalleryTitle">
      <div className="blockHomeGalleryTitleText">
        <Text className="homeGalleryTitleText">{dataGallery.title}</Text>
      </div>
      <div>
        <Boundary />
      </div>
      <div className="blockHomeGallerySignatureText">
        <Text className="homeGallerySignatureText">
          {dataGallery.description}
        </Text>
      </div>
      <div>
        <Boundary />
      </div>
    </div>
  );
};
export default GalleryTitle;
