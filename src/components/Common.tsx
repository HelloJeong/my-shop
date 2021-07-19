import { Button, PageHeader } from "antd";
import Layout, { Footer } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import useGoCart from "../hooks/useGoCart";
import style from "./Common.module.css";

const Common: React.FC = ({ children }) => {
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
          <Button
            key="1"
            type="primary"
            className={style.button}
            onClick={goCart}
          >
            cart
          </Button>,
        ]}
      />
      {children}
      <Footer>제작자 Jeong</Footer>
    </Layout>
  );
};

export default Common;
