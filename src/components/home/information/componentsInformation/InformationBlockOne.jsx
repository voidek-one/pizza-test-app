import React from "react";
import "../Information.css";
import { dataInformation } from "./DataForInformation";
import Boundary from "../../boundary/Boundary";
import Text from "antd/lib/typography/Text";
import homePhotoOne from "./../../../../images/imagesInformation/homePhotoOne.jpg";

const InformationBlockOne = () => {
  return (
    <div className="middleBlockTextAndImades">
      <div className="homeElement">
        <div className="blockHeadingText">
          <Text className="homeHeadingText">
            {dataInformation.articleTitleOne}
          </Text>
        </div>
        <div>
          <Boundary />
        </div>
        <div className="blockSubtitleText">
          <Text className="homeSubtitleText">
            {dataInformation.textInformationOne}
          </Text>
        </div>
      </div>
      <div className="homeElement smooth holder">
        <img alt="PizzeriaAtWork" src={homePhotoOne} />
        <div className="go-left">Пиццерия за работой</div>
      </div>
    </div>
  );
};
export default InformationBlockOne;
