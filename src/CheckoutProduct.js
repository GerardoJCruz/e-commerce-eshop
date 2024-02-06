import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, image, rating, title, price }) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = ()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET", 
            id: id
        })
    }
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

                    <button onClick={removeFromBasket}>Remove From Basket</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
