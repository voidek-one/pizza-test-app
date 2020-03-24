import React, { useState } from "react";
import { Button, Select, Form } from "antd";
import { connect } from "react-redux";
import { addInBasket } from "../../../store/actions/index";
import MaskedInput from "react-text-mask";
import "./PizzaItem.css";
function mapDispatchToProps(dispatch) {
  return {
    addInBasket: objects => dispatch(addInBasket(objects))
  };
}

const { Option } = Select;
export const PizzaItem = props => {
  const sizes = { mini: "mini", average: "average", maxi: "maxi" };
  const pizza = props.pizza;
  const prices = { [sizes.mini]: 500, [sizes.average]: 700, [sizes.maxi]: 900 };
  const [currentSize, setCurrentSize] = useState(sizes.mini);
  const [count, setCount] = useState(1);
  const pricesAndSizes = prices[currentSize] * count;

  const onFinish = ({ selected, amoundselected }) => {
    if (amoundselected) {
      props.addInBasket({
        name: pizza.name,
        id: pizza.id,
        pricesAndSizes,
        selected,
        amoundselected: Number(amoundselected)
      });
    }
  };
  const [form] = Form.useForm();

  return (
    <div>
      <div className="pizzaItemCart">
        <div className="pizzaItemName">{pizza.name}</div>
        <div className="pizzaItemImg">
          <img src="https://www.citypizza.ru/upload/img/shop/pizza/BORT/resize/%D1%81-%D1%82%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D1%8B%D0%BC%D0%B8-%D0%BA%D1%80%D0%B5%D0%B2%D0%B5%D1%82%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B1%D0%BE%D1%80%D1%82-listThumb.jpg" />
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
              <p className="pizzaItemPrice">{pricesAndSizes}</p>
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
    </div>
  );
};

const FormPizzaItem = connect(null, mapDispatchToProps)(PizzaItem);

export default FormPizzaItem;
