import { register, login } from "../../api/Api";
import { registerAction, loginAction } from "../actions/userActions";

export const registerThunk = () => {
  return dispatch => {
    register().then(user => {
      dispatch(registerAction(user));
    });
  };
};

export const loginThunk = () => {
  return dispatch => {
    login().then(user => {
      dispatch(loginAction(user));
    });
  };
};
