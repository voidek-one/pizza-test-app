import React, { Component } from "react";
import { Layout } from "antd";
import "./Layout.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

class PageLayout extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header></Header>
        <div className="loyout__content">{this.props.children}</div>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default PageLayout;
