import React from "react";
import { Form, Input, Button } from "antd";
import "./LogIn.css";
import { getTokenData } from "../../utils/auth/auth";
import { Link } from "react-router-dom";

export default class LogIn extends React.Component {
  state = { error: "" };
  onSubmit = async ({ email, password }) => {
    try {
      await getTokenData(email, password);

      window.location.assign("http://localhost:3000/catalog");
    } catch (e) {
      this.setState({ error: "Логин или пароль введены не коректно" });
    }
  };

  layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 }
  };
  tailLayout = {
    wrapperCol: { offset: 4, span: 16 }
  };

  render() {
    return (
      <Form
        className="loginForm"
        onFinish={this.onSubmit}
        name="basic"
        initialValues={{ remember: true }}
      >
        <Form.Item
          {...this.layout}
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
          {...this.layout}
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Пожалуйста введите свой пароль!" }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="loginErrorText">
          {this.state.error && <p>{this.state.error}</p>}
        </div>
        <Form.Item {...this.tailLayout}>
          <div className="btnAndTextGroup">
            <div>
              <Button type="primary" htmlType="submit">
                Вход
              </Button>
            </div>
            <div>
              <p>Вы еще не зарегистрированы?</p>
            </div>
            <div>
              <Link to="/registration">
                <Button type="primary">Регистрация</Button>
              </Link>
            </div>
          </div>
        </Form.Item>
      </Form>
    );
  }
}
