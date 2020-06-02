import React from "react";
import "../Information.css";
import { dataInformation } from "./DataForInformation";
import Boundary from "../../boundary/Boundary";
import Text from "antd/lib/typography/Text";
import homePhotoFour from "./../../../../images/imagesInformation/homePhotoFour.jpg";

const InformationBlockFour = () => {
  return (
    <div className="middleBlockTextAndImades">
      <div className="homeElement smooth holder">
        <img alt="delivery" src={homePhotoFour} />
        <div className="go-left">Доставка круглосуточная</div>
      </div>
      <div className="homeElement">
        <div className="blockHeadingText">
          <Text className="homeHeadingText">
            {dataInformation.articleTitleFour}
          </Text>
        </div>
        <div>
          <Boundary />
        </div>
        <div className="blockSubtitleText">
          <Text className="homeSubtitleText">
            {dataInformation.textInformationFour}
          </Text>
        </div>
      </div>
    </div>
  );
};
export default InformationBlockFour;
