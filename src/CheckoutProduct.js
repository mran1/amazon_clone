import React from 'react'
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';
function CheckoutProduct({id, title,rating,image,price}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket =()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill(1).map((ele, index) => {
                        return <span key={index}>⭐</span>
                    })}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
