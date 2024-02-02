import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                title: title,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='container__product'>
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className='product__price'>${price}</p>

                    {typeof rating === 'number' && rating > 0 &&  (
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

                <img className='product__img' src={image} alt="product-img" />

                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product
