import React from "react";
import { Form, Input, Button } from "antd";
import "./LogIn.css";
import { NavLink } from "react-router-dom";
import Text from "antd/lib/typography/Text";

const LogIn = ({ form, onFinish }) => {
  const layout = {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 16
    }
  };

  return (
    <Form className="loginForm" onFinish={onFinish} name="basic" form={form}>
      <Form.Item
        {...layout}
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Пожалуйста введите свой email!" },
          {
            type: "email",
            message: "Введите настоящий email"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        {...layout}
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Пожалуйста введите свой пароль!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <div className="btnAndTextGroup">
          <div>
            <Button type="primary" htmlType="submit">
              Вход
            </Button>
          </div>
          <div className="textNoRegistrastion">
            <Text>Вы еще не зарегистрированы?</Text>
          </div>
          <div>
            <NavLink to="/registration">
              <Button type="primary">Регистрация</Button>
            </NavLink>
          </div>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LogIn;
