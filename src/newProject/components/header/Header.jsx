import React, { Component } from "react";
import { PageHeader, Button, Layout, Menu } from "antd";
import "./Header.css";

const { Header: AntdHeader, Content, Footer } = Layout;

// const routes = { [key]: { key, path } };

export default class Header extends Component {
  currentPath = "";
  constructor(props) {
    super(props);
    // const activeRoute = Object.entries(routes).find(([key, value]) => {
    //   const windowPath = `${window.location.pathname}${window.location.hash}`;
    //   return value.path === windowPath;
    // });
    // if (activeRoute) {
    //   const [key] = activeRoute;
    //   this.currentPath = key;
    // }
  }
  render() {
    return (
      <div
        style={{
          padding: 24
        }}
      >
        <div className="headertest">
          <AntdHeader className="header">
            <div>
              <img
                className="logo"
                src="https://pizzeriafrumento.com/wp-content/uploads/2019/06/frumento_logo.png"
              />
            </div>
            <Menu
              className="testmenu"
              theme="light"
              mode="horizontal"
              // defaultSelectedKeys={[
              //   this.currentPath ? routes[this.currentPath].key.toString() : "0"
              // ]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <a href="http://localhost:3000/home" rel="noopener noreferrer">
                  Home
                </a>
              </Menu.Item>
              <Menu.Item key="2">
                <a
                  href="http://localhost:3000/catalog"
                  rel="noopener noreferrer"
                >
                  Catalog
                </a>
              </Menu.Item>
              <Menu.Item key="3">
                <a href="http://localhost:3000/order" rel="noopener noreferrer">
                  Order
                </a>
              </Menu.Item>
            </Menu>
          </AntdHeader>
        </div>
      </div>
    );
  }
}
