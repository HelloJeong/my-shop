import { Badge, Button, PageHeader } from "antd";
import Layout, { Footer } from "antd/lib/layout/layout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useGoCart from "../hooks/useGoCart";
import { CartType, RootState } from "../type";
import style from "./Common.module.css";

const Common: React.FC = ({ children }) => {
  const count = useSelector<RootState, CartType[] | null>(
    (state) => state.cart.products
  )?.length;
  const goCart = useGoCart();

  return (
    <Layout className={style.layout}>
      <PageHeader
        className={style.header}
        title={
          <Link to="/">
            <h1 className={style.logo}>Jeong Mall</h1>
          </Link>
        }
        extra={[
          <Badge count={count} key="badge">
            <Button type="primary" className={style.button} onClick={goCart}>
              cart
            </Button>
          </Badge>,
        ]}
      />
      {children}
      <Footer>제작자 Jeong</Footer>
    </Layout>
  );
};

export default Common;
