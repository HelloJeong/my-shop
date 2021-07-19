import { RouterState } from "connected-react-router";
import { Reducer } from "react";
import { AnyAction } from "redux";
export interface ProductType {
  id: number;
  title: string;
  content: string;
  price: number;
  md: boolean;
  img: string;
}

export interface ProductState {
  products: ProductType[] | null;
  loading: boolean;
  error: Error | null;
}

export interface CartType {
  product: ProductType;
  quantity: number;
}

export interface CartState {
  products: CartType[] | null;
  loading: boolean;
  error: Error | null;
}

export interface RootState {
  products: ProductState;
  carts: CartState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}
