import { useSelector } from "react-redux";
import Cart from "../components/Cart";
import { CartType, RootState } from "../type";

export default function CartContainer() {
  const carts = useSelector<RootState, CartType[] | null>(
    (state) => state.cart.products
  );
  return <Cart carts={carts} />;
}
