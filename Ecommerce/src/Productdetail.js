import React, { useState } from 'react';
import './ProductDetail.css'; // This is your CSS file for styling

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('L');

  // Dummy data for the product
  const product = {
    title: "Men Full Sleeve Printed Hooded Sweatshirt",
    price: 349,
    originalPrice: 1499,
    discount: 76,
    rating: 4,
    ratingsCount: 16714,
    reviewsCount: 1561,
    imageUrl: 'path_to_your_image.jpg', // Replace with your image path
    colors: [{ name: "Black", imageUrl: 'path_to_color_image.jpg' }], // Replace with your color images paths
    sizes: ['M', 'L', 'XL'],
  };

  return (
    <div className="product-detail">
      <div className="product-images">
        {/* Thumbnail images and main image */}
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <div className="product-pricing">
          <span className="special-price">₹{product.price}</span>
          <span className="original-price">₹{product.originalPrice}</span>
          <span className="discount">{product.discount}% off</span>
        </div>
        <div className="product-rating">
          <span className="stars">{product.rating}</span>
          <span className="ratings-count">{product.ratingsCount} ratings</span>
          <span className="reviews-count">{product.reviewsCount} reviews</span>
        </div>
        <div className="product-colors">
          {/* Color options */}
        </div>
        <div className="product-sizes">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`size-option ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="product-offers">
          {/* Available offers */}
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
