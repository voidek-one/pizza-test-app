import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import basketReducer from "../reducers/basketReducer";
import userReducer from "../reducers/userReducer";
import productsReducer from "../reducers/productsReducer";
import persistState from "redux-localstorage";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(persistState(), applyMiddleware(thunk));

const rootReducer = combineReducers({
  basketReducer,
  productsReducer,
  userReducer
});

const store = createStore(rootReducer, enhancer);

export default store;
