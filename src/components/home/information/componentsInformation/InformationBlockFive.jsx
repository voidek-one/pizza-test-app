import React from "react";
import "../Information.css";
import { dataInformation } from "./DataForInformation";
import Boundary from "../../boundary/Boundary";
import Text from "antd/lib/typography/Text";
import Logo from "./../../../../images/logo.png";

const InformationBlockFive = () => {
  return (
    <div className="blockHomeMiddleSignature">
      <div className="homeMiddleSignatureLogo">
        <img alt="LOGO" src={Logo} />
      </div>
      <div>
        <Text className="homeMiddleSignatureText">
          {dataInformation.textInformationDescriptions}
        </Text>
      </div>
      <div>
        <Boundary />
      </div>
    </div>
  );
};
export default InformationBlockFive;
