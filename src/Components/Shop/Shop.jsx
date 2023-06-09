import React, { useEffect, useState } from 'react';
import './Shop.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step-1 get id of addedProduct
        for (const id in storedCart) {
            //step-2 get product from products state by using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                //step-3 add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                //step-4 add the added Product to the saved cart
                savedCart.push(addedProduct)
            }
            // step-5 set the cart 
            setCart(savedCart)
        }
    }, [products]);


    const handleAddToCart = (product) => {

        // const newCart = [...cart, product];
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='order-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link className='link' to="/order">
                        <button className='btn-procced'>Review Orders <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;