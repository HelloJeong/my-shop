import { Button, Card, Col, Empty, InputNumber, Row } from "antd";
import React from "react";
import { CartType } from "../type";
import Common from "./Common";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";

interface CartProp {
  carts: CartType[] | null;
}

const Cart: React.FC<CartProp> = ({ carts }) => {
  console.log(carts);

  if (carts === null) {
    return (
      <Common>
        <Card title="장바구니" className={style.cart_wrap}>
          <Empty />
        </Card>
      </Common>
    );
  }

  return (
    <Common>
      <Card title="장바구니" className={style.cart_wrap}>
        <Card type="inner">
          {carts.map((cart) => {
            return (
              <Row gutter={12} align="middle" className={style.info_wrap}>
                <Col xs={3} className={style.info_img}>
                  <img
                    src={cart.product.img}
                    alt={cart.product.title}
                    className={style.item_img}
                  />
                </Col>
                <Col xs={12}>
                  <Link
                    to={`/product/${cart.product.id}`}
                    className={style.item_link}
                  >
                    {cart.product.title}
                  </Link>
                </Col>
                <Col xs={3} className={style.info_input}>
                  <InputNumber
                    min={1}
                    max={10}
                    size="middle"
                    defaultValue={1}
                    className={style.item_quantity}
                    value={cart.quantity}
                    // onChange={change}
                    // onBlur={blur}
                  />
                </Col>
                <Col xs={3} className={style.info_price}>
                  <span className={style.total_price}>
                    {`${(
                      cart.product.price * cart.quantity
                    ).toLocaleString()}원`}
                  </span>
                  <span className={style.product_price}>
                    (원가 {cart.product.price.toLocaleString()}원)
                  </span>
                </Col>
                <Col xs={3} className={style.info_delete}>
                  <Button onClick={deleteCart}>삭제</Button>
                </Col>
              </Row>
            );
          })}
        </Card>
        <div className={style.carts_total_price}>
          <span>
            {carts
              .reduce(
                (prev, curr) => prev + curr.product.price * curr.quantity,
                0
              )
              .toLocaleString()}
            원
          </span>
        </div>
      </Card>
    </Common>
  );

  function deleteCart() {}
};

export default Cart;
