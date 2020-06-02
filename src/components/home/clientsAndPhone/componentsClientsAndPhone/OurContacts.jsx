import React from "react";
import "../ClientsAndPhone.css";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import { dataClientsAndPhone } from "./DataForClientsAndPhone";

const OurContacts = () => {
  return (
    <div className="blockHomeOurContacts">
      <div className="blockHomeOurContactsPhoneAndAddress">
        <Text className="homeGalleryTitleText">
          {dataClientsAndPhone.titleContact}
        </Text>
      </div>
      <div className="homeOurContactsPhoneAndAddress">
        <div className="homeOurContactsPhone">
          <div className="homeOurContacts">
            <div>
              <PhoneOutlined className="iconContacts" />
            </div>
            <div>
              <Text className="homeOurContactsText">
                {dataClientsAndPhone.phone}
              </Text>
            </div>
          </div>
          <div className="homeOurContacts">
            <div>
              <WhatsAppOutlined className="iconContacts" />
            </div>
            <div>
              <Text className="homeOurContactsText">
                {dataClientsAndPhone.phone}
              </Text>
            </div>
          </div>
        </div>
        <div>
          <div className="homeOurContacts">
            <div>
              <MailOutlined className="iconContacts" />
            </div>
            <div>
              <Text className="homeOurContactsText">
                {dataClientsAndPhone.webSite}
              </Text>
            </div>
          </div>
          <div className="homeOurContacts">
            <div>
              <EnvironmentOutlined className="iconContacts" />
            </div>
            <div>
              <Text className="homeOurContactsText">
                {dataClientsAndPhone.addres}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurContacts;
