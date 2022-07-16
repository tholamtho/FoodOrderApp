import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import ProductInterface from "../interfaces/products";
import { handleClickAddToCard } from "../utils/addToCart";
import { Rating } from "react-simple-star-rating";
export const Products: React.FC<ProductInterface> = (
  product: ProductInterface
) => {
  const [ratingValue, setRatingValue] = useState(product.rated);

  const handleRating = (rate: number) => {
    setRatingValue(rate);
  };

  // later in your code call rating 'state' with your initial value
  const handleReset = () => {
    setRatingValue(2.5);
  };
  return (
    <>
      <Card
        className="my-3 p3 rounded"
        style={{ height: "535px", width: "350px" }}
      >
        <a href={`/products/${product.id}`}>
          <Card.Img
            src={product.imageSource}
            style={{ height: "400px", width: "350px" }}
          />
          <h2>{product.name}</h2>
        </a>
        <Rating
          onClick={handleRating}
          initialValue={5}
          ratingValue={product.rated}
        />
        <p style={{ overflow: "hidden" }}>Product Details: {product.details}</p>
        <Button variant="primary">Add To Cart</Button>
      </Card>
    </>
  );
};
