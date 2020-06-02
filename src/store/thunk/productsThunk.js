import { getProducts } from "../../api/Api";
import { getProductsActionCreater } from "../actions/productsActions";

export const getProductsThunkCreater = () => {
  return dispatch => {
    getProducts().then(pizzas => {
      dispatch(getProductsActionCreater(pizzas));
    });
  };
};
