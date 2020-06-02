import React from "react";
import { Layout, Menu } from "antd";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";

const { Header: AntdHeader } = Layout;
const Header = () => {
  return (
    <div>
      <AntdHeader className="header">
        <div>
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <Menu className="menuHeader" theme="light" mode="horizontal">
          <Menu.Item key="1">
            <NavLink to="/">Главная</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/catalog">Каталог</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/basket">Корзина</NavLink>
          </Menu.Item>
        </Menu>
      </AntdHeader>
    </div>
  );
};
export default Header;
