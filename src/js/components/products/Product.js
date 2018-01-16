import React from 'react';
import './product.css';

const Product = (props) => {
    return(
        <div className="product">
            <div className="product__name">{props.name}</div>
            <div className="product__details">
                <img className="product__image" src={props.image}/>
                <div className="product__info">
                    <div className="product__description">{props.description}</div>
                    <div className="product__price">Price: £{props.price}</div>
                </div>
            </div>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;