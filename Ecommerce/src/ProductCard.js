import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
