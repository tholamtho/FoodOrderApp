import React from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import ProductInterface from "../interfaces/products";
import { handleClickAddToCard } from "../utils/addToCart";
export const Products: React.FC<ProductInterface> = (
  product: ProductInterface
) => {
  return (
    <>
      <Card className="my-3 p3 rounded">
        <a href={`/products/${product.id}`}>
          <Card.Img src={product.imageSource} />
          <h2>{product.name}</h2>
        </a>
        <Button variant="primary" onClick={handleClickAddToCard(product.name)}>
          Add To Cart
        </Button>
      </Card>
    </>
  );
};
