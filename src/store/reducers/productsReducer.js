const GET_PRODUCTS = "GET-PRODUCTS";

let initialState = {
  pizzas: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return { ...state, pizzas: [...action.pizzas] };
    }
    default:
      return state;
  }
};

export default productsReducer;
