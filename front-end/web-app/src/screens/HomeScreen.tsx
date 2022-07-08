import React from "react";
import productList from "../temp/product";
import ProductInterface from "../interfaces/products";
import { Row, Col } from "react-bootstrap";
import { Products } from "../components/Products";
const HomeScreen = () => {
  return (
    <div>
      <Row>
        {productList.map((products: ProductInterface) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Products {...products} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
