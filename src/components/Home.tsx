import { Button, Col, PageHeader, Row } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import style from "./Home.module.css";

interface HomeProp {
  goCart: () => void;
  getProduct: () => void;
}

const Home: React.FC<HomeProp> = ({ goCart, getProduct }) => {
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
      <Content>
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
        >
          <Col xs={24} sm={12} md={8} lg={6}>
            <div className={style.item_box}>
              <img
                src="https://via.placeholder.com/800.jpg"
                alt="item"
                className={style.item_img}
              />
              <div className={style.item_info} title="itemitemitemitemitem">
                <img
                  src="images/recommended.png"
                  alt="md"
                  className={style.item_md}
                />
                <h2 className={style.item_title}>itemitemitemitemitem</h2>
                <span className={style.item_price}>1000원</span>
              </div>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer>제작자 Jeong</Footer>
    </Layout>
  );
};

export default Home;
