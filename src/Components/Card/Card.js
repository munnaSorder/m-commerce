import React, { useEffect, useState } from 'react';
import './card.css';
import { getDatabaseCart } from '../databaseManager/databaseManager';
import fakeData from '../../fakeData';
import CardItem from './CardItem';


const Card = () => {
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        const cardItems = getDatabaseCart();
        const itemsKeys = Object.keys(cardItems)
        const cardProducts = itemsKeys.map(key => {
            const product = fakeData.find(product => product.key === key)
            product.quantity = cardItems[key]
            return product;
        });
        setCart(cardProducts);
    },[])

    return (
        <div className="card-container">
            <h5 className="card-title">Your Order: </h5>
            <div className="item">
                    {
                        cart.map(product => <CardItem product={product} />)
                    }
            </div>
            <div className="calculation">
                <div className="d-flex justify-content-between">
                    <h5>Delivery Fee: </h5>
                    <h5 className="">00</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <h5>Vat+Tax: </h5>
                    <h5 className="">00</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <h5>Subtotal: </h5>
                    <h5 className="">00</h5>
                </div>
            </div>
            <button className="btn btn-success w-100">CHECKOUT</button>
        </div>
    );
};

export default Card;