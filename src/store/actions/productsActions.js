const GET_PRODUCTS = "GET-PRODUCTS";

export const getProductsActionCreater = pizzas => {
  return { type: GET_PRODUCTS, pizzas };
};
