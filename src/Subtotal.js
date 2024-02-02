import React from 'react';
import './Subtotal.css';

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', // Change this to your desired currency code
    }).format(value);
}

function Subtotal() {
    const subtotalValue = 0; // Replace this with your actual subtotal value

    return (
        <div className='subtotal'>
            <>
                <p>
                    Subtotal (0 items): <strong>{formatCurrency(subtotalValue)}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type='checkbox' /> This order contains a gift
                </small>
            </>

            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
