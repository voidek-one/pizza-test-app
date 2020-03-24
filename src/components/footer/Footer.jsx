import React, { Component } from "react";
import { Layout } from "antd";

const { Footer: AntdFooter } = Layout;
class Footer extends Component {
  render() {
    return (
      <AntdFooter style={{ textAlign: "center" }}>
        Voidek-industries ©2020 from Russia with love
      </AntdFooter>
    );
  }
}

export default Footer;
