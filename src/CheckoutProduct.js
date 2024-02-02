import React from 'react'
import './CheckoutProduct.css';


function CheckoutProduct({ id, image, rating, title, price }) {
    return (
        <div>
            <div className="checkoutProduct">
                <img src={image} alt="product" className="checkoutProduct__image" />

                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>

                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>

                    <div className="checkoutProduct__rating">
                        {typeof rating === 'number' && rating > 0 && (
                            <div className='product__rating'>
                                {Array(rating)
                                    .fill()
                                    .map((_, i) => (
                                        <p key={i}>⭐</p>
                                    ))
                                }
                            </div>
                        )}
                    </div>

                    <button>Remove From Basket</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
