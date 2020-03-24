import React from "react";
import { Table, Button, Form, Popconfirm } from "antd";
import { connect } from "react-redux";
import "./ShoppingBasket.css";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteFromBasket } from "../../store/actions/index";
import MaskedInput from "react-text-mask";
import { fetchWithAuth } from "../../utils/auth/auth";
import { isAuth } from "../../utils/auth/auth";
import Address from "../address/Address";
import { Link } from "react-router-dom";

const { Column } = Table;

const mapStateToProps = state => {
  return { objects: state.addReducer.objects };
};

const ShoppingBasket = props => {
  const { objects } = props;
  const totalAmount = objects
    .map(i => i.pricesAndSizes)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const handleDelete = id => {
    props.deleteFromBasket(id);
  };

  const greeting = isAuth();

  console.log(greeting);

  const onFinish = async ({ address, phone }) => {
    console.log(objects, totalAmount, address, phone);
    const response = await fetchWithAuth("//localhost:5050/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        objects,
        totalAmount,
        address,
        phone
      })
    });

    if (response.ok) {
      return;
    } else {
      window.alert("Ошибка HTTP: " + response.status);
    }
  };

  return (
    <div className="tableBasket">
      <Form onFinish={onFinish}>
        <p className="tableBasketText">Корзина товаров</p>
        <Table dataSource={objects}>
          >
          <Form.Item name="name">
            <Column title="Имя" dataIndex="name" key="name" />
          </Form.Item>
          <Form.Item name="id">
            <Column title="Id" dataIndex="id" key="id" />
          </Form.Item>
          <Form.Item name="sizes">
            <Column title="Размер" dataIndex="selected" key="selected" />
          </Form.Item>
          <Form.Item name="amount">
            <Column
              title="Количество"
              dataIndex="amoundselected"
              key="amoundselected"
            />
          </Form.Item>
          <Form.Item name="prices">
            <Column
              title="Цена"
              dataIndex="pricesAndSizes"
              key="pricesAndSizes"
            />
          </Form.Item>
          <Form.Item>
            <Column
              title="Операции"
              dataIndex="operation"
              render={(text, record) =>
                props.objects.length >= 1 ? (
                  <Popconfirm
                    title="Вы уверены?"
                    onConfirm={() => handleDelete(record)}
                  >
                    <DeleteOutlined
                      type="delete"
                      style={{ color: "hotpink", fontSize: "25px" }}
                    />
                  </Popconfirm>
                ) : null
              }
            />
          </Form.Item>
        </Table>
        <Form.Item name="summ">
          <div>
            <p className="tableBasketText">Итоговая сумма: {totalAmount}</p>
          </div>
        </Form.Item>
        <Form.Item name="address">
          <Address />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Телефон"
          rules={[
            {
              required: true,
              message: "Пожалуйска укажите свой номер телефона!"
            }
          ]}
        >
          <MaskedInput
            mask={[
              "+",
              "7",
              "(",
              /[0-9]/,
              /[0-9]/,
              /[0-9]/,
              ")",
              " ",
              /[0-9]/,
              /[0-9]/,
              /[0-9]/,
              "-",
              /[0-9]/,
              /[0-9]/,
              /[0-9]/,
              /[0-9]/
            ]}
            className="phone-control"
            placeholder="номер телефона без '8'"
            guide={false}
          />
        </Form.Item>
        <div className="bntCroup">
          <div className="bntOrder">
            <Button type="primary" htmlType="submit" disabled={!greeting}>
              Заказать
            </Button>
          </div>
          <div>
            <Link to="/catalog">
              <Button type="primary">Вернуться к выбору</Button>
            </Link>
          </div>
        </div>
        {!greeting && (
          <div>
            <p className="ErrorTextAauthorization">
              Вы не авторизованы, пожалуйста нажните на кнопку "авторизация"
            </p>
            <Link to="/login">
              <Button type="primary">Пожалуйста авторизуйтесь</Button>
            </Link>
          </div>
        )}
      </Form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteFromBasket: object => dispatch(deleteFromBasket(object))
});

const List = connect(mapStateToProps, mapDispatchToProps)(ShoppingBasket);

export default List;
