import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';
function Product({ id, title, price, rating, image }) {
    let [{basket},dispatch] = useStateValue();
    let addItem = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id,
                title,
                price,
                rating,
                image
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill(1).map((ele,index) => {
                        return <span key={index}>⭐</span>
                    })}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addItem}>Add to Basket</button>
        </div>
    )
}

export default Product
