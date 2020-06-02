import dataPizzas from "./pizzas.mock.json";
import user from "./user.mock.json";
export const getProducts = () => {
  return new Promise(resolve => {
    resolve(dataPizzas);
  });
};

export const sendBasket = params => {
  return new Promise(resolve => {
    resolve();
  });
};

export const register = params => {
  return new Promise(resolve => {
    resolve(user);
  });
};

export const login = params => {
  return new Promise(resolve => {
    resolve(user);
  });
};
