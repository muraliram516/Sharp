import React, { useState } from 'react';

const CartComponent = () => {
    // Initial hardcoded cart elements
    const [cartElements, setCartElements] = useState([
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        }
    ]);

    // Function to handle removal of an item from the cart
    const removeFromCart = (index) => {
        const newCartElements = cartElements.filter((item, itemIndex) => index !== itemIndex);
        setCartElements(newCartElements);
    };

    return (
        <div style={{ padding: '20px' }}>
            {cartElements.length > 0 ? (
                <div>
                    {cartElements.map((item, index) => (
                        <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                            <img src={item.imageUrl} alt={item.title} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
                            <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => removeFromCart(index)} style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartComponent;
