import { Button, InputNumber, Spin } from "antd";
import React from "react";
import { ProductType } from "../type";
import Common from "./Common";
import style from "./Detail.module.css";

interface DetailProp {
  product: ProductType | undefined;
}

const Detail: React.FC<DetailProp> = ({ product }) => {
  if (product === undefined) {
    return <Spin />;
  }

  return (
    <Common>
      <div className={style.content_wrap}>
        <div className={style.content_left}>
          <img
            src={product.img}
            alt={product.title}
            className={style.item_img}
          />
        </div>
        <div className={style.content_right}>
          <h2 className={style.item_title}>{product.title}</h2>
          <hr />
          <div className={style.item_price}>
            <span>{product.price.toLocaleString()}원</span>
          </div>
          <div className={style.items_bottom}>
            <InputNumber
              min={1}
              max={10}
              size="large"
              defaultValue={1}
              className={style.item_quantity}
            />
            <Button type="primary" className={style.item_button}>
              add cart
            </Button>
          </div>
        </div>
      </div>
    </Common>
  );
};

export default Detail;
