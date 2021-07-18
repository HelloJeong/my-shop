import { createActions, handleActions } from "redux-actions";
import { ProductState, ProductType } from "../../type";
import { put, call, takeLatest } from "@redux-saga/core/effects";
import ProductService from "../../services/ProductService";

const initialState: ProductState = {
  products: null,
  loading: false,
  error: null,
};

const prefix = "my-shop/product";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions<ProductState, ProductType[]>(
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

export const { getProducts, addProduct, updateProduct, deleteProduct } =
  createActions(
    "GET_PRODUCTS",
    "ADD_PRODUCT",
    "UPDATE_PRODUCT",
    "DELETE_PRODUCT",
    { prefix }
  );

function* getProductsSaga() {
  try {
    yield put(pending());
    const products: ProductType[] = yield call(ProductService.getProducts);
    console.log(products);
    yield put(success(products));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

export function* productSaga() {
  yield takeLatest(`${prefix}/GET_PRODUCTS`, getProductsSaga);
}
