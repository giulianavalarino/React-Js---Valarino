import React from "react";
import './styles.css';

const Card = ({ product}) => {
    const{id, categoryID, description, image, name, price, stock} = product || {};
    return (
        <div className="card">
            <img className="card-image" src={image} alt={name} />
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">{price}</p>
                <p className="card-stock">{stock} in stock</p>
            </div>
            <div className="card-button-container">
                <button className="card-button-minus">-</button>
                <input 
                    type='text'
                    placeholder="0"
                className="card-button-input"/>
                <button className="card-button-plus">+</button>
            </div>
        </div>
    )
}

export default Card;