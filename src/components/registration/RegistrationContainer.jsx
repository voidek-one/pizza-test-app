import React from "react";
import { Form, message } from "antd";
import "./Registration.css";
import RegistrationForm from "./Registration";
import { connect } from "react-redux";
import { registerThunk } from "../../store/thunk/userThunk";

export const RegistrationContainer = props => {
  const onFinish = params => {
    const hide = message.loading("Action in progress..");
    props.register(params);
    hide();
    message.success("Loading finished");
    window.location.assign("/login");
  };

  const [form] = Form.useForm();

  return <RegistrationForm {...{ form, onFinish }} />;
};

const mapDispatchToProps = dispatch => {
  return {
    register: params => dispatch(registerThunk(params))
  };
};

const Registration = connect(null, mapDispatchToProps)(RegistrationContainer);
export default Registration;
