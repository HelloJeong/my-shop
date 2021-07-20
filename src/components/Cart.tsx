import { Button, Card, Empty, InputNumber } from "antd";
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
        <Empty />
      </Common>
    );
  }

  return (
    <Common>
      <Card title="장바구니">
        <Card
          type="inner"
          title={
            <Link to={`/product/${carts[0].product.id}`}>
              {carts[0].product.title}
            </Link>
          }
          extra={<Button onClick={deleteCart}>삭제</Button>}
        >
          <div className={style.content_wrap}>
            <div className={style.content_img}>
              <img
                src={carts[0].product.img}
                alt={carts[0].product.title}
                className={style.item_img}
              />
            </div>
            <div className={style.content_input}>
              <InputNumber
                min={1}
                max={10}
                size="large"
                defaultValue={1}
                className={style.item_quantity}
                // value={quantity}
                // onChange={change}
                // onBlur={blur}
              />
            </div>
            <div className={style.content_price}>
              <span>
                {carts[0].product.price.toLocaleString()}원
                {carts[0].quantity > 1 &&
                  `(${(
                    carts[0].product.price * carts[0].quantity
                  ).toLocaleString()}원)`}
              </span>
            </div>
          </div>
        </Card>
      </Card>
      <hr />
      <div className={style.total_price}>
        <span>0원</span>
      </div>
    </Common>
  );

  function deleteCart() {}
};

export default Cart;
