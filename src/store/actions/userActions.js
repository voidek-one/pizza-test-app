export const registerAction = user => {
  return { type: "REGISTER_USER", user };
};

export const loginAction = user => {
  return { type: "LOGIN_USER", user };
};
