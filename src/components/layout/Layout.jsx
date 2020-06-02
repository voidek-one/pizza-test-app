import React from "react";
import { Layout } from "antd";
import "./Layout.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const PageLayout = (props) => {
  return (
    <Layout className="layout">
      <Header></Header>
      <div className="layoutContent">{props.children}</div>
      <Footer></Footer>
    </Layout>
  );
};

export default PageLayout;
