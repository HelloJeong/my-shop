import { Button, Col, PageHeader, Row } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { ProductType } from "../type";
import style from "./Home.module.css";

interface HomeProp {
  products: ProductType[] | null;
  loading: boolean;
  error: Error | null;
  goCart: () => void;
  getProducts: () => void;
}

const Home: React.FC<HomeProp> = ({
  products,
  loading,
  error,
  goCart,
  getProducts,
}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Layout className={style.layout}>
      <PageHeader
        className={style.header}
        title={<h1 className={style.logo}>Jeong Mall</h1>}
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
      {loading ? (
        <Content>Loading ...</Content>
      ) : (
        <Content>
          <Row
            gutter={[
              { xs: 8, sm: 16, md: 24, lg: 32 },
              { xs: 8, sm: 16, md: 24, lg: 32 },
            ]}
          >
            {products?.map((product) => (
              <Col xs={24} sm={12} md={8} lg={6}>
                <div className={style.item_box}>
                  <img
                    src={product.img}
                    alt={product.title}
                    className={style.item_img}
                  />
                  <div className={style.item_info} title={product.title}>
                    {product.md && (
                      <img
                        src="images/recommended.png"
                        alt="md추천"
                        className={style.item_md}
                      />
                    )}
                    <h2 className={style.item_title}>{product.title}</h2>
                    <span className={style.item_price}>{product.price}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Content>
      )}
      <Footer>제작자 Jeong</Footer>
    </Layout>
  );
};

export default Home;
