import { useSelector } from "react-redux";
import Home from "../components/Home";
import { ProductType, RootState } from "../type";

export default function HomeContainer() {
  const products = useSelector<RootState, ProductType[] | null>(
    (state) => state.products.products
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.products.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.products.error
  );

  return <Home products={products} loading={loading} error={error} />;
}
