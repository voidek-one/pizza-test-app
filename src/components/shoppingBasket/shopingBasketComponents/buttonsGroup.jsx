import React from "react";
import "../ShoppingBasket.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import Text from "antd/lib/typography/Text";

const ButtonsGroup = props => {
  const greeting = props.isAuth;
  return (
    <>
      <div className="bntCroup">
        <div className="bntOrder">
          <Button type="primary" htmlType="submit" disabled={!greeting}>
            Заказать
          </Button>
        </div>
        <div>
          <NavLink to="/catalog">
            <Button type="primary">Вернуться к выбору</Button>
          </NavLink>
        </div>
      </div>
      {!greeting && (
        <div>
          <div className="blockErrorTextAauthorization">
            <Text className="errorTextAauthorization">
              Вы не авторизованы, пожалуйста нажните на кнопку "авторизация"
            </Text>
          </div>
          <NavLink to="/login">
            <div className="btnAuthorization">
              <Button type="primary">Пожалуйста авторизуйтесь</Button>
            </div>
          </NavLink>
        </div>
      )}
    </>
  );
};
export default ButtonsGroup;
