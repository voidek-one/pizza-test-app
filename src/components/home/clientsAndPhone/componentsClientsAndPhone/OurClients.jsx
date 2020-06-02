import React from "react";
import "../ClientsAndPhone.css";
import Boundary from "../../boundary/Boundary";
import Text from "antd/lib/typography/Text";
import clientPhotoOne from "../../../../images/imageClients/clientPhotoOne.png";
import clientPhotoTwo from "../../../../images/imageClients/clientPhotoTwo.png";
import clientPhotoThree from "../../../../images/imageClients/clientPhotoThree.png";
import { dataClientsAndPhone } from "./DataForClientsAndPhone";

const OurClients = () => {
  return (
    <div className="blockHomeOurClients">
      <div className="blockHomeGalleryTitleText">
        <div>
          <Text className="homeGalleryTitleText">
            {dataClientsAndPhone.titleClient}
          </Text>
        </div>
        <div>
          <Boundary />
        </div>
        <div className="blockHomeGallerySignatureText">
          <Text className="homeGallerySignatureText">
            {dataClientsAndPhone.descriptionClient}
          </Text>
        </div>
        <div>
          <Boundary />
        </div>
      </div>
      <div className="homeOurClientsImages">
        <div>
          <img alt="clientsImages" src={clientPhotoOne} />
        </div>
        <div>
          <img alt="clientsImages" src={clientPhotoTwo} />
        </div>
        <div>
          <img alt="clientsImages" src={clientPhotoThree} />
        </div>
      </div>
    </div>
  );
};
export default OurClients;
