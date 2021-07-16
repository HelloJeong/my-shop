import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import product from './product';
import cart from './cart';
import { History } from "history";

const reducer = (history: History<unknown>) => 
  combineReducers(
    {
      product,
      cart,
      router:connectRouter(history)
    }
  );

export default reducer;