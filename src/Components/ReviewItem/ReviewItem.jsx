import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'
const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, img, price, name, quantity } = product;

    const totalPrice = price * quantity;

    return (
        <div className='review-item'>
            <img src={img} alt="orderd image" />
            <div className='review-details'>
                <p className='order-title'>{name}</p>
                <p>Price : <span className='orange-text'>${totalPrice}</span></p>
                <p>Order Quantity : <span className='orange-text'>{quantity}</span> </p>
            </div>
            <div>
                <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
            </div>
        </div>
    );
};

export default ReviewItem;