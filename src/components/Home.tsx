import { Col, Row, Spin } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../type";
import Common from "./Common";
import style from "./Home.module.css";

interface HomeProp {
  products: ProductType[] | null;
  loading: boolean;
  error: Error | null;
}

function makeCol(product: ProductType) {
  return (
    <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
      <Link to={`/product/${product.id}`}>
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
            <span className={style.item_price}>
              {product.price.toLocaleString()}
            </span>
          </div>
        </div>
      </Link>
    </Col>
  );
}

const Home: React.FC<HomeProp> = ({ products, loading, error }) => {
  return (
    <Common>
      {loading ? (
        <Content>
          <Spin />
        </Content>
      ) : (
        <Content>
          <Row
            gutter={[
              { xs: 8, sm: 16, md: 24, lg: 32 },
              { xs: 8, sm: 16, md: 24, lg: 32 },
            ]}
          >
            {products?.map((product) => makeCol(product))}
          </Row>
        </Content>
      )}
    </Common>
  );
};

export default Home;
