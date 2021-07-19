import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import { ProductType, RootState } from "../type";

interface ParamsType {
  id: string;
}

export default function DetailContainer() {
  const { id } = useParams<ParamsType>();
  const product = useSelector<RootState, ProductType[] | null>(
    (state) => state.products.products
  )?.find((p) => p.id === +id);
  return <Detail product={product} />;
}
