import React from 'react';

const products = [
    { id: 1, title: 'Colors', price: 100 },
    { id: 2, title: 'Black and White Colors', price: 50 },
    { id: 3, title: 'Yellow and Black Colors', price: 70 },
];

const ProductList = ({ onAddToCart }) => {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.title} - ${product.price}</h3>
                    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
