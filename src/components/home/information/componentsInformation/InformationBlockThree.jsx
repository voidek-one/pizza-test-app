import React from "react";
import "../Information.css";
import { dataInformation } from "./DataForInformation";
import Boundary from "../../boundary/Boundary";
import Text from "antd/lib/typography/Text";
import homePhotoThree from "./../../../../images/imagesInformation/homePhotoThree.jpg";

const InformationBlockThree = () => {
  return (
    <div className="middleBlockTextAndImades">
      <div className="homeElement">
        <div className="blockHeadingText">
          <Text className="homeHeadingText">
            {dataInformation.articleTitleThree}
          </Text>
        </div>
        <div>
          <Boundary />
        </div>
        <div className="blockSubtitleText">
          <Text className="homeSubtitleText">
            {dataInformation.textInformationThree}
          </Text>
        </div>
      </div>
      <div className="homeElement smooth holder">
        <img alt="Products" src={homePhotoThree} />
        <div className="go-left">Продукты</div>
      </div>
    </div>
  );
};
export default InformationBlockThree;
