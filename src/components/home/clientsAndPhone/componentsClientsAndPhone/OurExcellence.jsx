import React from "react";
import "../ClientsAndPhone.css";
import { TrophyOutlined, HeartOutlined, HomeOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import { dataClientsAndPhone } from "./DataForClientsAndPhone";

const OurExcellence = () => {
  return (
    <div className="blockHomeOurExcellence">
      <div className="blockHomeOurExcellenceTitle">
        <Text className="homeGalleryTitleText">
          {dataClientsAndPhone.titleExcellence}
        </Text>
      </div>
      <div className="homeOurExcellence">
        <div>
          <TrophyOutlined className="iconTrophyOutlined" />
          <div>
            <Text className="homeOurExcellenceTittleText">
              {dataClientsAndPhone.subtitleExcellenceOne}
            </Text>
          </div>
          <div>
            <Text className="homeOurExcellenceSignatureText">
              {dataClientsAndPhone.descriptionExcellenceOne}
            </Text>
          </div>
        </div>
        <div>
          <HeartOutlined className="iconHeartOutlined" />
          <div>
            <Text className="homeOurExcellenceTittleText">
              {dataClientsAndPhone.subtitleExcellenceTwo}
            </Text>
          </div>
          <div>
            <Text className="homeOurExcellenceSignatureText">
              {dataClientsAndPhone.descriptionExcellenceTwo}
            </Text>
          </div>
        </div>
        <div>
          <HomeOutlined className="iconHomeOutlined" />
          <div>
            <Text className="homeOurExcellenceTittleText">
              {dataClientsAndPhone.subtitleExcellenceThree}
            </Text>
          </div>
          <div>
            <Text className="homeOurExcellenceSignatureText">
              {dataClientsAndPhone.descriptionExcellenceThree}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurExcellence;
