import React from 'react'
import {useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/062020/Bookbazaar/Header_showcase_1500x250.jpg" />
                {(basket.length === 0) ?
                    <div>
                        <h2>You shopping bag is empty</h2>
                        <p> Your cart is empty, please use add to basket button to add items into cart</p>
                    </div> :
                    <div className="checkout__cart">
                        <h2 className="checkout__title">Your Shopping Cart</h2>
                        {basket.map(item => {
                            return <CheckoutProduct id={item.id} title={item.title} rating={item.rating} price={item.price} image={item.image} />
                        })}

                    </div>
                }
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
