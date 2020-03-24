export function addInBasket(payload) {
  return { type: "ADD_OBJECTS_IN_BASCET", payload };
}
export function deleteFromBasket(payload) {
  return { type: "DELETE_OBJECT_FROM_BASCET", payload };
}
