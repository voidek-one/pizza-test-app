import React, { useState } from "react";
import { Form } from "antd";
import "./PizzaItem.css";
import PizzaItemPure from "./PizzaitemPure";

const PizzaItem = props => {
  const pizza = props.pizza;
  const sizes = { mini: "mini", average: "average", maxi: "maxi" };
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
    <PizzaItemPure
      {...{
        pizza,
        sizes,
        pricesAndSizes,
        setCurrentSize,
        setCount,
        form,
        onFinish
      }}
    />
  );
};

export default PizzaItem;
