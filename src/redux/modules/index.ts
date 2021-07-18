import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import products from "./product";
import cart from "./cart";
import { History } from "history";

const reducer = (history: History<unknown>) =>
  combineReducers({
    products,
    cart,
    router: connectRouter(history),
  });

export default reducer;
