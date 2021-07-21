import { Button, Card, Col, Empty, InputNumber, Row } from "antd";
import React, { useState } from "react";
import { CartType } from "../type";
import Common from "./Common";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCart as updateCartSagaStart } from "../redux/modules/cart";

interface CartProp {
  carts: CartType[] | null;
}

interface ItemProp {
  item: CartType;
}

const Item: React.FC<ItemProp> = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <>
      <Col span={4} className={style.info_img}>
        <Link to={`/product/${item.product.id}`} className={style.item_link}>
          <img
            src={item.product.img}
            alt={item.product.title}
            className={style.item_img}
          />
        </Link>
      </Col>
      <Col span={10}>
        <Link to={`/product/${item.product.id}`} className={style.item_link}>
          {item.product.title}
        </Link>
      </Col>
      <Col span={3} className={style.info_input}>
        <InputNumber
          min={1}
          max={10}
          size="middle"
          defaultValue={1}
          className={style.item_quantity}
          value={quantity}
          onChange={change}
          onBlur={blur}
        />
      </Col>
      <Col span={4} className={style.info_price}>
        <span className={style.total_price}>
          {`${(item.product.price * item.quantity).toLocaleString()}원`}
        </span>
        <span className={style.product_price}>
          (원가 {item.product.price.toLocaleString()}원)
        </span>
      </Col>
      <Col span={3} className={style.info_delete}>
        <Button onClick={deleteCart}>삭제</Button>
      </Col>
    </>
  );

  function deleteCart() {}
  function change(value: number) {
    setQuantity(value);
    if (value !== null) {
      dispatch(updateCartSagaStart({ ...item, quantity: value }));
    }
  }
  function blur() {
    if (quantity === null) {
      setQuantity(item.quantity);
      return dispatch(updateCartSagaStart(item));
    }
  }
};

const Cart: React.FC<CartProp> = ({ carts }) => {
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
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                align="middle"
                className={style.info_wrap}
                key={cart.product.id}
              >
                <Item item={cart} />
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
};

export default Cart;
