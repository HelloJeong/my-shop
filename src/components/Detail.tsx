import { Col, Row, Spin } from "antd";
import React from "react";
import { ProductType } from "../type";
import Common from "./Common";

interface DetailProp {
  product: ProductType | undefined;
}

const Detail: React.FC<DetailProp> = ({ product }) => {
  if (product === undefined) {
    return <Spin />;
  }

  return (
    <Common>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col xs={24} sm={12}>
          {product.img}
        </Col>
        <Col xs={24} sm={12}>
          {product.title}
        </Col>
      </Row>
    </Common>
  );
};

export default Detail;
