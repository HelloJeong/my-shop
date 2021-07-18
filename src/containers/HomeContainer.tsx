import { push } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../components/Home";
import { getProducts as getProductsSagaStart } from "../redux/modules/product";
import { ProductType, RootState } from "../type";

export default function HomeContainer() {
  const dispatch = useDispatch();

  const products = useSelector<RootState, ProductType[] | null>(
    (state) => state.products.products
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.products.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.products.error
  );

  const goCart = useCallback(() => {
    dispatch(push("/cart"));
  }, [dispatch]);

  const getProducts = useCallback(() => {
    dispatch(getProductsSagaStart());
  }, [dispatch]);

  return (
    <Home
      products={products}
      loading={loading}
      error={error}
      goCart={goCart}
      getProducts={getProducts}
    />
  );
}
