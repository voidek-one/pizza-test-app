import { sendBasket } from "../../api/Api";
import { sendDataForServerAction } from "../actions/basketActions";

export const sendDataForServerThunk = params => {
  return dispatch => {
    sendBasket(params).then(() => {
      dispatch(sendDataForServerAction());
    });
  };
};
