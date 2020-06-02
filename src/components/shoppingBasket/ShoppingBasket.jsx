import React from "react";
import "./ShoppingBasket.css";
import { Form } from "antd";
import { connect } from "react-redux";
import { deleteFromBasket } from "../../store/actions/basketActions";
import Address from "../address/Address";
import PhoneNumber from "./shopingBasketComponents/PhoneNumber";
import ButtonsGroup from "./shopingBasketComponents/buttonsGroup";
import ShoppingBasketTable from "./shopingBasketComponents/ShoppingBasketTable";
import { sendDataForServerThunk } from "../../store/thunk/basketThunk";
import Text from "antd/lib/typography/Text";

const ShoppingBasket = props => {
  const { products, isAuth } = props;
  const totalAmount = products
    .map(i => i.pricesAndSizes)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const handleDelete = id => {
    props.deleteFromBasket(id);
  };

  const onFinish = ({ address, phone }) => {
    props.sendDataForServer(products, totalAmount, address, phone);

    window.location.assign("/catalog");
  };

  return (
    <div className="tableBasket">
      {totalAmount ? (
        <div>
          {" "}
          <ShoppingBasketTable {...{ products, handleDelete, totalAmount }} />
          <Form onFinish={onFinish}>
            <Address />
            <PhoneNumber />
            <ButtonsGroup isAuth={isAuth} />
          </Form>
        </div>
      ) : (
        <div className="blockTextCartIsEmpty">
          <Text className="textCartIsEmpty">
            Корзина пуста, добавьте какой нибудь товар в корзину=)
          </Text>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.basketReducer.products,
    isAuth: !!state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => ({
  deleteFromBasket: product => dispatch(deleteFromBasket(product)),
  sendDataForServer: (products, totalAmount, address, phone) =>
    dispatch(sendDataForServerThunk({ products, totalAmount, address, phone }))
});

const List = connect(mapStateToProps, mapDispatchToProps)(ShoppingBasket);

export default List;
