import React from "react";
import "./LogIn.css";
import { message, Form } from "antd";
import { connect } from "react-redux";
import { loginThunk } from "../../store/thunk/userThunk";
import LogIn from "./LogIn";

const LogInContainer = props => {
  const onFinish = params => {
    const hide = message.loading("Action in progress..");
    props.login(params);
    hide();
    message.success("Loading finished");
    window.location.assign("/catalog");
  };

  const [form] = Form.useForm();

  return <LogIn {...{ form, onFinish }} />;
};

const mapStateToProps = state => {
  return {
    isAuth: !!state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: params => dispatch(loginThunk(params))
  };
};

const LogInConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInContainer);
export default LogInConnect;
