import React from 'react'
import {useStateValue} from './StateProvider'
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/July-12-edit-banner4-kweruig9-banner4-web.jpg"/>
            
        </div>
    )
}

export default Checkout
