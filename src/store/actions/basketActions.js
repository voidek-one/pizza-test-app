export function addInBasket(payload) {
  return { type: "ADD_OBJECTS_IN_BASCET", payload };
}
export function deleteFromBasket(payload) {
  return { type: "DELETE_OBJECT_FROM_BASCET", payload };
}
export const sendDataForServerAction = () => {
  return { type: "SEND_DATA_FOR_SERVER_SUCCESS" };
};
