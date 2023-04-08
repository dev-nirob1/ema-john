import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <h5>Price : $ {price}</h5>
            <p>Manufacturer : {seller}</p>
            <p>Ratings : {ratings} Stars</p>
            
        </div>
    );
};

export default Product;