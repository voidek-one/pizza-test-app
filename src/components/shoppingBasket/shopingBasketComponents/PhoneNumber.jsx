import React from "react";
import "../ShoppingBasket.css";
import { Form } from "antd";
import MaskedInput from "react-text-mask";

export default function PhoneNumber() {
  return (
    <Form.Item
      name="phone"
      label="Телефон"
      rules={[
        {
          required: true,
          message: "Пожалуйска укажите свой номер телефона!"
        },
        {
          min: 16,
          message: "Введите правильный номер телефона!"
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
  );
}
