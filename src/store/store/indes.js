import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import persistState from "redux-localstorage";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(persistState());

const store = createStore(rootReducer, enhancer);

export default store;
