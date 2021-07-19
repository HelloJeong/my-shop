import { push } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export default function useGoCart() {
  const dispatch = useDispatch();

  const goCart = useCallback(() => {
    dispatch(push("/cart"));
  }, [dispatch]);

  return goCart;
}
