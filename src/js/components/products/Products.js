import React from 'react';
import Product from './Product';
import './products.css';

const Products = ({products}) => {
    let productsElement = products.map((product) => {
        let {sku, ...props} = product;
        return(<Product key={sku} {...props} />);
    });
    return(
        <div className="products">{productsElement}</div>
    );
};

export default Products;