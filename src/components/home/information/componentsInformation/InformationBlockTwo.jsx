import React from "react";
import "../Information.css";
import { dataInformation } from "./DataForInformation";
import Boundary from "../../boundary/Boundary";
import Text from "antd/lib/typography/Text";
import homePhotoTwo from "./../../../../images/imagesInformation/homePhotoTwo.jpg";

const InformationBlockTwo = () => {
  return (
    <div className="middleBlockTextAndImades">
      <div className="homeElement smooth holder">
        <img alt="CraftWorkshop" src={homePhotoTwo} />
        <div className="go-left">Ремесленная мастерская</div>
      </div>
      <div className="homeElement">
        <div className="blockHeadingText">
          <Text className="homeHeadingText">
            {dataInformation.articleTitleTwo}
          </Text>
        </div>
        <div>
          <Boundary />
        </div>
        <div className="blockSubtitleText">
          <Text className="homeSubtitleText">
            {dataInformation.textInformationTwo}
          </Text>
        </div>
      </div>
    </div>
  );
};
export default InformationBlockTwo;
