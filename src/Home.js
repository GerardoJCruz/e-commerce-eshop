import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg' alt='img' className='home__image' />

                    <div className="home__row">
                        <Product
                            id="123321"
                            title="This is an extended title to see how the product description should look like in with a large content This is an extended title to see how the product description should look like in with a large content"
                            price={11.96}
                            image="/products/bike.jpg"
                            rating={3}
                        />
                        
                        <Product
                            id="124321"
                            title="This is an extended title to see how the product description should look like in with a large content This is an extended title to see how the product description should look like in with a large content"
                            price={11.96}
                            image="/products/car.jpg"
                            rating={7}

                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="125321"
                            title="This is an extended title to see how the product description should look like in with a large content This is an extended title to see how the product description should look like in with a large content"
                            price={11.96}
                            image="/products/drone.jpg"
                            rating={9}
                        />
                        <Product
                            id="126321"
                            title="This is an extended title to see how the product description should look like in with a large content This is an extended title to see how the product description should look like in with a large content"
                            price={11.96}
                            image="/products/jacket.jpg"
                            rating={4}
                        />
                        <Product
                            id="127321"
                            title="This is an extended title to see how the product description should look like in with a large content This is an extended title to see how the product description should look like in with a large content"
                            price={11.96}
                            image="/products/ps5.jpg"
                            rating={5}
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="128321"
                            title="This is an extended title to see how the product description should look like in with a large content This is an extended title to see how the product description should look like in with a large content"
                            price={11.96}
                            image="/products/speaker.jpg"
                            rating={10}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
