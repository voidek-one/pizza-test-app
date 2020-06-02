import React from "react";
import { Form, Input, Button } from "antd";
import { NavLink } from "react-router-dom";
import "./Registration.css";

export const RegistrationForm = ({ form, onFinish }) => {
  const layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      lg: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      lg: { span: 18 }
    }
  };
  const tailLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      lg: {
        span: 16,
        offset: 4
      }
    }
  };

  return (
    <Form
      className="registrationForm"
      form={form}
      {...layout}
      onFinish={onFinish}
      name="basic"
    >
      <Form.Item
        label="Имя"
        name="name"
        rules={[
          { required: true, message: "Пожалуйста введите своё имя!" },
          {
            max: 20,
            message: "Слишком длинный!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            message: "Введите настоящий email"
          },
          {
            required: true,
            message: "Пожалуйста введите свой email!"
          },
          {
            max: 30,
            message: "Слишком длинный!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[
          {
            required: true,
            message: "Пожалуйста введите пароль!"
          },
          {
            max: 20,
            message: "Слишком длинный!"
          },
          {
            min: 5,
            message: "Слишком короткий!"
          }
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Повторите пароль"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Пожалуйста повторите пароль!"
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Пароли не совпадают!");
            }
          })
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Регистрация
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <NavLink to="/login">
          <Button>У меня уже есть аккаунт</Button>
        </NavLink>
      </Form.Item>
    </Form>
  );
};
export default RegistrationForm;
