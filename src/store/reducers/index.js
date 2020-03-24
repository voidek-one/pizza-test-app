import { combineReducers } from "redux";

const initialState = {
  objects: []
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_OBJECTS_IN_BASCET":
      const itemExist = state.objects.find(function(object) {
        return (
          object.id === action.payload.id &&
          object.selected === action.payload.selected
        );
      });
      if (itemExist) {
        itemExist.pricesAndSizes =
          itemExist.pricesAndSizes + action.payload.pricesAndSizes;
        itemExist.amoundselected =
          itemExist.amoundselected + action.payload.amoundselected;
        return { ...state, objects: [...state.objects] };
      } else {
        return {
          ...state,
          objects: state.objects.concat(action.payload)
        };
      }
    case "DELETE_OBJECT_FROM_BASCET":
      return {
        ...state,
        objects: state.objects.filter(
          item =>
            item.id !== action.payload.id ||
            (item.id === action.payload.id &&
              item.selected !== action.payload.selected)
        )
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ addReducer });

export default rootReducer;
