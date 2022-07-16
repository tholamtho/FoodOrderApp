import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import ProductInterface from "../interfaces/products";
import { handleClickAddToCard } from "../utils/addToCart";
import { Rating } from "react-simple-star-rating";
import { StarFill } from "react-bootstrap-icons";
export const Products: React.FC<ProductInterface> = (
  product: ProductInterface
) => {
  return (
    <>
      <Card
        className="my-3 p3 rounded"
        style={{ height: "630px", width: "350px" }}
      >
        <a href={`/products/${product.id}`}>
          <Card.Img
            src={product.imageSource}
            style={{ height: "400px", width: "350px" }}
          />
          <h2>{product.name}</h2>
        </a>
        {!!product.type ? <p>Type: {product.type}</p> : <div />}
        <p style={{ overflow: "hidden" }}>Product Details: {product.details}</p>
        <Rating initialValue={5} ratingValue={product.rated} />
        <Button variant="primary">Add To Cart</Button>
      </Card>
    </>
  );
};
