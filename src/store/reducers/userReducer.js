const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";

let initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      return { ...state, user: { ...action.user } };
    }
    case LOGIN_USER: {
      return { ...state, user: { ...action.user } };
    }
    default:
      return state;
  }
};

export default userReducer;
