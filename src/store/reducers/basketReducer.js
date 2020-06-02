const initialState = {
  products: []
};

function addProductsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_OBJECTS_IN_BASCET":
      const itemExist = state.products.find(function(product) {
        return (
          product.id === action.payload.id &&
          product.selected === action.payload.selected
        );
      });
      if (itemExist) {
        itemExist.pricesAndSizes =
          itemExist.pricesAndSizes + action.payload.pricesAndSizes;
        itemExist.amoundselected =
          itemExist.amoundselected + action.payload.amoundselected;
        return { ...state, products: [...state.products] };
      } else {
        return {
          ...state,
          products: state.products.concat(action.payload)
        };
      }
    case "DELETE_OBJECT_FROM_BASCET":
      return {
        ...state,
        products: state.products.filter(
          item =>
            item.id !== action.payload.id ||
            (item.id === action.payload.id &&
              item.selected !== action.payload.selected)
        )
      };
    case "SEND_DATA_FOR_SERVER_SUCCESS":
      return {
        ...state,
        products: []
      };
    default:
      return state;
  }
}

export default addProductsReducer;
