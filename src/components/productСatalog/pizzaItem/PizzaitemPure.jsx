import React from "react";
import "./PizzaItem.css";
import { Button, Select, Form } from "antd";
import MaskedInput from "react-text-mask";
import Text from "antd/lib/typography/Text";

const { Option } = Select;

const PizzaItemPure = ({
  pizza,
  sizes,
  pricesAndSizes,
  setCurrentSize,
  setCount,
  form,
  onFinish
}) => {
  return (
    <div className="pizzaItemCart">
      <div className="pizzaItemName">
        <Text className="nameOfProduct">{pizza.name}</Text>
      </div>
      <div className="pizzaItemImg">
        <img className="imagesCatalog" alt="pizza" src={pizza.avatar} />
      </div>
      <div className="descriptionCatalog">
        <Text>{pizza.description}</Text>
      </div>
      <Form
        onFinish={onFinish}
        name="formOrders"
        form={form}
        initialValues={{
          selected: sizes.mini,
          amoundselected: 1
        }}
      >
        <Form.Item name="pricePizzas">
          <div>
            <Text className="pizzaItemPrice">{pricesAndSizes}</Text>
          </div>
        </Form.Item>
        <div className="pizzaItemSelect">
          <Form.Item name="selected">
            <Select
              style={{ width: 120 }}
              onChange={value => setCurrentSize(value)}
            >
              <Option value={sizes.mini}>20см</Option>
              <Option value={sizes.average}>25см</Option>
              <Option value={sizes.maxi}>30см</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="pizzaItemAmount">
          <Form.Item
            name="amoundselected"
            rules={[
              {
                required: true,
                message: "Обязательно введите количество"
              }
            ]}
          >
            <MaskedInput
              mask={[/[1-9]/]}
              placeholder="Введите количество"
              guide={false}
              style={{ width: 120 }}
              onChange={e => setCount(e.target.value)}
            />
          </Form.Item>
        </div>
        <div className="pizzaItemBtn">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Добавить в корзину
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
export default PizzaItemPure;
