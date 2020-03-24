import React from "react";
import { message, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./Registration.css";

export const RegistrationForm = () => {
  const layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };
  const tailLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 4
      }
    }
  };

  const onFinish = async ({ name, email, password }) => {
    const hide = message.loading("Action in progress..");
    let response = await fetch("//localhost:5050/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });
    hide();
    if (response.ok) {
      message.success("Loading finished");
      window.location.assign("http://localhost:3000/login");
      return;
    } else {
      message.error("Ошибка HTTP: " + response.status);
    }
  };

  const [form] = Form.useForm();
  return (
    <Form
      className="registrationForm"
      form={form}
      {...layout}
      onFinish={onFinish}
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          { required: true, message: "Пожалуйста введите своё имя!" },
          {
            max: 50,
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
            max: 100,
            message: "Слишком длинный!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Пожалуйста введите пароль!"
          }
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
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
        <Link to="/login">
          <Button>У меня уже есть аккаунт</Button>
        </Link>
      </Form.Item>
    </Form>
  );
};
export default RegistrationForm;
