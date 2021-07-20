import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import { ProductType, RootState } from "../type";
import { addCart as addCartSagaStart } from "../redux/modules/cart";

interface ParamsType {
  id: string;
}

export default function DetailContainer() {
  const dispatch = useDispatch();
  const { id } = useParams<ParamsType>();

  const product = useSelector<RootState, ProductType[] | null>(
    (state) => state.products.products
  )?.find((p) => p.id === +id);

  const loading = useSelector<RootState, boolean>(
    (state) => state.cart.loading
  );

  const error = useSelector<RootState, Error | null>(
    (state) => state.cart.error
  );

  const addCart = (quantity: number) => {
    dispatch(addCartSagaStart({ product, quantity }));
  };

  return (
    <Detail
      product={product}
      addCart={addCart}
      loading={loading}
      error={error}
    />
  );
}
