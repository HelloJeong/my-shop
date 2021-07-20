import { Button, Col, InputNumber, Row, Spin } from "antd";
import React, { useState } from "react";
import { ProductType } from "../type";
import Common from "./Common";
import style from "./Detail.module.css";

interface DetailProp {
  product: ProductType | undefined;
  loading: boolean;
  error: Error | null;
  addCart: (quantity: number) => void;
}

const Detail: React.FC<DetailProp> = ({ product, addCart, loading, error }) => {
  const [quantity, setQuantity] = useState<number>(1);

  if (product === undefined || loading) {
    return (
      <Common>
        <Spin />
      </Common>
    );
  }

  return (
    <Common>
      <Row>
        <Row className={style.content_wrap}>
          <div className={style.header_left}>
            <img
              src={product.img}
              alt={product.title}
              className={style.item_img}
            />
          </div>
          <div className={style.header_right}>
            <h2 className={style.item_title}>{product.title}</h2>
            <hr />
            <div className={style.item_price}>
              <span>
                {product.price.toLocaleString()}원
                {quantity > 1 &&
                  `(${(product.price * quantity).toLocaleString()}원)`}
              </span>
            </div>
            <div className={style.items_bottom}>
              <InputNumber
                min={1}
                max={10}
                size="large"
                defaultValue={1}
                className={style.item_quantity}
                value={quantity}
                onChange={change}
                onBlur={blur}
              />
              <Button
                type="primary"
                onClick={click}
                className={style.item_button}
              >
                add cart
              </Button>
            </div>
          </div>
        </Row>
        <Row className={style.content_wrap} style={{ marginBottom: "20px" }}>
          <Col className={style.content}>{product.content}</Col>
        </Row>
      </Row>
    </Common>
  );

  function blur() {
    if (quantity === null) {
      setQuantity(1);
    }
  }

  function change(value: number) {
    setQuantity(value);
  }

  function click() {
    addCart(quantity);
  }
};

export default Detail;
