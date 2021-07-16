import { createActions, handleActions } from "redux-actions";
import { ProductState, ProductType } from "../../type";


const initialState:ProductState = {
  products: null,
  loading: false,
  error: null
};

const prefix = "my-shop/product";

export const {pending, success, fail} = createActions("PENDING", "SUCCESS", "FAIL", {prefix});

const reducer = handleActions<ProductState, ProductType[]>({
  PENDING: (state)=> ({...state, loading: true, error: null}),
  SUCCESS: (state, action)=> ({products:action.payload, loading: false, error: null}),
  FAIL: (state, action: any)=> ({...state, loading: false, error: action.payload})
}, initialState, {prefix});

export default reducer;