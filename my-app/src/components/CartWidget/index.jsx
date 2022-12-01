import React from "react";
import './styles.css';

const CartWidget = () => {
    return (
        <button className="cart-widget-button"
        type="button">
            <img className="header-menu-cart-image"  src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="cart"/>
            <span className="count-products">0</span>
        </button>
    )
}

export default CartWidget;