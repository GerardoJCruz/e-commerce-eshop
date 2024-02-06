import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', // Change this to your desired currency code
    }).format(value);
}

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const subtotalValue = getBasketTotal(basket); // Replace this with your actual subtotal value

    return (
        <div className='subtotal'>
            <>
                <p>
                    Subtotal ({basket.length} items): <strong>{formatCurrency(subtotalValue)}</strong>
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
