import React from "react";
import { Layout } from "antd";
import "./Footer.css";
import Text from "antd/lib/typography/Text";

const { Footer: AntdFooter } = Layout;
const footerText = "$-industries ©2020 from Russia with love";

const Footer = () => {
  return (
    <AntdFooter className="blockFooter">
      <Text className="textFooter">{footerText}</Text>
    </AntdFooter>
  );
};
export default Footer;
