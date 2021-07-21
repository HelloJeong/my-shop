import { takeEvery, call, put, select } from "@redux-saga/core/effects";
import { createActions, handleActions, Action } from "redux-actions";
import CartService from "../../services/CartService";
import { CartState, CartType } from "../../type";

const initialState: CartState = {
  products: null,
  loading: false,
  error: null,
};

const prefix = "my-shop/cart";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions<CartState, CartType[]>(
  {
    PENDING: (state) => ({ ...state, loading: true, error: null }),
    SUCCESS: (state, action) => ({
      products: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

// saga

export const { getCarts, addCart, updateCart, deleteCart } = createActions(
  "GET_CARTS",
  "ADD_CART",
  "UPDATE_CART",
  "DELETE_CART",
  { prefix }
);

function* addCartSaga(action: Action<CartType>) {
  try {
    yield put(pending());
    const cart: CartType = yield call(CartService.addCart, action.payload);
    const carts: CartType[] = yield select((state) => state.cart.products);
    if (carts) {
      const find = carts.findIndex((c) => c.product.id === cart.product.id);
      if (find !== -1) {
        carts[find].quantity += cart.quantity;
        yield put(success([...carts]));
      } else {
        yield put(success([...carts, cart]));
      }
    } else {
      yield put(success([cart]));
    }
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

function* updateCartSaga(action: Action<CartType>) {
  try {
    yield put(pending());
    const carts: CartType[] = yield select((state) => state.cart.products);
    const find = carts.findIndex(
      (cart) => cart.product.id === action.payload.product.id
    );
    carts[find].quantity = action.payload.quantity;
    yield put(success([...carts]));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

function* deleteCartSaga(action: Action<number>) {
  try {
    yield put(pending());
    const carts: CartType[] = yield select((state) => state.cart.products);
    const filter: CartType[] = carts.filter(
      (cart) => cart.product.id !== action.payload
    );
    yield put(success(filter));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

export function* cartSaga() {
  yield takeEvery(`${prefix}/ADD_CART`, addCartSaga);
  yield takeEvery(`${prefix}/UPDATE_CART`, updateCartSaga);
  yield takeEvery(`${prefix}/DELETE_CART`, deleteCartSaga);
}
