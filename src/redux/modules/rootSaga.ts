import { all } from "@redux-saga/core/effects";
import { productSaga } from "./product";
import { cartSaga } from "./cart";

export default function* rootSaga() {
  yield all([productSaga(), cartSaga()]);
}
