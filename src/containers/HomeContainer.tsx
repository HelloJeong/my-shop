import { push } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Home from "../components/Home";

export default function HomeContainer() {
  const dispatch = useDispatch();
  const goCart = useCallback(() => {
    dispatch(push("/cart"));
  }, [dispatch]);
  const getProduct = useCallback(() => {}, [dispatch]);
  return <Home goCart={goCart} getProduct={getProduct} />;
}
